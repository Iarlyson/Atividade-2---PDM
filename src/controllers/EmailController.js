const EmailService = require("../services/EmailService");
const StudentModel = require("../models/Students");
const SurveysModel = require("../models/Surveys");
const AnswersModel = require("../models/Answers");
const { resolve } = require("path");

class EmailController {
  static async execute(req, res) {
    const { email, survey_id } = req.body;

    const user = await StudentModel.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "User not exist!",
        error: new Error("User not exist!"),
      });
    }

    const survey = await SurveysModel.findOne({ ID: survey_id });

    if (!survey) {
      return res.status(400).json({
        message: "survey not exist",
        error: new Error("Survey not exist"),
      });
    }

    const path = resolve(__dirname, "view", "emailTemplate.hbs");

    const answer = await AnswersModel.findOne({
      $where: { user_id: user.ID, value: null },
    });

    if (answer) {
    }
  }
}

module.exports = EmailController;
