const StudentModel = require("../models/Students");
const { uuid } = require("uuidv4");
class StudentController {
  static async create(req, res) {
    try {
      const student = req.body;

      StudentModel.create({ ...student })
        .then((result) => {
          return res.status(200).json(result);
        })
        .catch((err) => {
          return res.status(500).json({
            message: "Created Failed",
            error: err,
          });
        });
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        message: "Created Failed",
      });
    }
  }

  static async read(req, res) {
    try {
      const students = await StudentModel.find();

      return res.status(200).json(students);
    } catch (err) {
      return res.status(500).json({
        message: "Read failed!",
        error: err,
      });
    }
  }

  static async get(req, res) {
    try {
      const student = await StudentModel.findOne({ _id: req.params.id });
      if (student) {
        return res.status(200).json(student);
      } else {
        return res.status(400).json({
          message: "Does not student exists!",
          error: new Error("Does not student exists"),
        });
      }
    } catch (err) {
      return res.status(400).json({
        message: "Get Failed",
        error: err,
      });
    }
  }
}

module.exports = StudentController;
