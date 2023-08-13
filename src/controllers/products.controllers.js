const { Op } = require("sequelize");
const { Products } = require("../models");

const getAllProducts = async (req, res, next) => {
  try {
    // pedir todos los productos al modelo Products
    const products = await Products.findAll({
      where: {
        availableQty: {
          [Op.gt]: 0,
        },
      },
    });
    res.json(products);
  } catch (error) {
    next(error);
  }
};

const createProduct = async (req, res, next) => {
  try {
    const newProducts = req.body;
    const product = await Products.create(newProducts);

    res.status(201).json(product);
  } catch (error) {
      next(error)
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const {id} = req.params;
    const descriptProduct = req.body;

    await Products.update(descriptProduct, {
        where: {id}
    });

    res.status(204).send();
} catch (error) {
    next(error)
}
}

module.exports = {
  getAllProducts,
  createProduct,
  updateProduct,
};
