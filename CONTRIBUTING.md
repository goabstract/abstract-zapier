# Contributing to the abstract-zapier

We're very grateful for outside contributions, as they both improve the robustness of this Zapier integration and help inform how this integration is being used in real-world applications. Whether the contribution is a minor documentation fix or major feature enhancement, we're always happy to accept changes that adhere to the expectations in this document.

## Code of conduct

Please note that this project adheres to a [code of conduct](https://github.com/goabstract/abstract-zapier/blob/master/CODE_OF_CONDUCT.md).

## Submitting an issue

Please follow the provided template when [submitting an issue](https://github.com/goabstract/abstract-zapier/issues/new).

## Submitting a pull request

Please follow the provided template when [submitting a pull request](https://github.com/goabstract/abstract-zapier/compare).

## Local development

The the codebase is written using modern JavaScript language features. The commands below (and repository as a whole) use Yarn, but both Yarn and NPM can be used interchangeably depending on developer preference.

### Setup

Fork and clone the repository:

```sh
$ git clone https://github.com/<username>/abstract-zapier
```

### Installation

Install dependencies from the project root using Yarn:

```sh
$ cd abstract-zapier && yarn
```

### Building

Build the integration using the `zapier` CLI:

```sh
$ yarn build
```

### Linting

Lint and format all code using Prettier via ESLint:

```sh
$ yarn lint --fix
```

### Testing

Run unit tests using the `zapier` CLI:

```sh
$ yarn test
```

## Cutting releases

New package versions of `abstract-zapier` are automatically published to the Zapier platform whenever new tags are pushed to the repository. This repository uses [`standard-version`](https://github.com/conventional-changelog/standard-version) as convention to automate versioning, tagging, and changelog generation:

```sh
$ yarn release
$ git push origin master --follow-tags
```

Or cut a pre-release:

```sh
$ yarn release --prerelease alpha
$ git push origin master --follow-tags
```

<br />
<br />
<br />
<br />
<img src="https://www.abstract.com/wp-content/uploads/abstract-black-wordmark-rgb.png" width="136" height="auto" />
