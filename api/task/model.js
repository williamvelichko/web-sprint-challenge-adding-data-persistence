// build your `Task` model here
const db = require("../../data/dbConfig");

function get() {
  return db("task as t")
    .leftJoin("projects as p", "p.project_id", "t.project_id")
    .select(
      "t.task_id",
      "t.task_description",
      "t.task_notes",
      "t.task_completed",
      "p.project_name",
      "p.project_description"
    );
}
function create() {}

module.exports = {
  get,
  create,
};
