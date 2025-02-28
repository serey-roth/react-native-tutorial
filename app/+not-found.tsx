import { Link, Stack } from "expo-router";
import { View, StyleSheet } from "react-native";

export default function NotFoundScreen() {
    return (
        <>
        <Stack.Screen options={{ title: "404 Not Found" }} />
        <View style={styles.container}>
            <Link href="/" style={styles.button}>Go back to Home</Link>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
    },
    text: {
        fontSize: 32,
        fontWeight: "bold",
        color: "black"
    },
    button: {
        padding: 10,
        fontSize: 16,
        color: "skyblue",
        textDecorationLine: "underline",
        marginTop: 10
    }
});
