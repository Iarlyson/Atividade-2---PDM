const { model, Schema, Types } = require("mongoose");

const AnswersModel = model(
  "Answers",
  new Schema({
    ID: {
      type: Types.ObjectId,
      required: true,
      unique: true,
    },
    user_id: {
      type: Types.ObjectId,
      ref: "Student",
      required: true,
    },
    survey_id: {
      type: Types.ObjectId,
      ref: "Surveys",
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
  })
);

module.exports = AnswersModel;
