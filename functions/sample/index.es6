import Alexa from "alexa-sdk";

import { handler as baseHandler } from "./src/handlers/base.es6";

export default (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.appId = process.env.APP_ID;
    alexa.registerHandlers(baseHandler);
    alexa.execute();
};
