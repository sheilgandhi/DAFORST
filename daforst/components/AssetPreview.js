import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import React from 'react';
import { COLORS } from '../colors';

const AssetPreview = ({ asset, navigation }) => {
  return (
    <Pressable
      style={styles.container}
      onPress={() =>
        navigation.push('AssetFull', {
          asset: asset,
        })
      }>
      <Image
        source={{ uri: `data:image/png;base64,${asset.imgUrl}` }}
        style={styles.image}
      />
      <View style={styles.information}>
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
    </Pressable>
  );
};

export default AssetPreview;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
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
