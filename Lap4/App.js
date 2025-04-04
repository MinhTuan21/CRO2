// App.js
import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import CameraComponent from "./components/CameraComponent";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Ứng dụng Camera</Text>
      <CameraComponent />
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 40,
    marginBottom: 10,
    color: "#333",
  },
});

export default App;
// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import MusicPlayerScreen from "./components/MusicScreen";

// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Music">
//         <Stack.Screen name="Music" component={MusicPlayerScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
