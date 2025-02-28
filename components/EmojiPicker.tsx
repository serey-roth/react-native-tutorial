import { Modal, StyleSheet, View, Text } from "react-native";
import { Button } from "./Button";
import { FontAwesome } from "@expo/vector-icons";
import { PropsWithChildren } from "react";

type EmojiPickerProps = PropsWithChildren<{
    isVisible: boolean;
    onClose: () => void;
}>;

export function EmojiPicker(props: EmojiPickerProps) {
    const { children, isVisible, onClose } = props;
    return (
        <Modal animationType="slide" transparent={true} visible={isVisible} onRequestClose={onClose}>
            <View style={styles.modalContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Choose a sticker</Text>   
                    <Button onClick={onClose} icon={
                        <FontAwesome name='close' size={22} color='#fff' />
                    }/>
                </View>
                {children}
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        height: '25%',
        width: '100%',
        backgroundColor: "#25292e",
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
        position: 'absolute',
        bottom: 0,
    },
    titleContainer: {
        height: '16%',
        backgroundColor: '#464C55',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        color: '#fff',
        fontSize: 16,
    },
});