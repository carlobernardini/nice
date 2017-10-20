# [Nice!](https://nice.textkernel.nl)
[![npm (scoped)](https://img.shields.io/npm/v/@textkernel/nice.svg)](https://www.npmjs.com/package/@textkernel/nice)

Nice! is a framework of reusable UI elements, created by [Carlo Bernardini](mailto:bernardini@textkernel.nl) and maintained by the [Nice! circle](mailto:nice@textkernel.nl) within [Textkernel](http://textkernel.com).

To get started, check out <https://nice.textkernel.nl>.

## Why use Nice! in your project?
* Don't care about writing and maintaining CSS, it's done for you -- just apply some classes
* Reusable UI elements for delivering a consistent user experience across all products
  * Colors are taken directly from Textkernel's official [Branding Guideline](https://app.frontify.com/d/apB5ernOJZzj/textkernel-branding-guideline)
* All CSS produced by Nice! is tested and supports all modern browsers (IE10+). You can use a custom Autoprefixer configuration for specific needs.
* It comes with icons and a grid system out of the box

## Quick start

Several quick start options are available:

- Clone the repo: `git clone https://github.com/textkernel/nice.git`
- Install with [npm](https://www.npmjs.com): `npm install @textkernel/nice`

## What's included

In the Git repository you will find static assets, source files and default build script. When cloning the repository you need to compile Nice! from source. Precompiled and minified variations are included with the NPM package (generated post-install). The file tree should look something like this:

```
nice/
├── gulpfile.js
├── assets/
└── dist/
    ├── nice.css
    ├── nice.min.css
    └── fonts/
└── src/
    ├── nice.scss
    ├── elements/
    ├── fonts/
    └── ...
```

The default build script generates a regular stylesheet (`nice.css`) as well as a minified one (`nice.min.css`). Nice! will not handle vendor prefixing itself but instead assumes you use a tool like [Autoprefixer](https://github.com/postcss/autoprefixer).
 For convenience, we also provide a number of webfonts (in `dist/fonts/`) and additional assets (logos, favicons; in `assets/`).
Source files are in [SASS](http://sass-lang.com/) and can be found in `src/` folder.

It is recommended that you use one of the precompiled CSS versions when including Nice! in your projects.

## Bugs and feature requests

Have a bug or a feature request? [Please open a new issue](https://github.com/textkernel/nice/issues/new).

## Documentation

Nice! documentation, can be found in `index.html` in the root of this repository, as well as on <https://nice.textkernel.nl>.

## Versioning

Nice! is maintained under [the Semantic Versioning guidelines](http://semver.org/).

Changes can be found in our [changelog](https://github.com/textkernel/nice/blob/master/CHANGELOG.md).

## Copyright and license

Code and documentation :copyright: 2017 [Textkernel B.V.](http://textkernel.com), released under the [MIT License](https://github.com/textkernel/nice/blob/master/LICENSE).
