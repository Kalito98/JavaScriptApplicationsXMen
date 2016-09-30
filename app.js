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
app.get("/api/products", productsController.getProducts);
app.get("/api/products/dvds", productsController.getDvds);
app.get("/api/products/cds", productsController.getCds);
app.get("/api/products/magazines", productsController.getMagazines);
app.get("/api/products/comics", productsController.getComics);
app.get("/api/products/books", productsController.getBooks);

let port = 3000;
app.listen(port, () => console.log(`Server is running at http://localhost:${port}`));