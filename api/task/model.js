// build your `Task` model here
const db = require("../../data/dbConfig");

function mapProject(task) {
  return { ...task, task_completed: Boolean(task.task_completed) };
}

async function get() {
  const result = await db("tasks as t")
    .leftJoin("projects as p", "p.project_id", "t.project_id")
    .select(
      "t.task_id",
      "t.task_description",
      "t.task_notes",
      "t.task_completed",
      "p.project_name",
      "p.project_description"
    );
  const task = await result.map((task) => {
    // console.log({ ...task, task_completed: Boolean(task.task_completed) });
    return { ...task, task_completed: Boolean(task.task_completed) };
  });
  // .then((tasks) => {
  //   tasks.map(mapProject);
  // });
  return task;
}

async function getById(task_id) {
  const result = await db("tasks as t")
    .leftJoin("projects as p", "p.project_id", "t.project_id")
    .where("t.task_id", task_id)
    .select(
      "t.task_id",
      "t.task_description",
      "t.task_notes",
      "t.task_completed",
      "p.project_id"
    )
    .first()
    .then(mapProject);

  return result;
}

async function create(task) {
  const [task_id] = await db("tasks as t")
    .leftJoin("projects as p", "p.project_id", "t.project_id")
    .select(
      "t.task_id",
      "t.task_description",
      "t.task_notes",
      "t.task_completed",
      "p.project_id"
    )
    .insert(task);

  return getById(task_id);
}

module.exports = {
  get,
  create,
};
