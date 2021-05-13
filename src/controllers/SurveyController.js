const SurveyModel = require("../models/Surveys");
const {uuid} = require("uuidv4");

class SurveyController {
    static async create(req, res) {
        try {
            const survey = req.body;
            SurveyModel.create({...survey})
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
            const survey = await SurveyModel.find();

            return res.status(200).json({
                model: survey
            });

        } catch (e) {
            return res.status(500).json({
                message: "Failed Read!"
            })
        }
    }

    static async get(req, res) {
        try {
            const {id} = req.params;

            const survey = SurveyModel.findById(id);

            if (!survey) return res.status(404).json({
                message: "There is no survey with that id"
            });

            return res.status(200).json({
                model: survey
            })

        } catch (e) {
            return res.status(500).json({
                message: "Failed Get!"
            })
        }
    }
}

module.exports = SurveyController;
