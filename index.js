import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import orderController from "./controllers/orderController"
import productController from "./controllers/productController"
import userController from "./controllers/userController"

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(""); // mongodb link 
const database = mongoose.connection;

database.on("error", (error) => {
    console.log("Database error:", error);
});

database.once("connected", () => {
    console.log("Database Connected");
});

app.use('/', orderController)
app.use('/products/', productController)
app.use('/user/', userController)

app.listen(3020, () => console.log(`server running on port 3020`));