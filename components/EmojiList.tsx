import { useState } from "react";
import { FlatList, Platform, Pressable, StyleSheet } from "react-native";
import { Image, ImageSource } from "expo-image";

const emojis = [
    require("../assets/images/emoji1.png"),
    require("../assets/images/emoji2.png"),
    require("../assets/images/emoji3.png"),
    require("../assets/images/emoji4.png"),
    require("../assets/images/emoji5.png"),
    require("../assets/images/emoji6.png"),
]

type EmojiListProps = {
    onSelect: (imgSource: ImageSource) => void;
    onClose: () => void;
};

export function EmojiList(props: EmojiListProps) {
    const { onSelect, onClose } = props;

    return (
        <FlatList
        horizontal
        showsHorizontalScrollIndicator={Platform.OS === 'web'}
        data={emojis}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item, index }) => (
            <Pressable onPress={() => {
                onSelect(item);
                onClose();
            }}>
                <Image source={item} key={index} style={styles.emoji} />
            </Pressable>
        )}
    />
    )
}

const styles = StyleSheet.create({
    listContainer: {
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 4,
    },
    emoji: {
        width: 100,
        height: 100,
    },
});
