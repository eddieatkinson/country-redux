import { combineReducers } from 'redux';
import CountriesReducer from './CountriesReducer';

const rootReducer = combineReducers({
	countries: CountriesReducer
});

export default rootReducer;