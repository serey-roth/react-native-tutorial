import { Pressable, Text, View, StyleSheet, ViewStyle, TextStyle } from "react-native";

type ButtonProps = {
    label?: string,
    onClick?: () => void;
    wrapperStyles?: ViewStyle[];
    buttonStyles?: ViewStyle[];
    labelStyles?: TextStyle[];
    icon?: React.ReactElement;
}

export function Button(props: ButtonProps) {
    return (
        <View style={[
            styles.wrapper,
            ...(props.wrapperStyles ?? []),
        ]}>
            <Pressable onPress={props.onClick} style={[
                styles.button,
                ...(props.buttonStyles ?? []),
            ]}>
                {props.icon}
                {props.label && (
                    <Text style={[
                        styles.buttonLabel,
                        ...(props.labelStyles ?? []),
                    ]}>{props.label}</Text>
                )}
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
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
