import React, { useState } from 'react';

import store from './store/store';
import { StyleSheet, Text, TextInput, View } from 'react-native';


export default function App() {
  const [searchPhrase, setSearchPhrase] = useState('');

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
      <TextInput placeholder="Search" value={searchPhrase} onChangeText={text => setSearchPhrase(text)} style={styles.searchInput}/>
      </View>
    </View>
  );
}

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
