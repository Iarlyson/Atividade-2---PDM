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

    const survey = await SurveysModel.findById(survey_id);

    if (!survey) {
      return res.status(400).json({
        message: "survey not exist",
        error: new Error("Survey not exist"),
      });
    }

    const answer = await AnswersModel.findOne({
      user_id: user._id,
      value: null,
    })
      .populate("user_id")
      .populate("survey_id")
      .exec();

    if (answer) {
      await EmailService.execute({
        to: email,
        subject: answer.title,
        variables: {
          name: user.name,
          title: survey.title,
          description: survey.description,
          link: `${process.env.PROJECT_URL}/nps/`,
        },
      });

      return res.status(200).json({
        message: "Send Mail!",
      });
    }

    const answerNew = await AnswersModel.create({
      user_id: user._id,
      survey_id: survey._id,
      value: 0,
    });

    await EmailService.execute({
      to: email,
      subject: survey.title,
      variables: {
        id: answerNew._id,
        name: user.name,
        title: survey.title,
        description: survey.description,
        link: `${process.env.PROJECT_URL}/answers`,
      },
    });

    return res.status(200).json({
      message: "Send Email!",
    });
  }
}

module.exports = EmailController;
