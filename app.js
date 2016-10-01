/* globals require console */
"use strict";

const express = require("express"),
    bodyParser = require("body-parser"),
    lowdb = require("lowdb"),
    cors = require("cors");

let db = lowdb("./data/data.json");
db._.mixin(require("underscore-db"));

let app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(express.static("public"));

// require("./utils/authorize-user")(app, db);

let usersController = require("./controllers/users-controller")(db);
app.get("/api/users", usersController.get);
app.post("/api/users", usersController.post);
app.put("/api/auth", usersController.put);

let productsController = require("./controllers/products-controller")(db);

app.get("/api/products", productsController.get.getProducts);
app.get("/api/products/dvds", productsController.get.getDvds);
app.get("/api/products/cds", productsController.get.getCds);
app.get("/api/products/magazines", productsController.get.getMagazines);
app.get("/api/products/comics", productsController.get.getComics);
app.get("/api/products/books", productsController.get.getBooks);

app.post("/api/products/books", productsController.post.postBook);
app.post("/api/products/comics", productsController.post.postComic);
app.post("/api/products/cds", productsController.post.postCd);
app.post("/api/products/dvds", productsController.post.postDvd);
app.post("/api/products/magazines", productsController.post.postMagazine);

let port = 3000;
app.listen(port, () => console.log(`Server is running at http://localhost:${port}`));