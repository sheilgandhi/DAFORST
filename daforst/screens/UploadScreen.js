import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  ScrollView,
  useWindowDimensions,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';
import IPFS from 'ipfs-mini';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

import { COLORS } from '../colors';
import axios from 'axios';

const UploadScreen = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const [option, setOption] = useState(0);

  const [id, setId] = useState('');
  const [location, setLocation] = useState('');
  const [ipfsCid, setIpfsCid] = useState('');

  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [desc, setDesc] = useState('');

  const { height, width } = useWindowDimensions();

  const ipfs = new IPFS({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
  });

  // const onOptionSelect = opt => {
  //   console.log(opt);
  //   setOption(opt);
  //   handleAddAsset();
  // };

  const handleImagePicker = async () => {
    const result = await launchImageLibrary({
      includeBase64: true,
    });
    setImage(result);
  };
  const handleCamera = async () => {
    const result = await launchCamera({
      includeBase64: true,
    });
    setImage(result);
  };

  const uploadToIpfs = () => {
    ipfs
      .add(image.assets[0].base64)
      .then(hash => {
        console.log(hash);
        setIpfsCid(hash);
      })
      .catch(console.log);
  };

  const postToDb = async () => {
    await axios
      .post('http://10.0.2.2:3000/api/assets/', {
        arcore_id: id,
        arcore_location: location,
        ipfs_cid: ipfsCid,
        name: name,
        owner: owner,
        description: desc,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleAddAsset = () => {
    console.log(image.assets[0].base64);

    // ARCore here

    // IPFS
    uploadToIpfs();
    // Db Persistence
    postToDb();
    // navigate user to assets
    navigation.navigate('Assets');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Upload */}
        <View style={styles.uploadGroup}>
          <Pressable onPress={handleImagePicker} style={styles.upload}>
            <Text style={{ color: COLORS.black }}>🖼️ Photo Gallery</Text>
          </Pressable>
          <Pressable onPress={handleCamera} style={styles.upload}>
            <Text style={{ color: COLORS.black }}>📷 Camera</Text>
          </Pressable>
        </View>
        {/* ARCore */}
        <View>
          <Text style={styles.label}>ID: {id || '...'}</Text>
          <Text style={styles.label}>Location: {location || '...'}</Text>
        </View>
        {/* Form Basic */}
        <View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Name</Text>
            <TextInput
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
            onPress={handleAddAsset}
            style={[
              styles.button,
              { backgroundColor: COLORS.green, width: width - 64 },
            ]}>
            <Text style={[styles.buttonText, { color: COLORS.white }]}>
              Upload
            </Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate('Assets')}
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
