import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CustomSwitch = ({ jokes, darkMode }) => {
  return (
    <View>
      {jokes.map(({ id, value }) => (
        <View
          style={{
            ...styles.jokeWrapper,
            ...{
              backgroundColor: darkMode ? 'black' : 'white',
              shadowColor: darkMode ? 'white' : '#000',
            },
          }}
          key={id}
        >
          <Text style={{ color: darkMode ? 'white' : 'black' }}>{value}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  jokeWrapper: {
    marginVertical: 10,
    padding: 15,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    minHeight: 90,
    display: 'flex',
    justifyContent: 'center',
  },
});

export default CustomSwitch;
