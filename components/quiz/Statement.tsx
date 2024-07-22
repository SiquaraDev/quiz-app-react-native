import { LinearGradient } from "expo-linear-gradient";
import { View, Text, StyleSheet } from "react-native";

export interface StatementProps {
    statement: string;
}

export default function Statement({ statement }: StatementProps) {
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={["rgba(0,0,0,0.7)", "rgba(0,0,0,0.2)"]}
                style={styles.background}
            />
            <Text style={styles.text}>{statement}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: "#852E9C",
        padding: 20,
        marginHorizontal: 20,
        borderRadius: 10,
    },
    text: {
        color: "white",
        fontSize: 23,
        fontWeight: "bold",
        opacity: 0.8,
        textAlign: "center",
    },
    background: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
});
