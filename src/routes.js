import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AntDesign} from '@expo/vector-icons';
import colors from './Colors';

const Tab = createBottomTabNavigator();

import TodoApp from './Components/todoApp';
import MainScreen from './Components/mainScreen';

export default function Routes() {
  return (
    <Tab.Navigator tabBarOptions={{activeTintColor: colors.blue, inactiveTintColor: colors.gray}} >
      <Tab.Screen 
        name="Home" 
        component={MainScreen} 
        options={{
          tabBarIcon: ({color}) => (
            <AntDesign name="home" color={color} size={24} />
          )
        }}
      />
      <Tab.Screen 
        name="A Fazer" 
        component={TodoApp} 
        options={{
          tabBarIcon: ({color}) => (
            <AntDesign name="checksquareo" color={color} size={24} />
          )
        }}
      />
    </Tab.Navigator>
  );
}

