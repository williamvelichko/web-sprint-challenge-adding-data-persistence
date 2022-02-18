// build your `/api/projects` router here
const express = require("express");
const model = require("./model");
const router = express.Router();
const mid = require("./../middleware");

router.get("/", (req, res) => {
  model
    .get()
    .then((projects) => {
      res.json(projects);
    })
    .catch((err) => {
      res.json(err);
    });
});
router.post("/", mid.validateProject, (req, res) => {
  model
    .create(req.body)
    .then((newProject) => {
      res.json(newProject);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
