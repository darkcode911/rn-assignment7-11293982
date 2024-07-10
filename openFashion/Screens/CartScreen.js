import React, { useState, useEffect } from 'react';
import { View, FlatList, Button, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CartScreen = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const loadCart = async () => {
      const storedCart = await AsyncStorage.getItem('cart');
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      }
    };

    loadCart();
  }, []);

  const removeFromCart = async (product) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
    await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <View style={styles.container}>
      <Image source={require("../images/Logo.png")} style={styles.logo} />
        <View style={styles.headerIcons}></View>
        <Image source={require("../images/Search.png")} style={styles.searchh} />
        <View style={styles.headerIcons}></View>
      <Text style={styles.header}>CHECKOUT</Text>
      <FlatList
        data={cart}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.details}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.price}>${item.price}</Text>
            </View>
            <TouchableOpacity onPress={() => removeFromCart(item)} style={styles.removeButton}>
              <Text style={styles.removeButtonText}>✖</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>EST. TOTAL</Text>
        <Text style={styles.totalAmount}>${cart.reduce((sum, item) => sum + item.price, 0)}</Text>
      </View>
      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutButtonText}>CHECKOUT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  logo:{
    left: 120,
  },
  price: {
    fontSize: 14,
    color: '#888',
  },
  removeButton: {
    padding: 10,
  },
  removeButtonText: {
    color: 'red',
    fontSize: 20,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchh:{
    left: 300,
    top: -20,
  },
  checkoutButton: {
    backgroundColor: '#000',
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CartScreen;