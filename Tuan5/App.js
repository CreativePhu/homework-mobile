import React from 'react';
import { Animated, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Shipper from './compoments/Shipper';
import CatAndMouse from './compoments/CatAndMouse';
import Bubble from './compoments/Bubble';

export default function App() {

  return (
    <View style={styles.container}>
      {/* <Bubble /> */}
      {/* <Shipper /> */}
      <CatAndMouse />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  }
});
