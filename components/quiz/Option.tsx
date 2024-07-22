import { Pressable, Text, StyleSheet } from "react-native";

export interface OptionProps {
    text: string;
    onPress: () => void;
}

export default function Option({ text, onPress }: OptionProps) {
    return (
        <Pressable style={styles.container} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#2E9D48",
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 50,
        marginHorizontal: 20,
    },
    text: {
        color: "#fff",
        fontSize: 23,
        fontWeight: "bold",
    },
});
