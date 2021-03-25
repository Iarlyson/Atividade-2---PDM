const StudentModel = require("../models/Students");

class StudentController {
  static async create(req, res) {
    try {
      const student = req.body;
      StudentModel.create(student)
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
}

module.exports = StudentController;
