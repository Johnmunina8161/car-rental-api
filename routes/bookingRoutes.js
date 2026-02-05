const { Router } = require("express");
const {
  getAllBookingsController,
  addBookingController,
} = require("../controllers/bookingController");

const bookingRouter = Router();

bookingRouter.get("/", getAllBookingsController);
bookingRouter.post("/", addBookingController);

module.exports = bookingRouter;
