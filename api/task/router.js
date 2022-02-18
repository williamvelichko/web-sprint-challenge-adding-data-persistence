// build your `/api/tasks` router here
// build your `/api/projects` router here
const express = require("express");
const model = require("./model");
const router = express.Router();
const mid = require("../middleware");

router.get("/", (req, res) => {
  model
    .get()
    .then((task) => {
      res.json(task);
    })
    .catch((err) => {
      res.json(err);
    });
});
router.post("/", mid.validateTask, mid.validateProjectId, (req, res) => {
  model
    .create(req.body)
    .then((newTask) => {
      res.json(newTask);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
