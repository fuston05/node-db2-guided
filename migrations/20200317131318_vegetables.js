
exports.up = function (knex) {
  //create our table
  //remember to return
  return knex.schema.createTable('vegetables', tbl => { //id primary, auto increment, intiger
    tbl.increments();
    tbl
      .string('name', 255)
      .notNullable()
      .unique()
      .index();

    tbl.boolean('favorite').defaultTo(false);

  })
};

exports.down = function (knex) {
  //remove table
  return knex.schema.dropTableIfExists('vegetables');
};
