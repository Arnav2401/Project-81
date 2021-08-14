import React from 'react';
import Create from '../screens/createrPost';
import Feed from '../screens/feed';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
const Tab = createBottomTabNavigator()

const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Feed' component={Feed} options={{
                tabBarLabel: 'Feed',
                tabBarIcon: ({ color, size, focused }) => {
                    return(
                    <AntDesign name="picture" size={24} color="black" />
                )}
            }}
            />
            <Tab.Screen name='Create' component={Create} options={{
                tabBarLabel: 'Create',
                tabBarIcon: ({ color, size, focused }) => {
                    return(
                    <Ionicons name="create" size={24} color="black" />                }
            )}} 
            />
        </Tab.Navigator>
    )
}

export default TabNavigator
