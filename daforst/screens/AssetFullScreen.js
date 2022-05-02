import { View, Text } from 'react-native';
import React from 'react';

const AssetFullScreen = ({ navigation, route }) => {
  const { asset } = route.params;
  return (
    <View>
      <Text>{asset.name}</Text>
    </View>
  );
};

export default AssetFullScreen;
