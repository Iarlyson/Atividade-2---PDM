const { Router } = require("express");
const StudentController = require("./controllers/StudentController");

const router = Router();

// Student Routes
router.post("/discentes", StudentController.create);

module.exports = router;
