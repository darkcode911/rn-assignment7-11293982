import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import ProductDetailScreen from '../Screens/ProductDetailScreen';
import CartScreen from '../Screens/CartScreen'; 


const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={{ title: 'Product Details' }}
      />
        <Stack.Screen name="Cart" component={CartScreen} options={{ title: 'Cart' }} /> 
    </Stack.Navigator>
  );
};

export default StackNavigator;