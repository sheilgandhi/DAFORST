import { View, Text, FlatList, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../components/Loading';
import AssetPreview from '../components/AssetPreview';

const AssetsScreen = ({ navigation }) => {
  const [assets, setAssets] = useState([]);
  const ip = '10.140.78.215'; // '192.168.68.52';

  useEffect(() => {
    // base64ToImage();
    getAssets();
  }, []);

  const getAssets = async () => {
    try {
      const response = await axios.get(`http://${ip}:3000/api/ipfs`);
      if (response) {
        setAssets(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      {assets.length > 0 ? (
        <FlatList
          testID="list"
          data={assets}
          renderItem={({ item, index }) => (
            <AssetPreview
              asset={item}
              navigation={navigation}
              key={item.key}
              index={index}
            />
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
