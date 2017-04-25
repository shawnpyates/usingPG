require('dotenv').config();
const arg1 = process.argv[2];
const arg2 = process.argv[3];
const arg3 = process.argv[4];

const knex = require('knex')({
  client: 'pg',
  connection: process.env.PG_CONNECTION_STRING,
  searchPath: 'knex,public'
});


knex('famous_people').insert({first_name: arg1, last_name: arg2, birthdate: arg3}).asCallback(function(err) {
  if (err) return console.error(err);
  console.log("Writing to database...")
  let firstName = arg1;
  let lastName = arg2;
  let birthDate = arg3;
  console.log(`Inserted 1 person(s) by the name ${firstName} ${lastName}`);
  console.log(` 1: ${firstName} ${lastName}, born '${birthDate}'.`);
  knex.destroy();
});