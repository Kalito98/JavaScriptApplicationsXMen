let dataService = {
    books() {
        return requester.getJSON("/api/products/books");
    },
    magazines(){
        return requester.getJSON("/api/products/magazines");
    },
    comics(){
        return requester.getJSON("/api/products/comics");
    },
    dvds(){
        return requester.getJSON("/api/products/dvds");
    },
    cds(){
        return requester.getJSON("/api/products/cds");
    }
};
