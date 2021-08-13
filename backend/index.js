const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./db/db');
const Sale = require("./routes/sale");
const Product = require("./routes/product");
const User = require("./routes/user");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/sale", Sale);
app.use("/api/user", User);
app.use("/api/product", Product);

app.listen(process.env.PORT, () => console.log("Backend server running on port " + process.env.PORT));

dbConnection();