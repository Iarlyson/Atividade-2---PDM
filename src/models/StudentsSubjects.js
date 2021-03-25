const { model, Schema, Types } = require("mongoose");

const StudentsSubjectsModel = model(
  "Student",
  new Schema({
    ID: {
      type: String,
    },
    user_id: {
      type: String,
      required: true,
    },
    subjects_id: {
      type: String,
      required: true,
    },
  })
);

module.exports = StudentsSubjectsModel;
