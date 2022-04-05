import React, {useEffect} from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';

import {COLORS} from '../colors';

const image = require('../assets/forestBackground.jpg');

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>DAFORST</Text>
        <View style={styles.buttons}>
          <View style={styles.button}></View>
          <View style={styles.button}></View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    width: 100,
    height: 100,
    backgroundColor: COLORS.cream,
    boxShadow: '0px 4px 6px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});

export default HomeScreen;
