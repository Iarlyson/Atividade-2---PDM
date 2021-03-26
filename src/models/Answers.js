const { model, Schema, Types } = require("mongoose");

const AnswersModel = model(
  "Answers",
  new Schema({
    ID: {
      type: String,
      required: true,
      unique: true,
    },
    user_id: {
      type: String,
      required: true,
    },
    survey_id: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
  })
);

module.exports = AnswersModel;
