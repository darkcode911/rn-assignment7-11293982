import React from "react";
import { View, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ProductDetail from "../Components/ProductDetail";

const ProductDetailScreen = ({ route }) => {
  const { product } = route.params;

  const addToCart = async (product) => {
    const storedCart = await AsyncStorage.getItem("cart");
    let cart = [];
    if (storedCart) {
      cart = JSON.parse(storedCart);
    }
    cart.push(product);
    await AsyncStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <View style={styles.container}>
      <ProductDetail product={product} addToCart={addToCart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ProductDetailScreen;