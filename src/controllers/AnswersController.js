const AnswersModel = require("../models/Answers");

class AnswersController {
    static async get(req, res) {
        const {value} = req.params;
        const {an} = req.query;

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

    static async read(req, res) {
        try {
            const answer = await AnswersModel.find();

            return res.status(200).json({
                model: answer
            });

        } catch (e) {
            return res.status(500).json({
                message: "Error read!"
            });
        }
    }
}

module.exports = AnswersController;
