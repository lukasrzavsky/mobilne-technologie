import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';

import { setDarkMode } from '../store/actions/settings';

import HeaderButton from '../components/HeaderButton';
import SwitchWithLabel from '../components/SwitchWithLabel';

const SettingsJokeScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const darkMode = useSelector((state) => state.settings.darkMode);

  useEffect(() => {
    navigation.setParams({ mode: darkMode });
  }, [darkMode]);

  return (
    <View
      style={{
        ...styles.screen,
        ...{ backgroundColor: darkMode ? 'black' : 'white' },
      }}
    >
      <SwitchWithLabel
        label="Dark mode"
        value={darkMode}
        onChange={(newValue) => dispatch(setDarkMode(newValue))}
        mode={darkMode}
      />
    </View>
  );
};

SettingsJokeScreen.navigationOptions = ({ navigation }) => {
  const darkMode = navigation.getParam('mode');

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
    headerStyle: {
      backgroundColor: darkMode ? 'black' : 'white',
    },
    headerTintColor: darkMode ? 'white' : 'black',
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 30,
  },
});

export default SettingsJokeScreen;
