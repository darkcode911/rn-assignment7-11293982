import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';
import CustomDrawerContent from './CustomDrawerContent';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Store" component={StackNavigator} />
      <Drawer.Screen name="Locations" component={StackNavigator} />
      <Drawer.Screen name="Blog" component={StackNavigator} />
      <Drawer.Screen name="Jewelry" component={StackNavigator} />
      <Drawer.Screen name="Electronic" component={StackNavigator} />
      <Drawer.Screen name="Clothing" component={StackNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;