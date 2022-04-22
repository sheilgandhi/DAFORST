import {View, Text} from 'react-native';
import React from 'react';

const AssetsScreen = ({route, navigation}) => {
  const {ipfs_uri} = route.params;
  return (
    <View>
      <Text>AssetsScreen</Text>
      <Text>{ipfs_uri}</Text>
    </View>
  );
};

export default AssetsScreen;
