import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  ScrollView,
  useWindowDimensions,
  Pressable,
  NativeModules,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import IPFS from 'ipfs-mini';
import { COLORS } from '../colors';
import axios from 'axios';

const UploadScreen = ({ navigation }) => {
  const [id, setId] = useState('');
  const [ipfsCid, setIpfsCid] = useState('');

  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [desc, setDesc] = useState('');

  const { width } = useWindowDimensions();

  const ipfs = new IPFS({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
  });

  const ip = '192.168.68.52';

  /**
   * Uses React Native Bridge
   */
  const handleArCore = () => {
    NativeModules.ARCore.startARCore();
  };

  const handleARCoreInformation = () => {
    NativeModules.ARCore.getFromARCore((error, arcore_id) => {
      try {
        setId(arcore_id);
      } catch (err) {
        console.error(err);
        console.error(error);
      }
    });
  };

  const postToDb = async () => {
    console.log('first');
    await axios
      .post(`http://${ip}:3000/api/ipfs/`, {
        arcore_id: id,
        name: name,
        owner: owner,
        description: desc,
      })
      .then(function (response) {
        console.log(response);
        navigation.navigate('Assets');
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleClear = () => {
    setId('');
    setIpfsCid('');
    setName('');
    setOwner('');
    setDesc('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Upload */}
        <View style={styles.uploadGroup}>
          <Pressable onPress={handleArCore} style={styles.upload}>
            <Text style={{ color: COLORS.black }}>📷 Capture</Text>
          </Pressable>
          <Pressable onPress={handleARCoreInformation} style={styles.upload}>
            <Text style={{ color: COLORS.black }}>Refresh Metadata</Text>
          </Pressable>
        </View>
        {/* ARCore */}
        <View>
          <Text testID="id" style={styles.label}>
            ID: {id || '...'}
          </Text>
        </View>
        {/* Form Basic */}
        <View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Name</Text>
            <TextInput
              testID="name"
              placeholder="Name"
              style={styles.input}
              inputStyle={{ color: COLORS.black }}
              placeholderTextColor={COLORS.black}
              onChangeText={setName}
              value={name}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Owner</Text>
            <TextInput
              testID="owner"
              placeholder="Owner"
              style={styles.input}
              inputStyle={{ color: COLORS.black }}
              placeholderTextColor={COLORS.black}
              onChangeText={setOwner}
              value={owner}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Description</Text>
            <TextInput
              testID="description"
              placeholder="Description of asset"
              style={[
                styles.input,
                { minHeight: 75, textAlignVertical: 'top' },
              ]}
              inputStyle={{ color: COLORS.black }}
              placeholderTextColor={COLORS.black}
              onChangeText={setDesc}
              value={desc}
              multiline
            />
          </View>
        </View>
        {/* Form Advanced */}
        <View></View>
        {/* Buttons */}
        <View style={styles.buttons}>
          <Pressable
            testID="uploadButton"
            onPress={postToDb}
            style={[
              styles.button,
              { backgroundColor: COLORS.green, width: width - 64 },
            ]}>
            <Text style={[styles.buttonText, { color: COLORS.white }]}>
              Upload
            </Text>
          </Pressable>
          <Pressable
            testID="clearButton"
            onPress={handleClear}
            style={[
              styles.button,
              { backgroundColor: COLORS.white, width: width - 64 },
            ]}>
            <Text style={[styles.buttonText, { color: COLORS.black }]}>
              Clear
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 24,
  },
  uploadGroup: {
    marginVertical: 20,
  },
  upload: {
    padding: 10,
    backgroundColor: COLORS.grey,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  inputGroup: {
    marginTop: 15,
  },
  label: {
    color: COLORS.green,
    paddingBottom: 10,
    fontWeight: 'bold',
    fontSize: 16,
  },
  input: {
    backgroundColor: COLORS.grey,
    color: COLORS.black,
    borderRadius: 10,
    paddingLeft: 20,
  },
  buttons: {
    marginTop: 80,
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

export default UploadScreen;
