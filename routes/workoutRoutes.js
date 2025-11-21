// workoutRoutes.js
// Connects URLs to controller functions

const router = require("express").Router();
const controller = require("../controllers/workout.Controller");

// READ
router.get("/", controller.getAll);

// CREATE
router.get("/create", controller.createForm);
router.post("/create", controller.createWorkout);

// UPDATE
router.get("/edit/:id", controller.editForm);
router.post("/edit/:id", controller.updateWorkout);

// DELETE
router.get("/delete/:id", controller.deleteForm);
router.post("/delete/:id", controller.deleteWorkout);

module.exports = router;


