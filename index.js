import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

import orderController from "./controllers/orderController"

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

const PORT = process.env.PORT || 3020;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));