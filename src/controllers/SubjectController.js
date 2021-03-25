const SubjectsModel = require("../models/Subjects");

class SubjectsController {
  static async create(req, res) {
    try {
      const subject = req.body;
      SubjectsModel.create(subject)
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

module.exports = SubjectsController;