const mongoose = require("mongoose");

const saleSchema = new mongoose.Schema({
    idProduct: { type: mongoose.Schema.ObjectId, ref: "product" },
    idUser: { type: mongoose.Schema.ObjectId, ref: "user" },
    date: { type: Date, default: Date.now },
    price: String,
    bdStatus: Boolean,
});


const sale = new mongoose.model("sale", saleSchema);
module.exports = sale;