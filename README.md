Pix-UI
==============================================================================

Pix-UI is the implementation of Pix design principles 
and guidelines for its products.


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.4 or above
* Ember CLI v2.13 or above
* Node.js v8 or above


Installation
------------------------------------------------------------------------------

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`

Running / Development
---------------------

To visualize the components created in this library,
you can run storybook:
* `npm run storybook`

Usage
------------------------------------------------------------------------------

To create a new component:
* `ember generate component <component-name>`

It will create the following files:
* addon/components/<component-name>.js
* addon/templates/components/<component-name>.hbs
* tests/integration/components/<component-name>-test.js
* app/components/<component-name>.js

Edit those files to fit your component needs.  
Then call your component in 
stories/<component-name>.stories.js to 
visualize it in storybook.
