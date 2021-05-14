const StudentModel = require("../models/Students");
const {uuid} = require("uuidv4");
const jwt = require("json-web-token");
const crypt = require("bcrypt");

class StudentController {
    static async create(req, res) {
        try {
            const student = req.body;

            await crypt.hash(student.password, 1, (err, password) => {
                StudentModel.create({...student, password})
                    .then((result) => {
                        return res.status(200).json(result);
                    })
                    .catch((err) => {
                        return res.status(500).json({
                            message: "Created Failed",
                            error: err,
                        });
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
            const students = await StudentModel.find();

            return res.status(200).json(students);
        } catch (err) {
            return res.status(500).json({
                message: "Read failed!",
                error: err,
            });
        }
    }

    static async get(req, res) {
        try {
            const student = await StudentModel.findOne({_id: req.params.id});
            if (student) {
                return res.status(200).json(student);
            } else {
                return res.status(400).json({
                    message: "Does not student exists!",
                    error: new Error("Does not student exists"),
                });
            }
        } catch (err) {
            return res.status(400).json({
                message: "Get Failed",
                error: err,
            });
        }
    }

    static async auth(req, res) {
        try {
            const {email, password} = req.body;

            const student = await StudentModel.findOne({email});

            if (!student) return res.status(400).json({
                message: "Authentication error"
            });

            crypt.compare(password, student.password, (err, result) => {

                if(!result) return res.status(400).json({
                    message: "Authentication error"
                });

                jwt.encode(process.env.JWT_KEY, student._id, (err, token) => {
                    if (err) return res.status(400).json({
                        message: "Authentication error"
                    });

                    if (result) return res.status(200).json({
                        token,
                        student: {
                            name: student.name,
                            email: student.email,
                        }
                    });
                });

            })


        } catch (e) {
            return res.status(500).json({});
        }
    }

}

module.exports = StudentController;
