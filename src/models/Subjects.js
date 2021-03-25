const { model, Schema, Types } = require("mongoose");

const SubjectsModel = model(
  "Subjects",
  new Schema({
    ID: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    Workload: {
      type: String,
      required: true,
    },
  })
);

module.exports = SubjectsModel;
