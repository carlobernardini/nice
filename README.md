# [Nice!](https://nice.textkernel.nl)
[![npm (scoped)](https://img.shields.io/npm/v/@textkernel/nice.svg)](https://www.npmjs.com/package/@textkernel/nice)

Nice! is a framework of reusable UI elements, created by [Carlo Bernardini](mailto:bernardini@textkernel.nl) and maintained by the [Nice! circle](mailto:nice@textkernel.nl) within [Textkernel](https://textkernel.com).

To get started, check out <https://nice.textkernel.nl>.

## Why use Nice! in your project?
* Don't care about writing and maintaining CSS, it's done for you -- just apply some classes
* Reusable UI elements for delivering a consistent user experience across all products
  * Colors are taken directly from Textkernel's official [Branding Guideline](https://app.frontify.com/d/apB5ernOJZzj/textkernel-branding-guideline)
* All CSS produced by Nice! is already cross browser tested and supports all modern browsers (IE9+)
* It comes with icons and a grid system out of the box

## Quick start

Several quick start options are available:

- Clone the repo: `git clone https://github.com/textkernel/nice.git`
- Install with [npm](https://www.npmjs.com): `npm install @textkernel/nice`

## What's included

In this repository you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
nice/
├── assets/
└── dist/
    ├── nice.css
    ├── nice.min.css
    └── fonts/
```

We provide compiled CSS (`nice.css`), as well as compiled and minified CSS (`nice.min.css`).
For convenience, we also provide a number of webfonts (in `dist/fonts/`) and additional assets (logos, favicons; in `assets/`).
Source files are in SASS and can be found in `src/` folder. To import all of Nice! into your own SASS bundle, you can just `@import "nice";` assuming that `./nice/src` is on your SASS import path.

## Bugs and feature requests

Have a bug or a feature request? [Please open a new issue](https://github.com/textkernel/nice/issues/new).

## Documentation

Nice! documentation, can be found in `index.html` in the root of this repository, as well as on <https://nice.textkernel.nl>.

## Versioning

Nice! is maintained under [the Semantic Versioning guidelines](http://semver.org/).

Changes can be found in our [changelog](https://github.com/textkernel/nice/blob/master/CHANGELOG.md).

## Copyright and license

Code and documentation :copyright: 2017 [Textkernel B.V.](https://textkernel.com), released under the [MIT License](https://github.com/textkernel/nice/blob/master/LICENSE).
