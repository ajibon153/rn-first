import { useEffect } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { DevSettings } from "react-native";

export default function App() {
  useEffect(() => {
    // if (__DEV__) {
    //   DevSettings._nativeModule.setHotLoadingEnabled(false);
    // }
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your goal..." />
        <Button title="add" />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List Goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    // flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    marginBottom: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "80%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 3,
  },
});
