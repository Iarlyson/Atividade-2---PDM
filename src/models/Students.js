const { model, Schema, Types } = require("mongoose");

const StudentModel = model(
  "Student",
  new Schema({
    ID: {
      type: Types.ObjectId,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
  })
);

module.exports = StudentModel;
