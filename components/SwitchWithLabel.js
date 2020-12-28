import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

const CustomSwitch = ({ label, value, onChange, mode }) => {
  return (
    <View style={styles.switchContainer}>
      <Text style={{ color: mode ? 'white' : 'black', fontWeight: 'bold' }}>
        {label}
      </Text>
      <Switch value={value} onValueChange={onChange} />
    </View>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 30,
  },
});

export default CustomSwitch;
