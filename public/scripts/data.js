let dataService = {
    products(){
        return requester.getJSON("/api/products");
    },
    books() {
        return requester.getJSON("/api/products/books");
    },
    magazines() {
        return requester.getJSON("/api/products/magazines");
    },
    comics() {
        return requester.getJSON("/api/products/comics");
    },
    dvds() {
        return requester.getJSON("/api/products/dvds");
    },
    cds() {
        return requester.getJSON("/api/products/cds");
    },
    login(user) {
        return requester.putJSON("/api/auth", user)
            .then(respUser => {
                localStorage.setItem("username", respUser.result.username);
                localStorage.setItem("authKey", respUser.result.authKey);
            });
    },
    register(user) {
        return requester.postJSON("/api/users", user);
    },
    addBook(book) {
        return requester.postJSON("/api/products/books", book);
    },
    addMagazine(magazine) {
        return requester.postJSON("/api/products/magazines", magazine );
    },
    addComic(comic) {
        return requester.postJSON("/api/products/comics",comic );
    },
    addCd(cd) {
        return requester.postJSON("/api/products/cds", cd);
    },
    addDvd(dvd) {
        return requester.postJSON("/api/products/dvds", dvd);
    },
    logout() {
        return Promise.resolve()
            .then(() => {
                localStorage.removeItem("username");
                localStorage.removeItem("authKey");
            });
    },
    isLoggedIn() {
        return Promise.resolve()
            .then(() => {
                return !!localStorage.getItem("username");
            });
    }
};
