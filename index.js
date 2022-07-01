'use strict';
let Funnel = require('broccoli-funnel');
let mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: require('./package').name,
  treeForPublic: function (tree) {
    var assetsTree = new Funnel('public');
    return mergeTrees([tree, assetsTree], {
      overwrite: true,
    });
  },
};
