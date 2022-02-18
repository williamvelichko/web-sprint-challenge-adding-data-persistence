// build your `/api/tasks` router here
// build your `/api/projects` router here
const express = require("express");
const model = require("./model");
const router = express.Router();

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
router.post("/", (req, res) => {
  console.log("post tasks");
});

module.exports = router;
