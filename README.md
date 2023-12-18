# Example Angular app with environment config setted by env vars

Based in the next solution  https://stackoverflow.com/a/76787941/5519675

Required dotenv:

`npm i dotenv -D`

When the repo is cloned is mandatory create environments file copying from `environments/environment.ts.template` to `environments/environment.ts` and `environments/environment.development.ts` and set the specific configuration for local development.


To test the script manually you can set a env var beforme execute the script

`API_URL=productionmio node deployment-utils/set-production-env-vars.js`

or copy .env.template to .env and set the the config