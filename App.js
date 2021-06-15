import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View, Image, Alert, Dimensions, TouchableOpacity, Button, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Swipeable from "react-native-gesture-handler/Swipeable";

function RecipeScreen() {
  return (
    <View style={styles.container}>
      <Text>Recipe Page</Text>
    </View>
  )
}

function HawkerScreen() {
  return (
    <View style={styles.container}>
      <Text>Hawker Page</Text>
    </View>
  )
}

function RecipefeedScreen({ navigation }) {

  const [vids, newvids] = useState([
    { key: '1', uri: 'https://miro.medium.com/max/1838/0*bX1mygYPmp4pyypU.png' },
    { key: '2', uri: 'https://images-na.ssl-images-amazon.com/images/S/sgp-catalog-images/region_US/turner-36_s1-Full-Image_GalleryBackground-en-US-1557356293721._SX1080_.jpg' },
    { key: '3', uri: 'https://fsa.zobj.net/crop.php?r=7_BFbnFYGNjozHjg-1LKtqqVvd38zFtetigXUN0Au353kpdYkBDh2SHIpQ_FrU2ABBE86NMHtxFwP1t2WGyT_68HOjUQx9vgF-060ZwpUPm90jY1wPRDEY9Bb6ByVVsIqiPMZPHxKklqO1E3' }
  ]);

  const leftswipe = () => {
    return (
      <View style={styles.leftswipetext}>
        <Text>Bookmark</Text>
      </View>
    )
  }

  function renderItem({ item }) { //takes an item from data and renders it into the list
    return (
      <Swipeable
        renderLeftActions={leftswipe}
        renderRightActions={RecipeScreen}>
        <View style={styles.container}>
          <Image style={styles.image} source={{ uri: item.uri }} />
        </View>
      </Swipeable >
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ left: 130, top: 50, zIndex: 100, backgroundColor: "transparent", fontSize: 20, position: "absolute", color: 'blue', fontWeight: 'bold' }} >Recipe</Text>
      <Text style={{ left: 200, top: 50, zIndex: 100, backgroundColor: "transparent", fontSize: 20, position: "absolute", color: 'white' }} onPress={() => navigation.navigate("Hawkerfeed")}>Hawker</Text>
      <FlatList
        data={vids}
        renderItem={renderItem}
        snapToAlignment={'top'}
        snapToInterval={Dimensions.get('screen').height}
        pagingEnabled={true}
        decelerationRate={'fast'} />
    </SafeAreaView>
  )
}

function HawkerfeedScreen({ navigation }) {

  const [vids, newvids] = useState([
    { key: '1', uri: 'https://miro.medium.com/max/1838/0*bX1mygYPmp4pyypU.png' },
    { key: '2', uri: 'https://images-na.ssl-images-amazon.com/images/S/sgp-catalog-images/region_US/turner-36_s1-Full-Image_GalleryBackground-en-US-1557356293721._SX1080_.jpg' },
    { key: '3', uri: 'https://fsa.zobj.net/crop.php?r=7_BFbnFYGNjozHjg-1LKtqqVvd38zFtetigXUN0Au353kpdYkBDh2SHIpQ_FrU2ABBE86NMHtxFwP1t2WGyT_68HOjUQx9vgF-060ZwpUPm90jY1wPRDEY9Bb6ByVVsIqiPMZPHxKklqO1E3' }
  ]);

  const leftswipe = () => {
    return (
      <View style={styles.leftswipetext}>
        <Text>Bookmark</Text>
      </View>
    )
  }

  function renderItem({ item }) { //takes an item from data and renders it into the list
    return (
      <Swipeable
        renderLeftActions={leftswipe}
        renderRightActions={HawkerScreen}>
        <View style={styles.container}>
          <Image style={styles.image} source={{ uri: item.uri }} />
        </View>
      </Swipeable >
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ left: 130, top: 50, zIndex: 100, backgroundColor: "transparent", fontSize: 20, position: "absolute", color: 'white', }} onPress={() => navigation.navigate("Recipefeed")}>Recipe</Text>
      <Text style={{ left: 200, top: 50, zIndex: 100, backgroundColor: "transparent", fontSize: 20, position: "absolute", color: 'blue', fontWeight: 'bold' }} onPress={() => navigation.navigate("Recipefeed")}>Hawker</Text>
      <FlatList
        data={vids}
        renderItem={renderItem}
        snapToAlignment={'top'}
        snapToInterval={Dimensions.get('screen').height}
        pagingEnabled={true}
        decelerationRate={'fast'} />
    </SafeAreaView>
  )
}


const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Recipefeed"
          component={RecipefeedScreen} />

        <Stack.Screen
          name="Recipe"
          component={RecipeScreen} />

        <Stack.Screen
          name="Hawkerfeed"
          component={HawkerfeedScreen} />

        <Stack.Screen
          name="Hawker"
          component={HawkerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#cdd",
  },
  leftswipetext: {
    fontSize: 30,
    backgroundColor: 'transparent',
    alignItems: "center",
    justifyContent: "center",
    width: 80,
  },
  image: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    flex: 1
  },
  filter: {
    backgroundColor: 'transparent',
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    width: 60,
    color: 'white',
  }
});