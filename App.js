import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View, Image, Alert, Dimensions, TouchableOpacity, Button } from "react-native";
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


function RecipefeedScreen({ navigation }) {
  <TouchableOpacity style={styles.filter} onPress={() => navigation.navigate("Hawkerfeed")}>
    <Text>Tap to go to Hawkerfeed</Text>
  </TouchableOpacity>

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
    <View style={styles.container}>
      <Swipeable renderLeftActions={leftswipe}>
        <FlatList
          data={vids}
          renderItem={renderItem}
          snapToAlignment={'top'}
          snapToInterval={Dimensions.get('screen').height}
          pagingEnabled={true}
          decelerationRate={'fast'} />
      </Swipeable>
    </View>
  )
}

function HawkerfeedScreen({ navigation }) {
  <TouchableOpacity style={styles.filter} onPress={() => navigation.navigate("Recipefeed")}>
    <Text>Tap to go to Recipefeed</Text>
  </TouchableOpacity>

  return (
    <View style={styles.container}>
      <Text>Hawkerfeed Page</Text>
    </View>
  )
}

function HawkerfeedstackScreen() {
  const Hawkerfeedstack = createStackNavigator();
  return (
    <Hawkerfeedstack.Navigator>
      <Hawkerfeedstack.Screen
        name="Hawkerfeed"
        component={HawkerfeedScreen}
      />
    </Hawkerfeedstack.Navigator>
  );
}

function RecipefeedstackScreen() {
  const Recipefeedstack = createStackNavigator();
  return (
    <Recipefeedstack.Navigator>
      <Recipefeedstack.Screen
        name="Recipefeed"
        component={RecipefeedScreen}
        options={{
          headerTitle: "Recipefeed",
          headerTitleStyle: styles.headerTitleStyle,
          headerStyle: styles.headerStyle,
        }}
      />
    </Recipefeedstack.Navigator>
  );
}

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator mode="modal" headerMode="none">
        <Stack.Screen name="Recipefeedstack" component={RecipefeedstackScreen} />

        <Stack.Screen
          name="Recipe"
          component={RecipeScreen}
          options={{
            headerTitle: "Recipe",
            headerTitleStyle: styles.headerTitleStyle,
            headerStyle: styles.headerStyle,
          }} />

        <Stack.Screen name="Hawkerfeedstack" component={HawkerfeedstackScreen} />
        <Stack.Screen
          name="Hawkerfeed"
          component={HawkerfeedScreen}
          options={{
            headerTitle: "Hawkerfeed",
            headerTitleStyle: styles.headerTitleStyle,
            headerStyle: styles.headerStyle,
          }}
        />
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
    opacity: 0.5,
  }
});