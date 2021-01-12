import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Text, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { fetchJokesHandler } from '../store/actions/jokes';

import HeaderButton from '../components/HeaderButton';
import Joke from '../components/Joke';

const SearchJokeScreen = ({ navigation }) => {
  const [searchPhrase, setSearchPhrase] = useState('');

  const dispatch = useDispatch();

  const jokes = useSelector((state) => state.jokes.jokes);
  const isLoading = useSelector((state) => state.jokes.isLoading);
  const error = useSelector((state) => state.jokes.error);
  const darkMode = useSelector((state) => state.settings.darkMode);

  useEffect(() => {
    if (searchPhrase.length >= 3) {
      dispatch(fetchJokesHandler(searchPhrase));
    }
  }, [searchPhrase, dispatch]);

  useEffect(() => {
    navigation.setParams({ mode: darkMode });
  }, [darkMode]);

  const spliceJokes = (jokes) => jokes && jokes.splice(0, 25);

  const renderData = () => {
    if (error) {
      const { message } = error;
      return <Text>Error: {message}</Text>;
    }

    if (isLoading && searchPhrase.length >= 3) {
      return <Text>Loading...</Text>;
    }

    const splicedJokes = spliceJokes(jokes);

    return <Joke jokes={jokes && splicedJokes} darkMode={darkMode} />;
  };

  return (
    <ScrollView
      style={{
        ...styles.screen,
        ...{ backgroundColor: darkMode ? 'black' : 'white' },
      }}
    >
      <View>
        <View style={styles.container}>
          <TextInput
            placeholder="Search"
            placeholderTextColor={darkMode ? 'white' : 'black'}
            value={searchPhrase}
            onChangeText={(text) => setSearchPhrase(text)}
            style={{
              ...styles.searchInput,
              ...{
                color: darkMode ? 'white' : 'black',
                borderColor: darkMode ? 'white' : 'black',
              },
            }}
          />
        </View>
        <View style={styles.jokesWrapper}>{renderData()}</View>
      </View>
    </ScrollView>
  );
};

SearchJokeScreen.navigationOptions = ({ navigation }) => {
  const darkMode = navigation.getParam('mode');

  return {
    headerTitle: 'Chuck Norris Jokes',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),
    headerStyle: {
      backgroundColor: darkMode ? 'black' : 'white',
    },
    headerTintColor: darkMode ? 'white' : 'black',
  };
};

const styles = StyleSheet.create({
  screen: {
    padding: 60,
    height: '100%',
    backgroundColor: 'white',
  },
  inputWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchInput: {
    borderBottomWidth: 1,
    width: '100%',
  },
  jokeWrapper: {
    marginVertical: 10,
    padding: 15,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    minHeight: 90,
    display: 'flex',
    justifyContent: 'center',
  },
  jokesWrapper: {
    paddingVertical: 30,
    marginBottom: 50,
  },
});
export default SearchJokeScreen;
