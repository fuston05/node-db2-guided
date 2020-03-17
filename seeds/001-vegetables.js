
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('vegetables').truncate()// .del() doesn't reset id's
    .then(function () {
      // Inserts seed entries
      return knex('vegetables').insert([
        {name: 'Carrots', color: 'orange'},
        {name: 'rowValue2', color: 'red'},
        {name: 'rowValue3', color: 'red'}
      ]);
    });
};
