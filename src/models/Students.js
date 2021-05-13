const {model, Schema, Types} = require("mongoose");

const StudentModel = model(
    "Student",
    new Schema({
        name: {
            type: String,
            required: true,
        },
        password: {
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
