# CloudWare Angular [cloudware-angular]

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.1.

## Applying Git-Flow in this repo

To understand [Git Flow] (https://danielkummer.github.io/git-flow-cheatsheet/index.html).

Master/Production branch: `master`<br/>
Next release/Development branch: `develop`<br/>
Feature branches: `[feature/]`. Syntax: `feature/feature-name` (example: feature/login-ui, feature/login-logic)<br/>
Bugfix branches: `[bugfix/]`. Syntax: `bugfix/fix-name` (example: bugfix/fix-login-validation)<br/>
Release branches: `[release/]`. Syntax: `release/version.tag` (example: release/1.2.0)<br/>
Hotfix branches: `[hotfix/]`. Syntax: `hotfix/hotfix-name` (example: hotfix/fix-activation-code-color)<br/>
Support branches: `[support/]`. Syntax: `support/old.version.tag-support-name` (For support old releases only. Example: support/1.1.0-fix-login-validation)<br/>

### Some Useful `Git Flow` commands:

#### a. Inititate:
To init git flow:
> `git flow init`

#### b. Features:
To start a feature: 
> `git checkout develop`<br/>
> `git flow feature start login-ui`

To publish the feature branch for others can see it:
> `git flow feature publish login-ui`

To finish a feature and merge code to `develop`:
> `git flow feature finish login-ui`

#### c. Releases:
To start a release: 
> `git checkout develop`<br/>
> `git flow release start 0.1.1` (replace `0.1.1` with the correct version tag)

To publish the release branch for others can see it:
> `git flow release publish 0.1.1`

To finish a release and merge code to `master`:
> `git flow release finish 0.1.1`

#### c. Hotfixes:
The same for releases and others. To start a release: 
> `git checkout master`<br/>
> `git flow hotfix start 0.1.2` (replace `0.1.2` with the correct version tag - current version of master + 1)

To publish the hotfix branch for others can see it:
> `git flow hotfix publish 0.1.2`

To finish a hotfix and merge code to `master`:
> `git flow hotfix finish 0.1.2`

### Versioning:

Follow: `<major>.<minor>.<bug-fixes>`<br/>
Examples:<br/>
First release name: `0.1.0`<br/>
QC found bug in First release, DEV fix and increase version to: `0.1.1`<br/>
QC found bug in First release, DEV fix and increase version to: `0.1.2`<br/>
Finish release, merge to master: `0.1.2`<br/>
New feature release: `0.2.0`<br/>
QC found bug in new release, DEV fix and increase version to: `0.2.1`<br/>
QC found bug in master release, DEV hotfix and increase version to: `0.1.3` (current master release: `0.1.2`)<br/>
Finish release, merge to master: `0.2.1`

## Development server

Run `npm start` for a development server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

For file generating, first please install [Angular CLI](https://github.com/angular/angular-cli)<br/>
Run `ng generate component containers/container-name` to generate a new container.<br/>
Run `ng generate component components/component-name` to generate a new component.<br/>
Run `ng generate service services/service-name` to generate a new class.<br/>
Run `ng generate class common/classes/class-name` to generate a new class.<br/>
Run `ng generate interface common/interfaces/interface-name` to generate a new interface.<br/>
You can also use `ng generate` with `directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use `npm run build:prod` for a production build.

## Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI, go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
