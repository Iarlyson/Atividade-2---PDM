const AnswersModel = require("../models/Answers");

class NPSController {
  static async execute(request, response) {
    const { survey_id } = request.params;

    const answers = await AnswersModel.find({ survey_id });
    if (!answers) {
      return res.status(400).json({
        message: "Does not survey exists",
        error: new Error("Does not survey exists"),
      });
    }


    const detractors = answers.filter(
      (answer) => answer.value >= 0 && answer.value <= 6
    ).length;

    const passives = answers.filter(
      (answer) => answer.value >= 7 && answer.value <= 8
    ).length;

    const promoters = answers.filter(
      (answer) => answer.value >= 9 && answer.value <= 10
    ).length;

    const totalAnswers = answers.length;
    const resultNPS = ((promoters - detractors) / totalAnswers) * 100;

    return response.status(200).json({
      detractors,
      promoters,
      passives,
      totalAnswers,
      nps: resultNPS,
    });
  }
}

module.exports = NPSController;
