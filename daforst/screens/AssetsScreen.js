import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { COLORS } from '../colors';

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
      const array = response.data;
      for (let i = 0; i < array.length; i++) {
        array[i]['imgUrl'] = await base64ToImage(array[i].ipfs_cid);
      }
      setAssets(array);
    } catch (error) {
      console.error(error);
    }
  };

  const base64ToImage = async ipfs_cid => {
    try {
      const response = await axios.get(
        `https://ipfs.infura.io/ipfs/${ipfs_cid}`,
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      {assets.length > 0 ? (
        assets.map((asset, i) => (
          <View key={i}>
            <Image
              source={{ uri: `data:image/png;base64,${asset.imgUrl}` }}
              style={styles.image}
            />
          </View>
        ))
      ) : (
        <ActivityIndicator size="large" color={COLORS.green} />
      )}
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
