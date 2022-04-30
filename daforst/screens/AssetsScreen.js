import { View, Text, Image, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AssetsScreen = ({ route, navigation }) => {
  // const { ipfs_uri } = route.params; // QmTjoh8RFwQ7AZb9ohdwm5HEfcL8iP3XaG5sHiR43n7udc

  const [image, setImage] = useState('');
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    // base64ToImage();
    getAssets();
  }, []);

  const getAssets = async () => {
    try {
      const response = await axios.get('http://10.0.2.2:3000/api/assets');
      setAssets(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const base64ToImage = async () => {
    try {
      const response = await axios.get(
        `https://ipfs.infura.io/ipfs/${ipfs_uri}`,
      );
      setImage(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(assets);

  return (
    <View>
      <Text>AssetsScreen</Text>
      <Image
        source={{ uri: `data:image/png;base64,${image}` }}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  image: {
    width: 300,
    height: 300,
  },
});

export default AssetsScreen;
