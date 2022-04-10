import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';

import {COLORS} from '../colors';

const UploadScreen = () => {
  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [desc, setDesc] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Upload */}
        <View></View>
        {/* ARCore */}
        <View></View>
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
        <View></View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 24,
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
});

export default UploadScreen;
