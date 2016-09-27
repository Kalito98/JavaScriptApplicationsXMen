import sammy from 'sammy';

import ItemsController from 'public/controllers/ItemsController';
import HomeController from 'public/controllers/HomeController';
import UsersController from 'public/controllers/UsersController';

import user from 'public/models/data/user';

var app = new Sammy('#main', function () {
    this.get('#/', HomeController.index);
    this.get('#/login', UsersController.login);
    this.get('#/register', UsersController.register);
    this.get('#/loggedOut', UsersController.logout);
    this.post('#/login', UsersController.postLogin);
    this.post('#/register', UsersController.postRegister);
    // this.get('#/titles', ItemsController.titles);
    // this.get('#/books/details/:id', ItemsController.details);
});
(function(){
    app.run('#/');

    if(user.getCurrentUser()){
        $('#username').html("Welcome, " + user.getCurrentUser().attributes.username);
        $('.logout').show();
    } else {
        $('.login').show();
    }

    $('.logout').click(function(){
        user.signOut();
        document.location.reload(true);
    })
}());