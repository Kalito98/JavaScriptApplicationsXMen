/* globals require module */
"use strict";

const _ = require("lodash");

const DEFAULT_COOKIE_IMAGE = "https://dayinthelifeofapurpleminion.files.wordpress.com/2014/12/batman-exam.jpg";



module.exports = function (db) {
    db.defaults({
            products: []
        })
        .value();

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



    return {
        getProducts,
        getDvds,
        getCds,
        getBooks,
        getComics,
        getMagazines
        //     post,
        //     put
    };
};