import {
    controllers
} from './controllers.js';

let router = new Navigo(null, false);

router
    .on('#/contact', controllers.contact)
    .on('#/products/dvds', controllers.dvds)
    .on('#/products/cds', controllers.cds)
    .on('#/products/magazines', controllers.magazines)
    .on('#/products/books', controllers.books)
    .on('#/products/comics', controllers.comics)
    .on("#/login", controllers.login)
    .on('#/home', controllers.home)
    .on(() => {
        router.navigate("#/home");
    })
    .resolve();