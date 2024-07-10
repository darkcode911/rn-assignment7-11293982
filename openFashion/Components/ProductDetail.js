import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const ProductDetail = ({ product, addToCart }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../images/Menu.png")} style={styles.Menu} />
        <Image source={require("../images/Logo.png")} style={styles.logo} />
        <View style={styles.headerIcons}>
          <Image source={require("../images/Search.png")} style={styles.search} />
          <Image source={require("../images/shoppingBag.png")} style={styles.sb} />
        </View>
      </View>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{product.title}</Text>
        <Image source={require("../images/Export.png")} style={styles.export} />
        <Text style={styles.price}>${product.price}</Text>
        <Text style={styles.sectionTitle}>MATERIALS</Text>
        <Text style={styles.materials}>{product.description}</Text>
        <View style={styles.instructions}>
          <View style={styles.instructionRow}>
            <Image
              source={require("../images/Do Not Bleach.png")}
              style={styles.bleachicon}
            />
            <Text>Do not use bleach</Text>
          </View>
          <View style={styles.instructionRow}>
            <Image
              source={require("../images/Do Not Tumble Dry.png")}
              style={styles.bleachicon}
            />
            <Text>Do not tumble dry</Text>
          </View>
          <View style={styles.instructionRow}>
            <Image
              source={require("../images/Do Not Wash.png")}
              style={styles.bleachicon}
            />
            <Text>Dry clean with tetrachloroethylene</Text>
          </View>
          <View style={styles.instructionRow}>
            <Image
              source={require("../images/Iron Low Temperature.png")}
              style={styles.bleachicon}
            />
            <Text>Iron at a maximum of 110ºC/230ºF</Text>
          </View>
          <View style={styles.line} />
        </View>
        <View style={styles.shipping}>
          <Image
            source={require("../images/Shipping.png")}
            style={styles.shippingicon}
          />
          <Text style={styles.shippingtext}>Free Flat Rate Shipping</Text>
          <Text style={styles.stext}>Estimated to be delivered on</Text>
          <Text style={styles.stext}> 09/11/2021 - 12/11/2021</Text>
          <Image source={require("../images/Up.png")} style={styles.up} />
        </View>
        <View style={styles.addToBasketContainer}>
          <TouchableOpacity
            style={styles.addToBasketButton}
            onPress={() => addToCart(product)}
          >
            <Icon name="plus" size={20} color="white" />
            <Text style={styles.addToBasketText}>ADD TO BASKET</Text>
            <Icon name="heart-o" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  headerIcons: {
    flexDirection: 'row',
  },
  Menu: {
    width: 24,
    height: 24,
  },
  logo: {
    width: 110,
    height: 45,
  },
  search: {
    width: 24,
    height: 24,
    marginHorizontal: 10,
  },
  sb: {
    width: 24,
    height: 24,
  },
  image: {
    width: "60%",
    height: 300,
    left: 60,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
   
  },
  price: {
    fontSize: 20,
    color: "orange",
    marginVertical: 10,
    marginTop: 3,
    
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 3,
     
  },
  materials: {
    fontSize: 16,
    marginVertical: 10,
  },
  instructions: {
    marginVertical: 10,
  },
  instructionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  bleachicon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  line: {
    borderBottomColor: "#ddd",
    borderBottomWidth: 3,
    width: "100%",
    marginVertical: 10,
  
  },
  shippingicon:{
    bottom: -25,
    marginTop:-40,
  },
  shipping: {
    marginVertical: 20,
  },
  shippingtext: {
    fontSize: 14,
    fontWeight: "bold",
    left: 30,
  },
  stext:{
    left: 30,
  },
  up: {
    alignSelf: 'flex-end',
    top: -55,
  },
  addToBasketContainer: {
    alignItems: "center",
  },
  addToBasketButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "black",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: "100%",
  },
  addToBasketText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  export: {
    position: 'absolute',
    top: 20,
    right: 10,
  },
});

export default ProductDetail;