const { model, Schema, Types } = require("mongoose");

const SurveysModel = model(
  "Surveys",
  new Schema({
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
