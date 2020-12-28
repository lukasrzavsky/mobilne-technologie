import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';

const SettingsJokeScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Settings Screen!</Text>
    </View>
  );
};

SettingsJokeScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: 'Settings',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SettingsJokeScreen;
