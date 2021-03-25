const { Router } = require("express");
const StudentController = require("./controllers/StudentController");

const router = Router();

// Student Routes
router.post("/discentes", StudentController.create);
router.get("/discentes", StudentController.read);
router.get("/discentes/:id", StudentController.get);

module.exports = router;
