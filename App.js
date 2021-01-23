// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, StatusBar } from 'react-native';

import { useDimensions, useDeviceOrientation } from "@react-native-community/hooks";

export default function App() {

  // console.log(useDimensions());
  // console.log(useDeviceOrientation());

  const { portrait, landscape } = useDeviceOrientation();

  return (
    <View style={styles.container}>
      <Text>Hello React Native</Text>
      <Image style={styles.image} source={require('./assets/roky.jpg')} />
      {/* <StatusBar style="auto" /> */}
      <Image style={styles.image} source={{ uri: "https://i.ibb.co/LvCMN10/psd-To-Html.jpg" }} />

      <Button
        title="Are you a React Developer?"
        // onPress={() => alert("Button clicked")}
        onPress={() => Alert.alert("Alert Title", "Alert Message",
          [
            { text: "Yes", onPress: () => console.log("Yes is clicked") },
            { text: "No", onPress: () => console.log("No is clicked") },
            { text: "May Be" },
          ])
        }
      />

      <Button
        title="Are you a React Developer?"
        // onPress={() => alert("Button clicked")}
        onPress={() => Alert.prompt("Prompt Title", "Prompt Message", text => console.log(text))
        }
      />

      <View style={{
        width: '100%',
        height: landscape ? '100%' : '30%',
        backgroundColor: 'teal',
      }}>
        <Text style={{}}>I am under the blog</Text>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 10,
  },

  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover'
  },

  // box: {
  //   width: '100%',
  //   height: landscape ? '30%' : '100%',
  // },

});