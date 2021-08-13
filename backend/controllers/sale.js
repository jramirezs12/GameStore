const Sale = require("../models/sale");
const User = require("../models/user");
const Product = require("../models/product");

const registerSale = async(req, res) => {
    if (!req.body.price) {
        return res.status(401).send("Process failed: Incomplete data");
    }



    let product = await Product.findOne({ name: "Gears Of Wae" });
    if (!product)
        return res.status(400).send("Process failed: No product was assigned to sale");

    let user = await User.findOne({ name: "Juan Ramirez" });
    if (!user)
        return res.status(400).send("Process failed: No user was assigned to sale");

    const sale = new Sale({
        idProduct: product._id,
        idUser: user._id,
        price: req.body.price,
        bdStatus: true,
    })

    const result = await sale.save();
    if (!result)
        return res.status(401).send("Failed to register sale");
    return res.status(200).send({ sale });

};

const listSale = async(req, res) => {
    const sale = await Sale.find()
    if (!sale || sale.lenght === 0)
        return res.status(401).send("No sale found");
    return res.status(200).send({ sale });


};

module.exports = { registerSale, listSale };