// build your `Project` model here
const db = require("../../data/dbConfig");

function get() {
  return db("projects");
}
function create() {}

module.exports = {
  get,
  create,
};
