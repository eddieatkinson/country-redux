var express = require('express');
var router = express.Router();
var config = require('../config/config.js');
var mysql = require('mysql');

var connection = mysql.createConnection(config);
connection.connect();

router.post('/addcountry', (req, res, next)=>{
	var newCountry = req.body.country;
	console.log(newCountry);
	const checkCountry = `SELECT * FROM countriesList WHERE countryName = ?;`;
	connection.query(checkCountry, [newCountry], (error, results)=>{
		if(error){
			throw error
		}else if(results.length != 0){
			const getAll = `SELECT * FROM countriesList;`;
			connection.query(getAll, (error, results)=>{
				if(error){
					throw error
				}else{
					res.json({
						msg: "countryExists",
						countries: results
					});
				}
			});
		}else{
			const addCountry = `INSERT INTO countriesList
				(countryName)
					VALUES
				(?);`;
			connection.query(addCountry, [newCountry], (error, results)=>{
				if(error){
					throw error;
				}else{
					const getCountries = `SELECT * from countriesList;`;
					connection.query(getCountries, (error, results)=>{
						if(error){
							throw error
						}else{
							res.json({
								countries: results
							});
						}
					});
				}
			});
		}
	});
});

module.exports = router;
