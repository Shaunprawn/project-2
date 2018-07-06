const db = require('../db.js');
const sha256 = require('js-sha256');

function create(name, email, password, callback){
	let queryString = 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *';
	let values = [name, email, sha256(password)];
	db.query(queryString, values, (error, result)=>{
		callback(error, result.rows[0]['id'])
	});
}

module.exports = {
	create,
}
