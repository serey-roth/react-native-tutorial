import { View, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { Tagged } from "type-fest";

type LocalImageAsset = Tagged<string, "LocalImageAsset">;

type ImageViewerProps = {
    imgSource: LocalImageAsset | { uri: string };
};

export function ImageViewer(props: ImageViewerProps) {
    return <Image source={props.imgSource} style={styles.image} />
}

const styles = StyleSheet.create({

    image: {
        width: 320,
        height: 440,
        borderRadius: 10,
    },
});