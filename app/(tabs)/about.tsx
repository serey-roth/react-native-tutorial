import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About this app</Text>
      <Link href="/" style={styles.button}>Go back to Home</Link>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#25292e"
    },
    text: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#fff"
    },
    button: {
        padding: 10,
        fontSize: 16,
        color: "gray",
        textDecorationLine: "underline",
        marginTop: 10
    }
});
