const express = require("express");
const router = express.Router();
const Exercise = require("../models/exerciseModel");

router.get("/", (req, res) => {
  res.end("return all exercises");
});

router.post("/", async (req, res) => {
  try {
    const exercise = await Exercise.create({
      title: "Curls",
      load: 20,
      reps: 10,
    });
    res.status(200).json(exercise);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/:id", (req, res) => {
  res.end("get specfic exercise");
});

router.delete("/:id", (req, res) => {
  res.end("delete specific exercises");
});
router.put("/:id", (req, res) => {
  res.end("updated specific exercise");
});

module.exports = router;
