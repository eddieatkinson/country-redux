import axios from 'axios';

export default function(countryName){
	console.log('GetCountryAction is running!');
	var axiosPromise = axios.get(`http://localhost:8080/getcountries`);

	return{
		type: 'GET_COUNTRY_ACTION',
		payload: axiosPromise
	}
}