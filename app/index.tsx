import Page from "@/components/template/Page";
import { SafeAreaView } from "react-native";
import Logo from "./../components/template/Logo";
import Question from "@/components/quiz/Question";
import useQuiz from "@/data/hooks/useQuiz";
import Points from "@/components/quiz/Points";

export default function HomeScreen() {
    const { question, concluded, points, totalQuestions, reset, answer } =
        useQuiz();

    return (
        <Page>
            <SafeAreaView style={{ gap: 40 }}>
                <Logo />
                {concluded ? (
                    <Points
                        points={points}
                        totalQuestions={totalQuestions}
                        reset={reset}
                    />
                ) : (
                    <Question question={question} selectOption={answer} />
                )}
            </SafeAreaView>
        </Page>
    );
}
