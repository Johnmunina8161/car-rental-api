const { Router } = require("express");
const {
  getAllBookingsController,
} = require("../controllers/bookingController");

const bookingRouter = Router();

bookingRouter.get("/", getAllBookingsController);

module.exports = bookingRouter;
