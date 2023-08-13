const { Router } = require('express');
const { getAllProducts, createProduct, updateProduct } = require('../controllers/products.controllers');
const { productValidator } = require('../validators/products.validators');
const authenticate = require('../middlewares/auth.middleware');

const router = Router();

router.get('/products',getAllProducts);
router.post('/products', authenticate,productValidator, createProduct);
router.put('/products/:id', authenticate,updateProduct);

module.exports = router;