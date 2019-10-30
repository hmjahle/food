import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';


const SearchBar = ({term, onTermChange, onTermSubmitt}) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput 
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="search" 
                style={styles.inputStyle}
                value={term}
                onChangeText={newTerm => onTermChange(newTerm)}
                onEndEditing={()=>onTermSubmitt()}
                />
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 15,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginBottom: 10,
        flexDirection: 'row'
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15    
    }
});

export default SearchBar;