import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';

const SearchJokeScreen = ({ navigation }) => {
    const [searchPhrase, setSearchPhrase] = useState('');

    return (
        <View style={styles.screen}>
            <View style={styles.container}>
            <TextInput placeholder="Search" value={searchPhrase} onChangeText={text => setSearchPhrase(text)} style={styles.searchInput}/>
            <Button title="Go to Settings!" onPress={() => {
                    navigation.navigate({routeName: 'Settings'});
                }}/>
            </View>
        </View>
    )
};


const styles = StyleSheet.create({
    screen: {
      padding: 60,
      // backgroundColor: 'black',
      height: '100%'
    },
    inputWrapper : {
      alignItems: 'center',
      justifyContent: 'center',
    },
    searchInput: {
      borderBottomWidth: 1,
      borderBottomColor: 'black',
      width: "80%",
    }
  });
export default SearchJokeScreen;