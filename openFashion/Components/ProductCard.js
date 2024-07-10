import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const ProductCard = ({ product, addToCart }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text>{product.title}</Text>
      <Text>${product.price}</Text>
      <Button title="View Details" onPress={() => {}} />
      <Button title="Add to Cart" onPress={() => addToCart(product)} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
  },
});

export default ProductCard;