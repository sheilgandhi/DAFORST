import { View, Text, FlatList, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../components/Loading';
import AssetPreview from '../components/AssetPreview';

const AssetsScreen = ({ navigation }) => {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    // base64ToImage();
    getAssets();
  }, []);

  const getAssets = async () => {
    try {
      const response = await axios.get('http://10.0.2.2:3000/api/assets');
      if (response) {
        const array = response.data;
        for (let i = 0; i < array.length; i++) {
          array[i]['imgUrl'] = await base64ToImage(array[i].ipfs_cid);
        }
        setAssets(array);
      }
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
        <FlatList
          data={assets}
          renderItem={({ item }) => (
            <AssetPreview asset={item} navigation={navigation} key={item.key} />
          )}
        />
      ) : (
        <Loading />
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
