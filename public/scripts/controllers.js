var handlebars = handlebars || Handlebars;

let controllers = {
    home: () => {
        var products;

        dataService.products()
            .then((productsResponse) => {
                products = productsResponse;
                console.log(products);
                return templates.get('home')
            })
            .then((templateHtml) => {
                let templateFunc = handlebars.compile(templateHtml);
                let html = templateFunc(products);
                $("#main").html(html);

                $(".navbar").removeClass("navbar-default").addClass("navbar-inverse");

                $(window).scroll(function() {
                    var height = $(window).scrollTop();

                    if (height > 50) {
                        $(".navbar").removeClass("navbar-inverse").addClass("navbar-default");
                        $('#return-to-top').fadeIn(200);
                    } else {
                        $(".navbar").removeClass("navbar-default").addClass("navbar-inverse");
                        $('#return-to-top').fadeOut(200);
                    }
                });

                $('#return-to-top').click(function() { // When arrow is clicked
                    $('body,html').animate({
                        scrollTop: 0 // Scroll to top of body
                    }, 500);
                });

                $("#down-btn").click(function() {
                    console.log("clicked");
                    $('html, body').animate({
                        scrollTop: $("#home-products").offset().top - 30
                    }, 1500);
                });

                $('.products-slider').unslider();
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

                $(".navbar").removeClass("navbar-inverse").addClass("navbar-default");
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

                $(".navbar").removeClass("navbar-inverse").addClass("navbar-default");
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

                $(".navbar").removeClass("navbar-inverse").addClass("navbar-default");
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

                $(".navbar").removeClass("navbar-inverse").addClass("navbar-default");
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

                $(".navbar").removeClass("navbar-inverse").addClass("navbar-default");
            });
    },
    contact: () => {
        return templates.get('contacts')
            .then((templateHtml) => {
                let templateFunc = handlebars.compile(templateHtml);
                let html = templateFunc(templateFunc);
                $("#main").html(html);

                $(".navbar").removeClass("navbar-inverse").addClass("navbar-default");
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

                        $(".navbar").removeClass("navbar-inverse").addClass("navbar-default");

                        $("#btn-login").on("click", (ev) => {
                            let user = {
                                username: $("#tb-username").val(),
                                passHash: $("#tb-password").val()
                            };

                            dataService.login(user)
                                .then((respUser) => {
                                    console.log(respUser);
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
