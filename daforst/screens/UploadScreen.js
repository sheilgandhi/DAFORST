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
import React, {useState} from 'react';
import IPFS from 'ipfs-mini';

import {COLORS} from '../colors';

const UploadScreen = () => {
  const [image, setImage] = useState(null);

  const [id, setId] = useState('');
  const [location, setLocation] = useState('');

  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [desc, setDesc] = useState('');

  const {height, width} = useWindowDimensions();

  const ipfs = new IPFS({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
  });

  ipfs.add('engr489').then(console.log).catch(console.log);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Upload */}
        <View style={styles.uploadGroup}>
          <Pressable onPress={() => {}} style={styles.upload}>
            {image ? <Image /> : <Text>Upload</Text>}
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
              onChangeText={setName}
              value={name}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Owner</Text>
            <TextInput
              placeholder="Owner"
              style={styles.input}
              onChangeText={setOwner}
              value={owner}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Description</Text>
            <TextInput
              placeholder="Description of asset"
              style={[styles.input, {minHeight: 75, textAlignVertical: 'top'}]}
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
            onPress={() => navigation.navigate('Upload')}
            style={[
              styles.button,
              {backgroundColor: COLORS.green, width: width - 64},
            ]}>
            <Text style={[styles.buttonText, {color: COLORS.white}]}>
              Upload
            </Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate('Assets')}
            style={[
              styles.button,
              {backgroundColor: COLORS.white, width: width - 64},
            ]}>
            <Text style={[styles.buttonText, {color: COLORS.black}]}>
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
    height: 200,
    backgroundColor: COLORS.grey,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
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
