import { ImageSource, Image } from "expo-image";
import { View } from "react-native";

type EmojiStickerProps = {
    imageSize: number;
    imgSource: ImageSource;
}

export function EmojiSticker(props: EmojiStickerProps) {
    const { imageSize, imgSource } = props;
    return (
        <View style={{ top: -350 }}>
            <Image source={imgSource} style={{ width: imageSize, height: imageSize }} />
        </View>
    )
}