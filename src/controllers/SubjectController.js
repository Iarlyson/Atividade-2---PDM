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

    static async read(req, res) {
        try {
            const subjects = await SubjectsModel.find();

            return res.status(200).json({
                model: subjects
            });

        } catch (e) {
            return res.status(500).json({
                message: "Read Failed!"
            })
        }
    }

    static async get(req, res) {
        try {
            const {id} = req.params;

            const subject = await SubjectsModel.findById(id);

            if (!subject) return res.status(404).json({
                message: "There is no subject with that id"
            });

            return res.status(200).json({
                model: subject
            });

        } catch (e) {
            return res.status(500).json({
                message: "Get failed!"
            })
        }
    }

}

module.exports = SubjectsController;