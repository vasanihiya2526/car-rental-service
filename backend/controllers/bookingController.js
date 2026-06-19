const Booking = require("../models/Booking");
const Car = require("../models/Car");

exports.createBooking = async (req, res) => {
  try {
    const {
      carId,
      startDate,
      endDate,
    } = req.body;

    const car = await Car.findById(carId);

    const days =
      (new Date(endDate) - new Date(startDate)) /
      (1000 * 60 * 60 * 24);

    const totalAmount =
      days * car.pricePerDay;

    const booking = await Booking.create({
      user: req.user.id,
      car: carId,
      startDate,
      endDate,
      totalAmount,
    });

    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({
      user: req.user.id,
    }).populate("car");

    res.json(bookings);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};