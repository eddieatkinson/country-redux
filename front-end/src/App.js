import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CountriesList from './containers/CountriesList';
import CountriesAdd from './containers/CountriesAdd';

class App extends Component {
	render() {
		return (
			<div className="App">
				<CountriesAdd />
				<CountriesList />
			</div>
		);
	}
}

export default App;
