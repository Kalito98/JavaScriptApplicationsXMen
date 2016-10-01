let dataService = {
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
    logout() {
        return Promise.resolve()
            .then(() => {
                console.log(5);
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