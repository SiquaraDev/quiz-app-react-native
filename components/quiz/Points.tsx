import { View, Text, StyleSheet, Pressable } from "react-native";

export interface PointsProps {
    points: number;
    totalQuestions: number;
    reset: () => void;
}

export default function Points({ points, totalQuestions, reset }: PointsProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Você acertou</Text>
            <Text style={styles.points}>
                {Math.round((points / totalQuestions) * 100)}%
            </Text>
            <Pressable style={styles.button} onPress={reset}>
                <Text style={styles.buttonText}>Reiniciar</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: "black",
        padding: 15,
    },
    text: {
        color: "#bbb",
        fontSize: 20,
    },
    points: {
        color: "white",
        fontSize: 60,
        fontWeight: "900",
    },
    button: {
        marginTop: 20,
        backgroundColor: "#2E9D48",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    buttonText: {
        color: "white",
    },
});
