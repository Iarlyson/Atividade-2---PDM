const { model, Schema, Types } = require("mongoose");

const AnswersModel = model(
  "Answers",
  new Schema({
    user_id: {
      type: Types.ObjectId,
      required: true,
      ref: "Student",
    },
    survey_id: {
      type: Types.ObjectId,
      required: true,
      ref: "Surveys",
    },
    value: {
      type: Number,
      required: true,
    },
  })
);

module.exports = AnswersModel;
