import { View, StyleSheet } from "react-native";
import { Image } from "expo-image";

export function ImageViewer(props: {
    imgSource: string;
}) {
    return <Image source={props.imgSource} style={styles.image} />
}

const styles = StyleSheet.create({

    image: {
        width: 320,
        height: 440,
        borderRadius: 10,
    },
});