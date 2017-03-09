import voicelabsSdk from "voicelabs";
import { HELLO } from "../../data/speech";

const VoiceLabs = voicelabsSdk(process.env.VOICELABS_APP_TOKEN);

export const handler = {
    LaunchRequest() {
        this.emit("HelloIntent");
    },

    async HelloIntent() {
        const speech = HELLO.speech;
        await VoiceLabs.track(this.event.session, "HelloIntent", null, speech);
        this.emit(":tell", speech);
    },
};
