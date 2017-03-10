import voicelabsSdk from "voicelabs";

import { getQuestion } from "../models/questions.es6";

const VoiceLabs = voicelabsSdk(process.env.VOICELABS_APP_TOKEN);

export const handler = {
    async GetQuestionIntent() {
        const question = await getQuestion();
        await VoiceLabs.track(this.event.session, this.event.request.intent.name, null, question),
        this.emit(":ask", question);
    },
};
