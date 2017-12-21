# [Nice!](https://nice.textkernel.nl)
[![npm (scoped)](https://img.shields.io/npm/v/@textkernel/nice.svg)](https://www.npmjs.com/package/@textkernel/nice)

Nice! is a framework of reusable UI elements, created by [Carlo Bernardini](mailto:bernardini@textkernel.nl) and maintained by the [Nice! circle](mailto:nice@textkernel.nl) within [Textkernel](http://textkernel.com).

To get started, check out <https://nice.textkernel.nl>.

## Why use Nice! in your project?
* Don't care about writing and maintaining CSS, it's done for you -- just apply some classes
* Reusable UI elements for delivering a consistent user experience across all products
  * Colors are taken directly from Textkernel's official [Branding Guideline](https://app.frontify.com/d/apB5ernOJZzj/textkernel-branding-guideline)
* All CSS produced by Nice! is tested and supports all modern browsers (IE10+). You can use a custom Autoprefixer configuration for specific needs.
* It comes with Textkernel icons and a grid system out of the box

## Quick start

Several quick start options are available:

- Clone the repo: `git clone https://github.com/textkernel/nice.git`
- Install with [npm](https://www.npmjs.com): `npm install @textkernel/nice`

## What's included

In the Git repository you will find static assets, source files and default build script. When cloning the repository you need to compile Nice! from source. Precompiled and minified variations are included with the NPM package (generated post-install). The file tree should look something like this:

```
nice/
├── .browserlistrc
├── .stylelintrc
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

The default build script generates a regular stylesheet (`nice.css`) as well as a minified one (`nice.min.css`).

For convenience, we also provide a number of webfonts (in `dist/fonts/`) and additional assets (logos, favicons; in `assets/`). Please note that Nice! only comes with Textkernel font icons. You will have to include e.g. FontAwesome yourself.

Source files are in [SASS](http://sass-lang.com/) and can be found in `src/` folder.

You can either use the precompiled CSS when including Nice! in your projects or you can use the source file `nice.scss` in your own build process.

## CSS Linting
Nice! uses CSS Linting to assure quality and consistency. Rules are found in `.stylelintrc`.

## Vendor prefixing
Nice! can handle vendor prefixing itself but instead it is recommended that you use a tool like [Autoprefixer](https://github.com/postcss/autoprefixer). When using Autoprefixer you should set variable `$using-autoprefixer` to `true` so Nice! will not do prefixing too. The default browser compatibility list used by Nice! is found in `.browserlistrc`.

## Bugs and feature requests

Have a bug or a feature request? [Please open a new issue](https://github.com/textkernel/nice/issues/new).

## Documentation

Nice! documentation, can be found in `index.html` in the root of this repository, as well as on <https://nice.textkernel.nl>.

## Versioning

Nice! is maintained under [the Semantic Versioning guidelines](http://semver.org/).

Changes can be found in our [changelog](https://github.com/textkernel/nice/blob/master/CHANGELOG.md).

## Copyright and license

Code and documentation :copyright: 2017 [Textkernel B.V.](http://textkernel.com), released under the [MIT License](https://github.com/textkernel/nice/blob/master/LICENSE).
