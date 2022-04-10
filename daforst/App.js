import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import UploadScreen from './screens/UploadScreen';
import AssetsScreen from './screens/AssetsScreen';
import CameraScreen from './screens/CameraScreen';

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
        <Stack.Screen name="Camera" component={CameraScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
