import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import axios from 'axios';

import PeopleList from '../components/PeopleList';

export default class PeopleListPage extends Component {
	state = {
		people: [],
		loading: false,
		hasError: true,
		url: 'https://randomuser.me/api/?results=30&nat=br&seed=rickkummer',
		first: true,
	}
	constructor(props) {
		super(props);	
	}
	componentDidMount() {
		this.loadData()
	}

	loadData() {
		this.setState({
			loading: true
		})
		 if (this.state.first){
			this.setState({
				first: false,
				loading:false,
				hasError:true,
			})
			return
		}
		axios
			.get(this.state.url)
			.then(
				response => {				
					const { results } = response.data;					
					this.setState({ 
						people: results,
						loading: false,
						hasError:false
					})
				}
			).catch( error => {
				this.setState({
					loading: false,
					hasError: true,
				})
			});
	}

	render() {
		return (
			<View style={styles.container}>
				{ /* this.renderLoading() */ }
				{
					this.state.loading ? 
						<ActivityIndicator size='large' color='#e74c3c' /> 
						:
						this.state.hasError ? 
							<View style={ styles.error } >
								<Text style={ styles.errorText }>Ops... Algo deu errado!</Text>
								<TouchableOpacity onPress={() => {									
									this.loadData()									
									}  }>
									<View style={ styles.buttonRetryOnError }>
										<Text style={ styles.buttonRetryOnErrorText }>Tentar novamente!</Text>
									</View>
								</TouchableOpacity>
							</View>
							:
							<PeopleList 
								onPressPeople={pageParams => {
									this.props.navigation.navigate('PeopleDetail', pageParams);
								}} 
								people={ this.state.people } /> 
							}				
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center'
	},
	error:{
		alignSelf: 'center',	
	},
	errorText: {
		fontSize: 20,
		color: '#e74c3c',
	},
	buttonRetryOnError: {
		marginTop: 10,
		backgroundColor: '#e74c3c',
		padding: 10,
		borderRadius: 5,
		alignItems: 'center',
		
	},
	buttonRetryOnErrorText: {
		color: 'white',
		
	}
})