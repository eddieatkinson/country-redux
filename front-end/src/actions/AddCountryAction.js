import axios from 'axios';

export default function(countryName){
	console.log('AddCountryAction is running!');
	var axiosPromise = axios({
		url: `http://localhost:8080/addcountry`,
		method: 'POST',
		data: countryName
	});

	return{
		type: 'ADD_COUNTRY_ACTION',
		payload: axiosPromise
	}
}