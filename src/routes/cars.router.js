const { Router } = require('express');
const { addProductToCar, buyProductsInCar, getAllProductsInCar, completedOrder } = require('../controllers/car.controllers');
const authenticate = require('../middlewares/auth.middleware');


const router = Router();

router.get('/products/car/:id', authenticate, addProductToCar);
router.post('/products/car/order',authenticate, buyProductsInCar)
router.get('/car/:id',  getAllProductsInCar);
router.put('/order/:id',authenticate, completedOrder)

module.exports = router;