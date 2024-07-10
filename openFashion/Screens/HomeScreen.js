import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

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
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            source={require("../images/Menu.png")}
            style={styles.headerIcon}
          />
        </TouchableOpacity>
        <Image source={require("../images/Logo.png")} style={styles.logo} />
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Image
              source={require("../images/Search.png")}
              style={styles.headerIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
            <Image
              source={require("../images/shopping bag.png")}
              style={styles.headerIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.pageTitle}>OUR STORY</Text>
      <Image
        source={require("../images/Listview.png")}
        style={styles.listview}
      />
      <Image 
        source={require("../images/Filter.png")}
        style={styles.filter}
      />
      <FlatList
        data={products}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ProductDetail", { product: item })
              }
            >
              <Image source={{ uri: item.image }} style={styles.productImage} />
            </TouchableOpacity>
            <View style={styles.productInfo}>
              <Text style={styles.productTitle}>{item.title}</Text>
              <Text style={styles.productPrice}>${item.price}</Text>
            </View>
            <TouchableOpacity
              onPress={() => addToCart(item)}
              style={styles.plusButton}
            >
              <Image
                source={require("../images/add_circle.png")}
                style={styles.plusIcon}
              />
            </TouchableOpacity>
          </View>
        )}
      />
      <TouchableOpacity
        style={styles.cartButton}
        onPress={() => navigation.navigate("Cart")}
      >
        <Text style={styles.buttonText}>View Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  logo: {
    width: 70,
    height: 24,
  },
  headerIcons: {
    flexDirection: "row",
  },
  headerIcon: {
    width: 24,
    height: 24,
    marginHorizontal: 10,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
    marginVertical: 20,
    marginBottom: -20,
  },
  productContainer: {
    flex: 1,
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    alignItems: "center",
  },
  productImage: {
    width: 150,
    height: 200,
  },
  productInfo: {
    alignItems: "center",
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  productPrice: {
    fontSize: 14,
    color: "#888",
  },
  plusButton: {
    position: "absolute",
    bottom: 10,
    right: 10,
    width: 30,
    height: 30,
  },
  plusIcon: {
    width: "100%",
    height: "100%",
  },
  cartButton: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  filter: {
    left:360,
    top: -20,
    width: 30,
  },
  listview: {
    left: 330,
    top:0,
    width:30,
  },
});

export default HomeScreen;