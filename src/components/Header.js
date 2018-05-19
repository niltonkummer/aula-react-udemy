import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Header = (props) => (
    <View style={styles.container}>
        
        <Text style={ styles.title }>{ props.title }</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {        
        backgroundColor: '#6ca2f7',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        paddingVertical: 10,
        color: '#FFF',
    }
})

export default Header;