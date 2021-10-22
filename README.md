# Docs Asset Automation

A suite of automated screenshot routines, utilizing Cypress for the purpose of capturing and detecting changes in assets used by the Docs Team.

## Pre-requisites

- A recent version of [Node.js](https://nodejs.org/en/), installed via the official installer or the package manager of your choice. 
- It is highly recommended that you utilize [nvm](https://github.com/nvm-sh/nvm) in order to standardize versions of node used to run these utilities, and to take advantage of the `.nvmrc` file committed to this repository.

## Setup
- Run `npx cypress open` to download Cypress to your machine and start the UI Test Runner.
  - You can stop the UI Test Runner simply by closing its window(s), or by typing `Ctrl + C` at the command line.
- Update the `baseUrl` in `cypress.json` to your project's local/integration environment, then start [writing tests](https://docs.cypress.io/guides/getting-started/writing-your-first-test.html)!
  - Tests that are currently open in the UI Test Runner will automatically restart whenever a relevant file is modified, so you can see your tests pass or fail in real time.
- You can also kick off a headless test run of the test suites using `npx cypress run`.

### Handling credentials

Successfully running these test suites requires the use of accounts configured 
To prevent yourself and others from committing sensitive data, you can add the relevant fixture files to your `.gitignore` file, like so:
```
tests/cypress/fixtures/auth.json
```

Sensitive data can also be populated using [Environment Variables](https://docs.cypress.io/guides/guides/environment-variables.html), then accessed using [Cypress.env()](https://docs.cypress.io/api/cypress-api/env.html#Syntax).

