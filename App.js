import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/component/Home';
import Screen2 from './src/component/Screen2';
import {View,Image} from 'react-native';
<div id="root"></div>
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
           <Stack.Screen
          name="Home"
          component={Home}
          options={{title:'Home',
        }}
        />
             <Stack.Screen
          name="Screen2"
          component={Screen2}
          options={{title:'Screen2',
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


