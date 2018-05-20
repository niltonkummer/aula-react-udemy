import React, { Component } from 'react';
import { FlatList, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Person from './Person';

const PeopleList = (props) => {
    const { people, onPressPeople } = props
    
    return  (
        <FlatList 
            style={styles.container}
            data={people}
            renderItem={({ item }) => (
                <Person
                    people={ item } 
                    onNavigateToDetail={ onPressPeople }
                />
            )}
            keyExtractor={ item => item.name.first + item.name.last }
            />
    )
};

const styles = StyleSheet.create({
    container: {
        
    }, 
    
})

export default PeopleList;