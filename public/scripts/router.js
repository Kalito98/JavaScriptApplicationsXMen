let router = new Navigo(null, false);

router
    .on('home', controllers.home)
    .on('products', controllers.products)
    .on(() => {
        router.navigate('/home');
    })
    .resolve();