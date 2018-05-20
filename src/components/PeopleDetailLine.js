import React, { Component } from 'react';
import {  View, Text, StyleSheet } from 'react-native';

const PeopleDetailLine = ({ label = '', value = '-' }) => {
    return (
        <View style={ styles.detailLine }>
            <Text 
                style={ [
                    styles.cell, 
                    styles.cellLabel,
                    label.length > 8 ? styles.cellLabelResize : {}
                    ] } >{label}:</Text>
            <Text style={ [styles.cell, styles.cellContent] }>{ value }</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    detailLine: {
        flexDirection: 'row',        
    },
    cell: {
        fontSize: 18,
        paddingVertical: 5,
    },
    cellLabel: {
        fontWeight: 'bold',
        flex:1
    },
    cellLabelResize: {
        fontSize: 14,
    },
    cellContent:{
        flex:2,
    }
})

export default PeopleDetailLine;