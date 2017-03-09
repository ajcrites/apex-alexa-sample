import Alexa from "alexa-sdk";

import { handler as baseHandler } from "./src/handlers/base.es6";

export default (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.registerHandlers(baseHandler);
    alexa.execute();
};
