const router = require('express').Router();
const auth = require('../middleware/auth');
const role = require('../middleware/role');
const controller = require('../controllers/carController');

// Public
router.get('/', controller.getAllCars);
router.get('/:id', controller.getCarById);

// Admin only
router.post('/', auth, role('admin'), controller.createCar);
router.put('/:id', auth, role('admin'), controller.updateCar);
router.delete('/:id', auth, role('admin'), controller.deleteCar);

module.exports = router;
