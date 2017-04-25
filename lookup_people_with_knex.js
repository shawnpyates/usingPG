// const knex = require('knex')({
//  client: 'pg',
//  connection: process.env.PG_CONNECTION_STRING,
//  searchPath: 'knex,public'
// });

require('dotenv').config();
const arg = process.argv[2];

const knex = require('knex')({
  client: 'pg',
  connection: process.env.PG_CONNECTION_STRING,
  searchPath: 'knex,public'
});


knex.select().from('famous_people').where('last_name',arg).asCallback(function(err, rows) {
  if (err) return console.error(err);
  let firstName = rows[0].first_name;
  let lastName = rows[0].last_name;
  let birthYear = rows[0].birthdate.getFullYear();
  let birthMonth = rows[0].birthdate.getMonth();
  let birthDay = rows[0].birthdate.getDate();
  console.log(`Found 1 person(s) by the name ${lastName}`);
  console.log(` 1: ${firstName} ${lastName}, born '${birthYear}-${birthMonth}-${birthDay}'.`);
  knex.destroy();
});