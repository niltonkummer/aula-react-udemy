import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import People from './People';

const PeopleList = (props) => {
    const { peoples } = props
    const items = peoples.map( people => 
        <People 
            key={ Math.random() } 
            people={ people } 
        />
      
    )
    return  (
        <ScrollView style={ styles.container }>
            { items }
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        
    }, 
    
})

export default PeopleList;