import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import capitalizeFirstLetter from '../util/Util';

const Person = (props) => {
    const  {onNavigateToDetail, people } = props;
    const { name  } = props.people;
    const { thumbnail } = props.people.picture;
    return (       
        <TouchableOpacity onPress={ () => onNavigateToDetail( { people } ) }>
            <View style={ styles.container }>
                <Image style={ styles.avatar } source={{ uri: thumbnail }} />
                <Text style={ styles.peopleData }>
                    { `${
                        capitalizeFirstLetter(name.first)
                    } ${ 
                        capitalizeFirstLetter(name.last)
                    }` }
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',        
        alignItems: 'center',      
        flexDirection: 'row',
    },
    peopleButton: {

    },
    peopleData: {
        fontSize: 20,
        paddingLeft: 15,
        alignItems: 'center',
        flex: 10,
    },
    avatar: {        
        marginHorizontal: 15,
        aspectRatio: 1,
        flex: 1,
        borderRadius: 50,       
    }
})

export default Person;