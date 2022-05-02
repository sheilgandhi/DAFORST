import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import UploadScreen from './screens/UploadScreen';
import AssetsScreen from './screens/AssetsScreen';
import AssetFullScreen from './screens/AssetFullScreen';

const Stack = createNativeStackNavigator();

const globalScreenOptions = {
  hideNavigationBar: true,
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={globalScreenOptions}>
        <Stack.Screen name="Home" component={HomeScreen} title="DAFORST" />
        <Stack.Screen name="Upload" component={UploadScreen} />
        <Stack.Screen name="Assets" component={AssetsScreen} />
        <Stack.Screen name="AssetFull" component={AssetFullScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
