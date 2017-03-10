# Mobiquity Standard Sample Alexa+Lambda Project

This contains sample code for the setup of a Mobiquity-style
Alexa project backed by lambda and deployed by apex.

## Installation

* [`apex`](http://apex.run)
* [`yarn`](https://yarnpkg.com/en/)

Run `yarn install` (or `npm install`) to install development
dependencies.

### For `sample` function

We are using a version of the VoiceLabs SDK that has not
been published so you must download it here:
https://s3-us-west-1.amazonaws.com/voicelabs/static/voicelabs-sdk.zip

Unzip it and move it to `functions/sample`.

Functions that you create that depend on this VoiceLabs SDK
will also require this folder in their function directory.

## Deployment
Update `project.json` to add an appropriate IAM role for
your lambda function. You should only need to do this once,
but if you are using multiple different roles for different
functions or environments, a different setup may be
required.

Also add a `name` attribute for your project. The resulting
`project.json` should look like this:

```
{
  "name": "<YOUR_NAME>_sample",
  "description": "<YOUR_DESCRIPTION>",
  "memory": 128,
  "timeout": 5,
  "handler": "lib.default",
  "role": "arn.aws:iam:us-east-1:#:<ROLE_NAME>",
  "hooks": {
    "build": "yarn install --production && ../../node_modules/.bin/webpack --config ../../webpack.config.js --bail",
    "clean": "rm -rf lib node_modules"
  },
  "runtime": "nodejs4.3"
}
```

Use `apex deploy` to deploy the lambda function. You can
use `--set` to set environment variables used by the
deployment. For example:

    apex --profile mobschool --region us-east-1 deploy \
      --set 'APP_ID=1234' \
      --set 'USER_TABLE_NAME=alexa_Users' \
      --set 'VOICELABS_APP_TOKEN=1234'

You can also set the environment variables using env
settings or a separate file. See the apex docs for details.

### Environment variables for the `sample` function

* `APP_ID` Skill ID for your Alexa app
* `USER_TABLE_NAME` DynamoDB table name for your user
 attriburtes data
* `VOICELABS_APP_TOKEN` for tracking events in voicelabs
 (optional)

## Creating an Alexa Skill
TODO -- this section

## Manual Testing
Once you have deployed the lambda function, you can test it
in the AWS console or command line using a sample Alexa
request event.

TODO add instructions for a device or [echosim.io](https://echosim.io).

## Automated Testing
TODO all of this
