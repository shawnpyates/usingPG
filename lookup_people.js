const db = require('./db');
const arg = process.argv[2];



function getFamousPeople(arg) {
  console.log("Searching ...")
  db.connect((error, client) => {
    client.query("SELECT * FROM famous_people WHERE last_name = $1::text", [arg], (err, results) => {
      let firstName = results.rows[0].first_name;
      let lastName = results.rows[0].last_name;
      let birthYear = results.rows[0].birthdate.getFullYear();
      let birthMonth = results.rows[0].birthdate.getMonth();
      let birthDay = results.rows[0].birthdate.getDate();
      console.log(`Found 1 person(s) by the name ${lastName}`);
      console.log(` 1: ${firstName} ${lastName}, born ${birthYear}-${birthMonth}-${birthDay}.`);
      client.end();
    });
  });
}

getFamousPeople(arg);
