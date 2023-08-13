const { check } = require("express-validator");
const validateResult = require("../middlewares/validate.middleware");

const productValidator = [
    check("name", "error en el nombre del producto")
    .exists()
    .withMessage("Falta el campo de name")
    .notEmpty()
    .withMessage("El nombre no debe estar vacio")
    .isString()
    .withMessage("El nombre no es un string"),
    check("description", "Error con la descripcion")
    .exists()
    .withMessage("Falta el campo de description")
    .notEmpty()
    .withMessage("la descripcion no debe estar vacio")
    .isString()
    .withMessage("la description no es un string"),
    check("productImage", "error con la imagen del producto")
    .exists()
    .withMessage("falta campo de la imagen")
    .notEmpty()
    .withMessage("este campo requiere de una imagen"),
  validateResult,
]

module.exports = {
    productValidator,
};
  