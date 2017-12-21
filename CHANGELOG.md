# Nice! version log

## 2.0.0
:date: 2017-12-21

### :star2: **Breaking changes**
- FontAwesome is no longer bundled with Nice!
- Footer element now requires `.nice-footer` class to be nice

### :star2: New features
- Added support for Autoprefixing (set variable `$using-autoprefixer` to `true`)
- Introduced new UI element for stepper / wizard (`.nice-stepper`)
- Support for disabling animations with `.no-animations` helper

### :star2: Improvements
- Tabs: Wrapper is now optional, so tab panel can be integrated in other components
- Dropdowns: Added animations on expand
- Buttons: Custom outline on focus
- Buttons: Support `brand` contextual color
- Footer: Element no longer affected without class applied
- Removed `webkit-scrollbar` styling because of very limited support

### :star2: Internal improvements
- Added support for style linting
- Removed Bourbon / Neat dependencies

## 1.2.1
:date: 2017-08-07

### :star2: Improvements
- Toggle switches: Added a `.small` state
- Dropdowns: Support left alignment of dropdowns and leafs using `.align-left`
- Badges: Added `.nice-badge` to make them independent from other components
- Control sizing: Extended and improved support for `.small` state. Can also be used on control- and button groups (including input fields, buttons and dropdowns).

### :star2: Internal improvements
- Documentation corrections:
  - Updated footer example
  - Updated header example
  - Added "Getting started" section
- Corrected last changelog entry

## 1.2.0
:date: 2017-05-19

### :star2: New features
- Introduced new UI element for tags
- Introduced new UI element for toggle switches
- Extended the login dialog with optional loading bar (`.nice-login-loading`)

### :star2: Improvements
- Tables: Headings within `tbody` now have a background color
- Tables: Darker background color for table cell hover state
- Dropdown: No left / right borders on item hover
- Dropdown: Support for multiselect with checkboxes / radios
- Header menu: Support multi-column submenu's

### :star2: Internal improvements
- Use placeholders for `box-sizing: border-box`, `user-select: none`
- Removed `node-neat`, `node-bourbon` dependencies, replaced with `bourbon`, `bourbon-neat`
- Updated `gulp-sass` to version 3.1.0
- Package: Moved gulp dependencies to dev-dependencies

### :wrench: Fixes
- Off canvas menu: Fixed `.nice-header-form` rendering on iOS devices
- Button groups: Fixed gaps between button / dropdown groups on iOS devices
- Input addons: Fixed height for iOS devices
- Gulpfile: Fixed task for documentation styles

## 1.1.5
:date: 2017-05-04

### :star2: New features
- Implemented additional helper classes
  - ... for forcing `top`, `right`, `bottom` and `left` position to be `0`
  - ... for setting a certain cursor type when pointing to an element
  - ... for overflow handling
- Added `.nice-modal-overlay` class for full-viewport content overlay when using modals
- Added new Textkernel product font icons for TK Portal and Connector Manager

### :star: Improvements
- Updated documentation to include use of `.nice-responsive-container`
- Updated documentation about grid layout
- Added disabled state for menu items
- Added disabled state for card controls
- Added `.nice-card-image` class

### :wrench: Fixes
- Updated `.viewport-center` class to use fixed instead of absolute positioning

## 1.1.4
:date: 2017-04-05

### :star2: Improvements
- Updated styling (mobile view) for items in a `.menu-alt` within the header
- Switched to using line-height for header menu item sizing instead of (vertical) padding
- Decreased font size and padding for dropdown items in header menus

### :star2: Internal improvements
- Fixed documentation snippet for dropdowns
- Added link to NPM package in header menu, updated documentation page title

### :wrench: Fixes
- Fixes border radius on mobile for items in a `.menu-alt` within the header
- Removed border color for header search input in off canvas mode

## 1.1.3
:date: 2017-03-30

### :star2: Internal improvements
- Removed `dist/` from git, but keeping it in the npm release
- Attached a simple highlighter to the search input on the demo page

## 1.1.2
:date: 2017-03-28

### :wrench: Fixes
- Box shadow on `.nice-header-collapse` would also show when off canvas menu isn't expanded
- Non-fixed header would have margins on both sides on mobile view

## 1.1.1
:date: 2017-03-28

### :wrench: Fixes
- Fixes and changes header '.menu-alt' items in mobile / tablet view
- Fixes padding issues for tabs that have icons assigned by class

## 1.1.0
:date: 2017-03-27

### :star2: New features / improvements
- Added menu component (`.nice-menu`)
- Added alternative button state (`.nice-btn-alt`), equal to `.nice-header-menu.alt li` items
- Popovers now support `.no-arrow` variation
- Implements distinct `disabled` state for form controls
- Introduces horizontal forms
- Adds support for gray and primary panel headings
- Applies styling to links in panel headings
- Applies pointer cursor to buttons
- Adds support for "accent" highlight on header menu items

### :wrench: Fixes
- Renamed `.nice-tabs-content` to `.nice-tab-content` (singular)
- Fixes off canvas menu to support multiple `.nice-header-menu` elements
- Unfloat `.nice-col-*` when applied to tables
- Remove element type constraint for stacked lists
- Support right aligmnent (`.pull-right`) on tabs
- Fixes checkbox / radios alignment without absolute positioning

## 1.0.5
:date: 2017-03-10

### :star2: Features
- Created a npm package
- First public release
