import { View, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { Tagged } from "type-fest";

type LocalImageAsset = Tagged<string, "LocalImageAsset">;

export function ImageViewer(props: {
    imgSource: LocalImageAsset | { uri: string };
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