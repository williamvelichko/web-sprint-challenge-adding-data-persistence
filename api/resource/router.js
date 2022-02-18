// build your `/api/resources` router here
// build your `/api/projects` router here
const express = require("express");
const model = require("./model");

const router = express.Router();

router.get("/", (req, res) => {
  model
    .get()
    .then((resources) => {
      res.json(resources);
    })
    .catch((err) => {
      res.status(500).json({ message: "error" });
    });
});
router.post("/", (req, res) => {
  console.log("post resources");
});

module.exports = router;
