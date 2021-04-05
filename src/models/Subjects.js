const { model, Schema, Types } = require("mongoose");

const SubjectsModel = model(
  "Subjects",
  new Schema({
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
