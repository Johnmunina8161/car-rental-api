const mongodb = require("../data/database");
const ObjectId = require("mongodb").ObjectId;

const getAll = async (req, res) => {
  const result = await mongodb.getDatabase().db().collection("rentals").find();
  result.toArray().then((rentals) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(rentals);
  });
};

const getSingle = async (req, res) => {
  const rentalId = new ObjectId(req.params.id);

  const result = await mongodb
    .getDatabase()
    .db()
    .collection("rentals")
    .find({ _id: rentalId });
  result.toArray().then((rentals) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(rentals);
  });
};

const createRental = async (req, res) => {
  const rental = {
    rentalId: req.body.rentalId,
    userId: req.body.userId,
    carId: req.body.carId,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    totalCost: req.body.totalCost,
    rentalStatus: req.body.rentalStatus,
    pickupLocationid: req.body.pickupLocationid,
    rentalPeriod: req.body.rentalPeriod,
  };
  const response = await mongodb
    .getDatabase()
    .db()
    .collection("rentals")
    .insertOne(rental);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res
      .status(500)
      .json(response.error || "Some error occurred while creating the rental.");
  }
};

const updateRental = async (req, res) => {
  const rentalId = new ObjectId(req.params.id);

  const rental = {
    rentalId: req.body.rentalId,
    userId: req.body.userId,
    carId: req.body.carId,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    totalCost: req.body.totalCost,
    rentalStatus: req.body.rentalStatus,
    pickupLocationid: req.body.pickupLocationid,
    rentalPeriod: req.body.rentalPeriod,
  };
  const response = await mongodb
    .getDatabase()
    .db()
    .collection("rentals")
    .replaceOne({ _id: rentalId }, rental);
  console.log(response);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(response.error || "Some error occurred while updating the rental.");
  }
};

const deleteRental = async (req, res) => {
  try {
    const rentalId = new ObjectId(req.params.id);

    const response = await mongodb
      .getDatabase()
      .db()
      .collection("rentals")
      .deleteOne({ _id: rentalId });

    if (response.deletedCount === 1) {
      return res.status(204).send();
    } else {
      return res.status(404).json({ message: "Rental not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = {
  getAll,
  getSingle,
  createRental,
  updateRental,
  deleteRental,
};
