import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

import Header from './src/components/Header';
import PeopleList from './src/components/PeopleList';

export default class App extends Component {
	state = {
		peoples: [],
	}
	constructor(props) {
		super(props);	
	}
	componentDidMount() {
		axios
			.get('https://randomuser.me/api/?results=50&nat=br&seed=rickkummer')
			.then(
				response => {				
					const { results } = response.data;					
					this.setState({ 
						peoples: results,
					})
				}
			);
	}	

	render() {
		return (
			<View>
				<Header title='People' />
				<PeopleList peoples={ this.state.peoples } />
			</View>
		);
	}
}