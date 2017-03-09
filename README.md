# Mobiquity Standard Sample Alexa+Lambda Project

This contains sample code for the setup of a Mobiquity-style
Alexa project backed by lambda and deployed by apex.

## Installation

* [`apex`](http://apex.run)
* [`yarn`](https://yarnpkg.com/en/)

Run `yarn install` (or `npm install`) to install development
dependencies.

We are using a version of the VoiceLabs SDK that has not
been published so you must download it here:
https://s3-us-west-1.amazonaws.com/voicelabs/static/voicelabs-sdk.zip

Unzip it and move it to `functions/sample`.

## Deployment
Update `project.json` to add an appropriate IAM role for
your lambda function. You should only need to do this once,
but if you are using multiple different roles for different
functions or environments, a different setup may be
required.

Use `apex deploy` to deploy the lambda function. You can
use `--set` to set environment variables used by the
deployment. For example:

    apex --profile mobschool --region us-east-1 deploy \
      --set 'VOICELABS_APP_TOKEN=1234'

### Creating the Alexa Skill
TODO -- this section

## Manual Testing
Once you have deployed the lambda function, you can test it
in the AWS console or command line using a sample Alexa
request event.

TODO add instructions for a device or [echosim.io](https://echosim.io).

## Automated Testing
TODO all of this
