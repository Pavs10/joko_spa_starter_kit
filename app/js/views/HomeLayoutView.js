//var Marionette     = require('marionette');
import Marionette from 'marionette';
//var Templates      = require('joko-templates');
import Templates from 'joko-templates';

var HomeLayoutView = Marionette.LayoutView.extend({
    template: Templates.homeLayoutView
});

module.exports = HomeLayoutView;
