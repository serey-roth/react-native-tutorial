import { Pressable, Text, View, StyleSheet, ViewStyle, TextStyle } from "react-native";

export function Button(props: {
    label: string,
    onClick: () => void;
    containerStyles?: ViewStyle[];
    buttonStyles?: ViewStyle[];
    labelStyles?: TextStyle[];
    icon?: React.ReactElement;
}) {
    return (
        <View style={[
            styles.buttonContainer,
            ...(props.containerStyles ?? []),
        ]}>
            <Pressable onPress={props.onClick} style={[
                styles.button,
                ...(props.buttonStyles ?? []),
            ]}>
                {props.icon}
                <Text style={[
                    styles.buttonLabel,
                    ...(props.labelStyles ?? []),
                ]}>{props.label}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonLabel: {
        color: '#fff',
        fontSize: 16,
    },
});
