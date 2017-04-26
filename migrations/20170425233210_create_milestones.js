exports.up = function(knex) {
  return knex.schema.createTable('milestones', (table) => {
    table.increments();
    table.string('description');
    table.timestamp('date_achieved');
  });
}

exports.down = function(knex) {
  return knex.schema.dropTable('milestones');
}

