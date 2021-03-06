# maximilianhenrich

[![license][license-image]][license-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][dependencyci-image]][dependencyci-url]

> Maximilian Henrich portfolio site

## Prerequisites

To install this project, you'll need the following things installed on your machine.

1. [Jekyll](http://jekyllrb.com/) - `$ gem install jekyll -v 3.5.1`
2. [NodeJS](http://nodejs.org) - use the installer.
3. Yarn

## Local Installation

1. Clone this repo, or download it into a directory of your choice.
2. Inside the directory, run `yarn`.

## Usage

**Development mode**

This will give you file watching, browser synchronisation, auto-rebuild, CSS injecting etc.

```shell
$ yarn run start
```

**Deploy mode**

You can easily deploy your site build with the command
```shell
$ yarn run deploy
```

## Tests

If you want to run the tests on your local machine please install `gem install html-proofer`. And then run the tests using
```shell
$ htmlproofer ./_site
```

[license-image]: https://img.shields.io/badge/license-ISC-blue.svg
[license-url]: https://github.com/mojitane/maximilianhenrich/blob/master/LICENSE
[travis-image]: https://travis-ci.org/mojitane/maximilianhenrich.svg?branch=master
[travis-url]: https://travis-ci.org/mojitane/maximilianhenrich
[dependencyci-image]: https://dependencyci.com/github/mojitane/maximilianhenrich/badge
[dependencyci-url]: https://dependencyci.com/github/mojitane/maximilianhenrich
