// build your `/api/tasks` router here
// build your `/api/projects` router here
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  console.log("get tasks");
});
router.post("/", (req, res) => {
  console.log("post tasks");
});

module.exports = router;
