import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GetCountryAction from '../actions/GetCountryAction';

class CountriesList extends Component{
	constructor(){
		super();
	}

	render(){
		console.log(this.props.country.countries);
		if(this.props.country.countries != undefined){
			console.log("I'm here!");
			var countriesArray = this.props.country.countries.map((country, index)=>{
				console.log(index);
				return(<li key={index}>{country.countryName}</li>)
			});	
		}else{
			var countriesArray = []
		}
		console.log(countriesArray);
		// var countriesArray = this.props.country.countries.map((country, index)=>{
		// 	return(<li key={index}>{country}</li>)
		// });
		return(
			<div>
				<li>Countries go here</li>
				{countriesArray}
			</div>

		)
	}
}

function mapStateToProps(state){
	return{
		country: state.countries
	}
}

export default connect(mapStateToProps,)(CountriesList);