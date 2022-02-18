const db = require("./../data/dbConfig");

const validateProject = (req, res, next) => {
  if (req.body.project_name == null) {
    res.status(404).json({ message: "requires a project_name" });
  } else {
    next();
  }
};

const validateResource = async (req, res, next) => {
  const { resource_name } = req.body;

  const result = await db("resource")
    .where("resource_name", resource_name)
    .first();
  if (
    // resource_name === undefined ||
    // typeof resource_name !== "string" ||
    // !resource_name.trim()
    result
  ) {
    res.status(404).json({ message: "resource_name already exists" });
  } else {
    next();
  }
};

const validateProjectId = async (req, res, next) => {
  const { project_id } = req.body;

  const result = await db("projects").where("project_id", project_id).first();

  if (result) {
    next();
  } else {
    res.status(404).json({ message: "invalid project_id" });
  }
};

const validateTask = (req, res, next) => {
  const { task_description, project_id } = req.body;

  if (!task_description || !project_id) {
    res.status(404).json({ message: "missing description or project_id" });
  } else {
    next();
  }
};

module.exports = {
  validateProject,
  validateResource,
  validateTask,
  validateProjectId,
};
