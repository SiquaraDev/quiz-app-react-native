import { View, Text, StyleSheet } from "react-native";

export default function Logo() {
    return (
        <View>
            <Text style={styles.primary}>SPACE QUIZ</Text>
            <Text style={styles.secondary}>Perguntas de outro mundo!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    primary: {
        color: "#fff",
        fontSize: 30,
        textAlign: "center",
        fontFamily: "SOLARSPACEDEMO-Regular",
    },
    secondary: {
        color: "#fff",
        fontSize: 15,
        textAlign: "center",
        fontFamily: "SPACEMISSION",
    },
});
