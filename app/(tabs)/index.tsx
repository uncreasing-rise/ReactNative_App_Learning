import { Link, Stack } from "expo-router";
import {
  StyleSheet,
  ScrollView,
  Image,
  Button,
  Alert,
  TextInput,
  FlatList,
} from "react-native";
import { Text, View } from "@/components/Themed";
import { useState } from "react";

export default function TabOneScreen() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([
    { id: "1", text: "Item 1" },
    { id: "2", text: "Item 2" },
    { id: "3", text: "Item 3" },
  ]);

  const handleButtonPress = () => {
    Alert.alert("Button Pressed", "You pressed the button!");
  };

  const handleAddItem = () => {
    if (inputValue.trim()) {
      setItems([...items, { id: Date.now().toString(), text: inputValue }]);
      setInputValue("");
    }
  };

  return (
    <>
      <Stack.Screen options={{ title: "Tab One" }} />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Welcome to Tab One</Text>
          <Image
            source={{
              uri: "https://th.bing.com/th/id/OIP.avb9nDfw3kq7NOoP0grM4wHaEK?rs=1&pid=ImgDetMain",
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.paragraph}>
            This is a beautiful screen with some example content. You can
            customize it as you like.
          </Text>
          <Button title="Press Me" onPress={handleButtonPress} />
          <TextInput
            style={styles.input}
            placeholder="Enter new item"
            value={inputValue}
            onChangeText={setInputValue}
          />
          <Button title="Add Item" onPress={handleAddItem} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.listItem}>
                <Text style={styles.listItemText}>{item.text}</Text>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#f0f0f0",
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 10,
  },
  content: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  paragraph: {
    fontSize: 16,
    color: "#666",
    marginBottom: 10,
  },
  link: {
    marginTop: 10,
  },
  linkText: {
    fontSize: 16,
    color: "#1e90ff",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  listItem: {
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  listItemText: {
    fontSize: 16,
  },
});
