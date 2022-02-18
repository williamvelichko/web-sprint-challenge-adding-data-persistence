// build your `/api/projects` router here
const express = require("express");
const model = require("./model");
const router = express.Router();

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
router.post("/", (req, res) => {
  console.log("post projects");
});

module.exports = router;
