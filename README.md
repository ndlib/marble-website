# Mellon Unified Website for Hesburgh Library @ University of Notre Dame

[![Build Status](https://travis-ci.org/ndlib/mellon-website.svg?branch=master)](https://travis-ci.org/ndlib/mellon-website)
[![Maintainability](https://api.codeclimate.com/v1/badges/6b6a6d8137b35e0f6c9b/maintainability)](https://codeclimate.com/github/ndlib/mellon-website/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/6b6a6d8137b35e0f6c9b/test_coverage)](https://codeclimate.com/github/ndlib/mellon-website/test_coverage)

This website provides an interface to search and browse digital collections and items based on [IIIF Manifests](https://iiif.io/) and is built on industry tested technologies including [React](https://reactjs.org/) and [Redux](https://redux.js.org/).

## Building
### Requirements

* Node ^8.12 from [Node homepage](https://nodejs.org/en/) or [nvm](https://github.com/creationix/nvm).
* yarn `npm install -g yarn`

### Install

`yarn install`

### Start

`yarn start`

### Unit Testing

`yarn test`

or

`yarn test -- --coverage` to get a local coverage report: [Coverage Markers](https://github.com/kentaro-m/coverage-markers) in [Atom](https://atom.io/).

## Deployment

This repository is configured for continuous integration and deployment. Code changes are deployed when they reach the master branch with an approval process through [AWS CodePipeline](https://aws.amazon.com/codepipeline/).

In order for deployment to be successful, all unit tests must be passing.

Code for the infrastructure deployment process is available in [mellon-blueprints](https://github.com/ndlib/mellon-blueprints).

## License:

[Apache 2.0](https://github.com/ndlib/mellon-website/blob/master/LICENSE)
