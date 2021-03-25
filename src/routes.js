const { Router } = require("express");
const StudentController = require("./controllers/StudentController");
const SurveyController = require("./controllers/SurveyController");

const router = Router();

// Student Routes
router.post("/discentes", StudentController.create);
router.get("/discentes", StudentController.read);
router.get("/discentes/:id", StudentController.get);


// Survey Routes
router.post("/surveys", SurveyController.create);

module.exports = router;
