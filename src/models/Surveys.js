const { model, Schema, Types } = require("mongoose");

const SurveysModel = model(
  "Surveys",
  new Schema({
    ID: {
      type: String,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  })
);

module.exports = SurveysModel;
