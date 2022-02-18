// build your `Resource` model here
const db = require("../../data/dbConfig");

function get() {
  return db("resource");
}

function create(resource) {}
module.exports = {
  get,
  create,
};
