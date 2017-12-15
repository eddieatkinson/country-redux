import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AddCountryAction from '../actions/AddCountryAction';

class CountriesList extends Component{
	constructor(){
		super();
		this.state = {
			error: ""
		}
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentWillReceiveProps(newProps){
		if(newProps.country.msg === "countryExists"){
			this.setState({
				error: "This country has already been added."
			});
		}else{
			this.setState({
				error: ""
			});
		}
	}

	handleSubmit(event){
		event.preventDefault();
		const newCountry = {
			country: event.target[0].value
		}
		// console.log(newCountry);
		this.props.addCountryAction(newCountry);
	}

	render(){
		return(
			<div>
				<h3>{this.state.error}</h3>
				<form onSubmit={this.handleSubmit}>
					<input type="text" placeholder="Add country here!" />
					<button type="submit">Add country!</button>
				</form>
			</div>
		);
	}
}

function mapStateToProps(state){
	return{
		country: state.countries
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		addCountryAction: AddCountryAction
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CountriesList);