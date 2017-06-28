/**
 * 
 * @type Module backbone|Module backbone
 */
//var Backbone = require('backbone');
import Backbone from 'backbone';
//var App = require('./app');
import App from './app';
//var RouterController = require('./controllers/RouterController');
import RouterController from './controllers/RouterController';
//var Router = require('./routers/Router');
import Router from './routers/Router';
App.session.checkAuth({
    complete: function () {
        
        App.start();
        
        new Router({controller: RouterController});
        
        if (Backbone.history) {
            Backbone.history.start();
        }
    }
});