import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Fastlane testing</Text>
      <StatusBar style="auto" />
      <Button title='Click me'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
