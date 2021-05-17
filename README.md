# Cypress Stand Alone

## Tips

### Run a single spec

Append your test command which could be `npm t` with the following:

`-- --spec "cypress/integration/YOURSPEC.js"`

So it might look like this:

`npm t -- --spec "cypress/integration/demo.js`

or

`npm run cypress open -- --spec "cypress/integration/demo.js`
