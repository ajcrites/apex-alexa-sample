import voicelabsSdk from "voicelabs";
import { render } from "mustache";
import get from "lodash.get";

import { HELLO, GREETING } from "../../data/speech";

// Track events using Voicelabs: http://voicelabs.co/
// Create a token if you want to track events (optional)
const VoiceLabs = voicelabsSdk(process.env.VOICELABS_APP_TOKEN);

export const handler = {
    LaunchRequest() {
        this.emit("HelloIntent");
    },

    async HelloIntent() {
        // Attributes automatically acquired form dynamoDb for userId
        if (this.attributes.invokeCount) {
            this.attributes.invokeCount++;
        }
        else {
            this.attributes.invokeCount = 1;
        }

        // Add 'welcome back' text if this is a returning user
        const speech = render(HELLO.speech, {returning: this.attributes.invokeCount > 1});

        await VoiceLabs.track(this.event.session, this.event.request.intent.name, null, speech),
        this.emit(":tell", speech);
    },

    async GreetByNameIntent() {
        // Get the name from the `name` slot if it exists
        const name = get(this.event, "request.intent.slots.name.value");
        let speech;
        if (name) {
            speech = render(GREETING.speech, {name});
        }
        else {
            speech = GREETING.error;
        }
        await VoiceLabs.track(this.event.session, this.event.request.intent.name, null, speech),
        this.emit(":tell", speech);
    },
};
