import React from 'react';
import { View } from 'react-native';

export default function App() {
  return (
    <View 
      style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        flexWrap: "wrap",
      }}>
        <View 
          style={{
            backgroundColor: "blue",
            width: 100,
            height: 100,
          }} 
        />
        <View 
          style={{
            backgroundColor: "orange",
            width: 100,
            height: 100,
          }} 
        />
        <View 
          style={{
            backgroundColor: "tomato",
            width: 100,
            height: 100,
          }} 
        />
    </View>
  );
}
