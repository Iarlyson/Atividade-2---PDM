const { model, Schema, Types } = require("mongoose");

const SubjectsModel = model(
  "Subjects",
  new Schema({
    ID: {
      type: Types.ObjectId,
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
