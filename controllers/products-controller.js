/* globals require module */
"use strict";

const _ = require("lodash");
const idGenerator = require('../utils/id-generator');

module.exports = function (db) {
    db.defaults({
            products: [],
            users: []
        })
        .value();

    // Get
    function getProductsFromDB() {
        return db.get('products').value();
    }


    function getProducts(req, res) {
        let products = getProductsFromDB();

        res.send({
            result: products
        });
    };

    function getDvds(req, res) {
        let products = getProductsFromDB()['dvds'];

        res.send({
            result: products
        });
    };

    function getCds(req, res) {
        let products = getProductsFromDB()['cds'];

        res.send({
            result: products
        });
    };

    function getMagazines(req, res) {
        let products = getProductsFromDB()['magazines'];

        res.send({
            result: products
        });
    };

    function getBooks(req, res) {
        let products = getProductsFromDB()['books'];

        res.send({
            result: products
        });
    };

    function getComics(req, res) {
        let products = getProductsFromDB()['comics'];

        res.send({
            result: products
        });
    }

    // Post
    function postDvd(req, res) {
        let dvd = req.body;
        dvd.id = idGenerator.next().value;

        getProductsFromDB()['dvds']
            .push(dvd);
    }

    function postCd(req, res) {
        let cd = req.body;
        cd.id = idGenerator.next().value;

        getProductsFromDB()['cds']
            .push(cd);
    }

    function postMagazine(req, res) {
        let magazine = req.body;
        magazine.id = idGenerator.next().value;

        getProductsFromDB()['magazines']
            .push(magazine);
    }

    function postBook(req, res) {
        let book = req.body;
        book.id = idGenerator.next().value;

        getProductsFromDB()['books']
            .push(book);
    }

    function postComic(req, res) {
        let comic = req.body;
        comic.id = idGenerator.next().value;

        getProductsFromDB()['comics']
            .push(comic);
    }


    return {
        get: {
            getBooks,
            getCds,
            getComics,
            getDvds,
            getMagazines,
            getProducts
        },
        post: {
            postBook,
            postCd,
            postComic,
            postDvd,
            postMagazine
        }
    };
};
