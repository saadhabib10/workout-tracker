// workoutController.js
// Contains all CRUD logic for workouts

const Workout = require("../models/Workout");

// GET all workouts
exports.getAll = async (req, res) => {
    const workouts = await Workout.find();
    res.render("workouts/list", { workouts });
};

// SHOW create form
exports.createForm = (req, res) => {
    res.render("workouts/create");
};

// CREATE workout
exports.createWorkout = async (req, res) => {
    await Workout.create(req.body);
    res.redirect("/workouts");
};

// SHOW edit form
exports.editForm = async (req, res) => {
    const workout = await Workout.findById(req.params.id);
    res.render("workouts/edit", { workout });
};

// UPDATE workout
exports.updateWorkout = async (req, res) => {
    await Workout.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/workouts");
};

// DELETE with confirmation page
exports.deleteForm = async (req, res) => {
    const workout = await Workout.findById(req.params.id);
    res.render("workouts/delete", { workout });
};

// REAL delete
exports.deleteWorkout = async (req, res) => {
    await Workout.findByIdAndDelete(req.params.id);
    res.redirect("/workouts");
};
