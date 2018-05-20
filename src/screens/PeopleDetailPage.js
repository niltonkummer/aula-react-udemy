import React, { Component } from 'react';
import {  View, Text, Image, StyleSheet } from 'react-native';

import PeopleDetailLine from '../components/PeopleDetailLine';

export default class PeopleDetailPage extends Component {
  render() {
        const { people } = this.props.navigation.state.params;
        return (
        <View style={ styles.container }>
            <Image 
                style={ styles.avatar }
                source={{ uri: people.picture.large }}/>
            <View style={ styles.detail }>
                <PeopleDetailLine label='Email' value={ people.email } />
                <PeopleDetailLine label='Telefone' value={ people.phone } />
                <PeopleDetailLine label='Celular' value={ people.cell } />
                <PeopleDetailLine label='Endereço' value={ people.location.street } />
                <PeopleDetailLine label='Nacionalidade' value={ people.nat } />
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    avatar: {
        aspectRatio: 1,
        borderRadius: 300,
    },
    detail: {
        marginTop: 15,
        paddingVertical: 10,
        paddingHorizontal: 15,
        elevation: 1,
        backgroundColor: '#EEE',
    }
})
