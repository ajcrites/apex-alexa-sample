import Alexa from "alexa-sdk";

import { handler as baseHandler } from "./src/handlers/base.es6";

export default (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.appId = process.env.APP_ID;
    alexa.registerHandlers(baseHandler);
    alexa.dynamoDBTableName = process.env.USER_TABLE_NAME;
    alexa.execute();
};

// Using async functions in event emitters will swallow rejected promise errors,
// so propagate them here
process.on("unhandledRejection", e => {
    console.log(e.stack);
});
