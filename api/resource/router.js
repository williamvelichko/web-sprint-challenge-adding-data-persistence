// build your `/api/resources` router here
// build your `/api/projects` router here
const express = require("express");
const model = require("./model");
const mid = require("./../middleware");

const router = express.Router();

router.get("/", (req, res) => {
  model
    .get()
    .then((resources) => {
      res.json(resources);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});
router.post("/", mid.validateResource, (req, res) => {
  model
    .create(req.body)
    .then((newResource) => {
      res.json(newResource);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
