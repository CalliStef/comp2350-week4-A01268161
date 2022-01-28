const mysql = require('mysql2');

const is_heroku = process.env.IS_HEROKU || false;

//mysql://b6fb24cb4c8c37:702be0f5@us-cdbr-east-03.cleardb.com/heroku_a79dfbc72e06757?reconnect=true
const dbConfigHeroku = {
	host: "us-cdbr-east-03.cleardb.com",
	user: "b6fb24cb4c8c37",
	password: "702be0f5",
	database: "heroku_a79dfbc72e06757",
	multipleStatements: false,
	reconnect: true;
};

const dbConfigLocal = {
	host: "uzb4o9e2oe257glt.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
	user: "v5e4g4dmmuzx84ds",
	password: "p3i4l8qzzkra980y",
	database: "hjf9tox98m3vshqi",
	multipleStatements: false
};

//const dbConfigLocal = {
// 	host: "localhost",
// 	user: "root",
// 	password: "Password",
// 	database: "database1",
// 	multipleStatements: false
// };

if (is_heroku) {
	var database = mysql.createPool(dbConfigHeroku);
}
else {
	var database = mysql.createPool(dbConfigLocal);
}

module.exports = database;
		