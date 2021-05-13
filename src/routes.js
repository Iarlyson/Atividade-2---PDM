const {Router} = require("express");
const StudentController = require("./controllers/StudentController");
const SurveyController = require("./controllers/SurveyController");
const SubjectsController = require("./controllers/SubjectController");
const NPSController = require("./controllers/NPScontroller");
const EmailController = require("./controllers/EmailController");
const AnswersController = require("./controllers/AnswersController");

const router = Router();

// Student Routes
router.post("/discentes", StudentController.create);
router.get("/discentes", StudentController.read);
router.get("/discentes/:id", StudentController.get);
router.post("/discentes/auth", StudentController.auth);

// Survey Routes
router.post("/surveys", SurveyController.create);

// Subject Routes
router.post("/subjects", SubjectsController.create);
router.get("/subjects", SubjectsController.read);
router.get("/subjects/:id", SubjectsController.get)

router.get("/nps/:survey_id", NPSController.execute);

router.get("/answers/:value", AnswersController.get);

router.post("/sendEmail", EmailController.execute);

module.exports = router;
