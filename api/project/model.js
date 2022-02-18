// build your `Project` model here
const db = require("../../data/dbConfig");

function bool(info) {
  if (info === 0) {
    return false;
  } else {
    return true;
  }
}
function mapProject(project) {
  return { ...project, project_completed: Boolean(project.project_completed) };
}

async function get() {
  return db("projects").then((projects) => projects.map(mapProject));

  // .select(
  //   "p.project_name",
  //   "p.project_description",
  //   "p.project_id",
  //   "p.project_completed"
  // )
  // const projects = {
  //   project_completed: bool(result[0].project_completed),
  //   project_description: result[0].project_description,
  //   project_id: result[0].project_id,
  //   project_name: result[0].project_name,
  // };
}
// const getById = (project_id) => {
//   return db(“projects”)
//     .where(“project_id”, project_id)
//     .first()
//     .then(mapProject);
// };

async function getById(project_id) {
  const result = await db("projects as p")
    .where("project_id", project_id)
    .select(
      "p.project_name",
      "p.project_description",
      "p.project_id",
      "p.project_completed"
    )
    .first()
    .then(mapProject);

  return result;
}

async function create(project) {
  const [project_id] = await db("projects").insert(project);

  return getById(project_id);
}

module.exports = {
  get,
  create,
};
