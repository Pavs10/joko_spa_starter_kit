//var Marionette = require('marionette');
import Marionette from 'marionette';
var Router = Marionette.AppRouter.extend({
    appRoutes: {
        'login': 'showLoginView'
    }
});

module.exports = Router;