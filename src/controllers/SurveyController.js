const SurveyModel = require("../models/Surveys");

class SurveyController {
  static async create(req, res) {
    try {
      const survey = req.body;
      SurveyModel.create(survey)
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

module.exports = SurveyController;
