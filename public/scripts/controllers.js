var handlebars = handlebars || Handlebars;

let controllers = {
    home: () => {
        return templates.get('home')
            .then((templateHtml) => {
                let templateFunc = handlebars.compile(templateHtml);
                let html = templateFunc();
                $("#main").html(html);

                $("#down-btn").click(function () {
                    console.log("clicked");
                    $('html, body').animate({
                        scrollTop: $("#home-products").offset().top - 100
                    }, 1500);
                });
            });
    },
    products: () => {

    },
    books: () => {
        var books;
        dataService.books()
            .then((booksResponse) => {
                books = booksResponse;

                return templates.get("books");
            })
            .then((templateHtml) => {
                let templateFunc = handlebars.compile(templateHtml);
                let html = templateFunc(books.result);

                $("#main").html(html);
            });
    },
    magazines: () => {
        var magazines;
        dataService.magazines()
            .then((magazinesResponse) => {
                magazines = magazinesResponse;

                return templates.get('magazines');
            })
            .then((templateHtml) => {
                let templateFunc = handlebars.compile(templateHtml);
                let html = templateFunc(magazines.result);

                $('#main').html(html);
            });

    },
    comics: () => {
        var comics;
        dataService.comics()
            .then((comicsResponse) => {
                comics = comicsResponse;

                return templates.get('comics');
            })
            .then((templateHtml) => {
                let templateFunc = handlebars.compile(templateHtml);
                let html = templateFunc(comics.result);

                $('#main').html(html);
            });
    },
    cds: () => {
        var cds;
        dataService.cds()
            .then((cdsResponse) => {
                cds = cdsResponse;

                return templates.get('cds');
            })
            .then((templateHtml) => {
                let templateFunc = handlebars.compile(templateHtml);
                let html = templateFunc(cds.result);

                $('#main').html(html);
            });
    },
    dvds: () => {
        var dvds;
        dataService.dvds()
            .then((dvdsResponse) => {
                dvds = dvdsResponse;

                return templates.get('cds');
            })
            .then((templateHtml) => {
                let templateFunc = handlebars.compile(templateHtml);
                let html = templateFunc(dvds.result);

                $('#main').html(html);
            });
    },
    contact: () => {
        return templates.get('contacts')
            .then((templateHtml) => {
                let templateFunc = handlebars.compile(templateHtml);
                let html = templateFunc(templateFunc);
                $("#main").html(html);
            });
    },
    login: () => {
        dataService.isLoggedIn()
            .then(isLoggedIn => {
                if (isLoggedIn) {
                    //redirect to
                    window.location = "#/home";
                    return;
                }

                templates.get("login")
                    .then((templateHtml) => {
                        let templateFunc = handlebars.compile(templateHtml);
                        let html = templateFunc();

                        $("#main").html(html);

                        $("#btn-login").on("click", (ev) => {
                            let user = {
                                username: $("#tb-username").val(),
                                passHash: $("#tb-password").val()
                            };

                            dataService.login(user)
                                .then((respUser) => {
                                    $(document.body).addClass("logged-in");
                                    $('.visible-when-not-logged-in').hide();
                                    $('.hidden-when-not-logged-in').show();
                                    document.location = "#/home";
                                });

                            ev.preventDefault();
                            return false;
                        });

                        $("#btn-register").on("click", (ev) => {
                            let user = {
                                username: $("#tb-username").val(),
                                passHash: $("#tb-password").val()
                            };

                            dataService.register(user)
                                .then((respUser) => {
                                    return dataService.login(user);
                                })
                                .then((respUser) => {
                                    $(document.body).addClass("logged-in");
                                    document.location = "#/home";
                                });

                            ev.preventDefault();
                            return false;
                        });

                    });
            });
    },
    logout: () => {
        dataService.logout()
            .then(() => {
                $(document.body).removeClass("logged-in");
                $('.visible-when-not-logged-in').show();
                $('.hidden-when-not-logged-in').hide();
            });
    }
};