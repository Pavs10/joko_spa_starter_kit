//var Backbone = require('backbone');
import Backbone from 'backbone';
var UserModel = Backbone.Model.extend({
        defaults: {
            id: 0,
            username: '',
            name: '',
            email: ''
        },

        url: function() {
            return '/api/users';
        }
});
   
module.exports = UserModel;
