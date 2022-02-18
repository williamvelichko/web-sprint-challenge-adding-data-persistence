// build your `Resource` model here
const db = require("../../data/dbConfig");

function mapProject(reso) {
  return { ...project, project_completed: Boolean(project.project_completed) };
}

function get() {
  return db("resource");
}

function getById(resource_id) {
  return db("resource").where("resource_id", resource_id).first();
}

async function create(resource) {
  const [resource_id] = await db("resource").insert(resource);

  return getById(resource_id);
}
module.exports = {
  get,
  create,
};
