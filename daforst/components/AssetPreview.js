import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import React from 'react';
import { COLORS } from '../colors';

const AssetPreview = ({ asset, index }) => {
  return (
    <View style={styles.container(index)}>
      <View style={styles.information}>
        <Text style={styles.lines}>
          <Text style={styles.bold}>ARCore ID: </Text>
          {asset.arcore_id}
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

export default AssetPreview;

const styles = StyleSheet.create({
  container: index => ({
    flexDirection: 'row',
    backgroundColor: index % 2 == 0 ? COLORS.grey : COLORS.cream,
  }),
  information: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    color: COLORS.black,
  },
  lines: {
    color: COLORS.black,
  },
  bold: {
    fontWeight: 'bold',
    color: COLORS.black,
  },
});
