import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import { COLORS } from '../colors';

const AssetFullScreen = ({ navigation, route }) => {
  const { asset } = route.params;
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: `data:image/png;base64,${asset.imgUrl}` }}
        style={styles.image}
      />
      <View style={styles.information}>
        <Text style={styles.lines}>
          <Text style={styles.bold}>ARCore ID: </Text>
          {asset.arcore_id}
        </Text>
        <Text style={styles.lines}>
          <Text style={styles.bold}>ARCore Location: </Text>
          {asset.arcore_location}
        </Text>
        <Text style={styles.lines}>
          <Text style={styles.bold}>IPFS ID: </Text>
          {asset.ipfs_cid}
        </Text>
        <Text style={styles.lines}>
          <Text style={styles.bold}>Name: </Text>
          {asset.name}
        </Text>
        <Text style={styles.lines}>
          <Text style={styles.bold}>Owner: </Text>
          {asset.owner}
        </Text>
        <Text style={styles.lines}>
          <Text style={styles.bold}>Description: </Text>
          {asset.description}
        </Text>
      </View>
    </View>
  );
};

export default AssetFullScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 300,
  },
  information: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 20,
    color: COLORS.black,
  },
  line: {
    marginVertical: 15,
  },
  bold: {
    fontWeight: 'bold',
  },
});
