import sammy from 'sammy';

import ItemsController from 'controllers/ItemsController';
import HomeController from 'controllers/HomeController';
import UsersController from 'controllers/UsersController';

import user from 'models/data/user';
(function(){
  const
  navbar = $('#navbar');

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
    app.run('#/');

    if(user.getCurrentUser()){
        $('#username').html("Welcome, " + user.getCurrentUser().attributes.username);
        $('#logout-btn').removeClass('hidden');
        $('#register-btn').addClass('hidden');
        $('#login-btn').addClass('hidden');
    } else {
      $('#logout-btn').addClass('hidden');
      $('#register-btn').removeClass('hidden');
      $('#login-btn').removeClass('hidden');
    }

    $('#logout-btn').click(function(){
        user.signOut();
      $.get('#/', function () {
        $('#main').html('');
        });
        $('#login-btn').removeClass('hidden');
        $('#register-btn').removeClass('hidden');
        $('#logout-btn').addClass('hidden');
    });
    navbar.on('click', 'li', (ev) => {
      let $target = $(ev.target);
      $target.parents('nav').find('li').removeClass('active');
      $target.parents('li').addClass('active');
    });
}());
