/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SettingsScreen from './components/SettingsScreen.js';
import PastReceiptsScreen from './components/PastReceiptsScreen.js';
import HomeScreen from './components/HomeScreen.js';
import AddIngredients from './components/AddIngredients.js';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Add') {
              iconName = focused ? 'ios-add-circle' : 'ios-add-circle-outline';
            } else if (route.name === 'Receipts') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-cog' : 'ios-cog-outline'; // filled cog doesnt work
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>
        <Tab.Screen name="Add" component={AddIngredients}></Tab.Screen>
        <Tab.Screen name="Receipts" component={PastReceiptsScreen}></Tab.Screen>
        <Tab.Screen name="Settings" component={SettingsScreen}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};


export default App;
