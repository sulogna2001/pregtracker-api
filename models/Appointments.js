const mongoose = require("mongoose");
const AppointmentSchema = new mongoose.Schema(
  {
    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctors",
    },
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patients",
    },
    problem: {
      type: String,
    },

    expirity: {
      type: String,
      enum: ["true", "false"],
      default: "false",
    },

    startTimeHours: {
      type: Number,

      min: 0,
      max: 23,
    },
    startTimeMinutes: {
      type: Number,

      min: 0,
      max: 59,
    },
    endTimeHours: {
      type: Number,

      min: 0,
      max: 23,
    },
    endTimeMinutes: {
      type: Number,

      min: 0,
      max: 59,
    },
    Date: {
      type: Number,
    },
    Price: {
      type: String,
    },
    Status: {
      type: String,
      enum: ["completed", "notcompleted"],
      default: "notcompleted",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Appointments", AppointmentSchema);
