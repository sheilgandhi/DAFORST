import React, {useEffect, useLayoutEffect} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  useWindowDimensions,
} from 'react-native';

import {COLORS} from '../colors';

const image = require('../assets/background.png');

const HomeScreen = ({navigation}) => {
  const {height, width} = useWindowDimensions();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'DAFORST',
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.buttons}>
          <Pressable
            onPress={() => navigation.navigate('Upload')}
            style={[
              styles.button,
              {backgroundColor: COLORS.green, width: width - 16},
            ]}>
            <Text style={[styles.text, {color: COLORS.white}]}>Upload</Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate('Assets')}
            style={[
              styles.button,
              {backgroundColor: COLORS.cream, width: width - 16},
            ]}>
            <Text style={[styles.text, {color: COLORS.black}]}>Assets</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  buttons: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button: {
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
  },
});

export default HomeScreen;
