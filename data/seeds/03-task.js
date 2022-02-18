exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("task")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("task").insert([
        { task_description: "just make it", project_id: 1 },
      ]);
    });
};
