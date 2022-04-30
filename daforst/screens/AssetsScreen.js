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

  useEffect(() => {
    // remap array to use ipfs_uri
  }, [assets]);

  const getAssets = async () => {
    try {
      const response = await axios.get('http://10.0.2.2:3000/api/assets');
      setAssets(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const base64ToImage = async asset => {
    try {
      const response = await axios.get(
        `https://ipfs.infura.io/ipfs/${asset.ipfs_cid}`,
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Text>AssetsScreen</Text>
      {assets.map((asset, i) => (
        <View key={i}>
          <Text>{asset.ipfs_cid}</Text>
          <Image
            source={{ uri: `data:image/png;base64,${base64ToImage(asset)}` }}
            style={styles.image}
          />
        </View>
      ))}
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
