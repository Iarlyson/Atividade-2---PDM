const { model, Schema, Types } = require("mongoose");

const SurverysStudentsModel = model(
  "Surveys",
  new Schema({
    ID: {
      type: Types.ObjectId,
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

module.exports = SurverysStudentsModel;
