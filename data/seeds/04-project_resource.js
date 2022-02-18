exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("project_resource")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("project_resource").insert([
        { project_id: 1, resource_id: 1 },
      ]);
    });
};
