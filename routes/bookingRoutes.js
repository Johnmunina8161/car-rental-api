const express = require("express");
const routes = require("express").Router();

const bookingController = require("../controllers/booking");
const validation = require('../middleware/errorMiddleware');

routes.get('/', async (req, res, next) => {
  try {
    await bookingController.getAll(req, res);
  } catch (error) {
    next(error);
  }
});


routes.get('/:id', async (req, res, next) => {
  try {
    await bookingController.getSingle(req, res);
  } catch (error) {
    next(error);
  }
});


routes.post(
  '/',
  validation.saverental,
  async (req, res, next) => {
    try {
      await bookingController.createRental(req, res);
    } catch (error) {
      next(error);
    }
  }
);


routes.put(
  '/:id',
  validation.saverental,
  async (req, res, next) => {
    try {
      await bookingController.updateRental(req, res);
    } catch (error) {
      next(error);
    }
  }
);


routes.delete('/:id', async (req, res, next) => {
  try {
    await bookingController.deleteRental(req, res);
  } catch (error) {
    next(error);
  }
});

module.exports = routes;
