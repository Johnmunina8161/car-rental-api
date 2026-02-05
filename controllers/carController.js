const Car = require('../models/Car');

// GET /cars
exports.getAllCars = async (req, res) => {
  const cars = await Car.find();
  res.json(cars);
};

// GET /cars/:id
exports.getCarById = async (req, res) => {
  const car = await Car.findById(req.params.id);
  res.json(car);
};

// POST /cars
exports.createCar = async (req, res) => {
  const car = await Car.create(req.body);
  res.status(201).json(car);
};

// PUT /cars/:id
exports.updateCar = async (req, res) => {
  const car = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(car);
};

// DELETE /cars/:id
exports.deleteCar = async (req, res) => {
  await Car.findByIdAndDelete(req.params.id);
  res.status(204).end();
};
