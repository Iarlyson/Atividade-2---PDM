const {Router} = require("express");
const StudentController = require("./controllers/StudentController");
const SurveyController = require("./controllers/SurveyController");
const SubjectsController = require("./controllers/SubjectController");
const NPSController = require("./controllers/NPScontroller");

const router = Router();

// Student Routes
router.post("/discentes", StudentController.create);
router.get("/discentes", StudentController.read);
router.get("/discentes/:id", StudentController.get);

// Survey Routes
router.post("/surveys", SurveyController.create);

// Subject Routes
router.post("/subjects", SubjectsController.create);

router.post("/nps/:survey_id", NPSController.execute);

module.exports = router;
