import React, { useState, useEffect } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Text,
  ScrollView,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchJokesHandler } from '../store/actions';

const SearchJokeScreen = ({ navigation }) => {
  const [searchPhrase, setSearchPhrase] = useState('');

  const dispatch = useDispatch();

  const jokes = useSelector((state) => state.jokes);
  const isLoading = useSelector((state) => state.isLoading);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    if (searchPhrase.length >= 3) {
      dispatch(fetchJokesHandler(searchPhrase));
    }
  }, [searchPhrase, dispatch]);

  const spliceJokes = (jokes) => jokes && jokes.splice(0, 25);

  const renderData = () => {
    if (error) {
      const { message } = error;
      console.error(message);
      return <Text>Error: {message}</Text>;
    }

    if (isLoading && searchPhrase.length >= 3) {
      return <Text>Loading...</Text>;
    }

    const splicedJokes = spliceJokes(jokes);

    return (
      <View>
        {jokes &&
          splicedJokes.map(({ id, value }) => (
            <View style={styles.jokeWrapper} key={id}>
              <Text>{value}</Text>
            </View>
          ))}
      </View>
    );
  };

  return (
    <ScrollView>
      <View style={styles.screen}>
        <View style={styles.container}>
          <TextInput
            placeholder="Search"
            value={searchPhrase}
            onChangeText={(text) => setSearchPhrase(text)}
            style={styles.searchInput}
          />
          <Button
            title="Go to Settings!"
            onPress={() => {
              navigation.navigate({ routeName: 'Settings' });
            }}
          />
        </View>
        <View>{renderData()}</View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 60,
    // backgroundColor: 'black',
    height: '100%',
  },
  inputWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchInput: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    width: '80%',
  },
  jokeWrapper: {
    padding: 10,
  },
});
export default SearchJokeScreen;
