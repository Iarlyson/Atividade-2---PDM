const { model, Schema, Types } = require("mongoose");

const StudentsSubjectsModel = model(
  "Student",
  new Schema({
    ID: {
      type: Types.ObjectId,
    },
    user_id: {
        type: Types.ObjectId,
        ref: "Student",
        required: true,
    },
    subjects_id: {
        type: Types.ObjectId,
        ref: "Subjects",
        required: true,
    }
  })
);

module.exports = StudentsSubjectsModel;
