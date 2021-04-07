const AnswersModel = require("../models/Answers");

class AnswersController {
  static async get(req, res) {
    const { value } = req.params;
    const { an } = req.query;

    const answer = await AnswersModel.findById(an);

    if (!answer) {
      return res.status(400).json({
        message: "Does not pesquisa exists for this discent",
      });
    }

    answer.value = Number(value);

    await answer.updateOne(answer);

    return res.status(200).json(answer);
  }
}

module.exports = AnswersController;
