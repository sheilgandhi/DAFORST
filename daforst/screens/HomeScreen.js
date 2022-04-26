import React, { useEffect, useLayoutEffect } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  useWindowDimensions,
} from 'react-native';

import { COLORS } from '../colors';

const image = require('../assets/daforst_tree.png');

const HomeScreen = ({ navigation }) => {
  const { height, width } = useWindowDimensions();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'DAFORST',
      headerShown: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cta}>
        <Image style={styles.image(height)} source={image} />
        <Text style={styles.lineOne}>Hey! Welcome</Text>
        <Text style={styles.lineTwo}>
          DAFORST is a decentralised platform which helps provide data
          sovereignty to communities.
        </Text>
      </View>
      <View style={styles.buttons}>
        <Pressable
          onPress={() => navigation.navigate('Upload')}
          style={[
            styles.button,
            { backgroundColor: COLORS.green, width: width - 32 },
          ]}>
          <Text style={[styles.buttonText, { color: COLORS.white }]}>
            Upload
          </Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('Assets')}
          style={[
            styles.button,
            { backgroundColor: COLORS.white, width: width - 32 },
          ]}>
          <Text style={[styles.buttonText, { color: COLORS.black }]}>
            Assets
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  cta: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  image: height => ({
    resizeMode: 'center',
    height: height / 2,
  }),
  lineOne: {
    fontWeight: 'bold',
    color: COLORS.black,
    fontSize: 28,
  },
  lineTwo: {
    marginHorizontal: 32,
    color: COLORS.black,
    textAlign: 'center',
  },
  buttons: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingBottom: 10,
  },
  button: {
    height: 50,
    borderRadius: 96,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderColor: COLORS.green,
    borderWidth: 3,
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default HomeScreen;
