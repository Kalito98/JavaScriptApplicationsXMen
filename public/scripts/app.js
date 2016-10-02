let router = new Navigo(null, false);

router
    .on('#/products/books/:id', controllers.singleBook)
    .on('#/products/dvds/:id', controllers.singleDvd)
    .on('#/products/cds/:id', controllers.singleCd)
    .on('#/products/magazines/:id', controllers.singleMagazine)
    .on('#/products/comics/:id', controllers.singleComic)
   .on('#/add/books', controllers.addBook)
   .on('#/add/dvds', controllers.addDvd)
   .on('#/add/cds', controllers.addCd)
   .on('#/add/magazines', controllers.addMagazine)
   .on('#/add/comics', controllers.addComic)
    .on('#/login', controllers.login)
    .on('#/contact', controllers.contact)
    .on('#/products/dvds', controllers.dvds)
    .on('#/products/cds', controllers.cds)
    .on('#/products/magazines', controllers.magazines)
    .on('#/products/books', controllers.books)
    .on('#/products/comics', controllers.comics)
    .on('#/home', controllers.home)
    .on(() => {
        router.navigate("#/home");
    })
    .resolve();

$('.btn-nav-logout').click(() => {
    controllers.logout();
});
$('.navigation').on('click', 'li', (ev) => {
    let $target = $(ev.target);
    $target.parents('nav').find('li').removeClass('active');
    $target.parents('li').addClass('active');
});
