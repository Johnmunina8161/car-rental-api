const Booking = require("../models/bookingModels");

const getAllBookingsController = async (req, res) => {
  try {
    const bookings = await Booking.find({});
    if (bookings.length < 1) {
      return res.status(200).json({
        success: true,
        message: "You have no bookings yet",
      });
    }

    return res.status(200).json({
      success: true,
      data: bookings,
    });
  } catch (error) {
    console.log(`Error in getAllBookingsController: ${error}`);
    return res.status(500).json("Internal Server Error");
  }
};

module.exports = { getAllBookingsController };
