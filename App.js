import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <Text>Hello React Native</Text>
      <Text>I am Roky Das</Text>
      <Text>I am learning React Native</Text>
      <Text>for building mobile app</Text>
      <Text>Hi SARUJ BRO. GIVE ME SOME SUGGESTIONS</Text>
      <Text>Hey Showrav, How are you?</Text>
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
