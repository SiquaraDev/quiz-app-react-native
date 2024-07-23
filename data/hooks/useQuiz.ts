import { useState } from "react";
import allQuestions from "@/data/constants/questions";

export default function useQuiz() {
    const [indexQuestion, setIndexQuestion] = useState(0);
    const [answers, setAnswers] = useState<number[]>([]);
    const [questions, setQuestions] = useState(randomQuestions());

    function randomQuestions() {
        const shuffledQuestions = [...allQuestions]
            .sort(() => Math.random() - 0.5)
            .slice(0, 10);
        return shuffledQuestions;
    }

    function nextQuestion() {
        setTimeout(() => {
            setIndexQuestion(indexQuestion + 1);
        }, 1000);
    }

    return {
        get question() {
            return questions[indexQuestion];
        },
        get points() {
            return questions
                .map((q) => q.correctAnswer)
                .map((a, i) => a === answers[i])
                .filter(Boolean).length;
        },
        get totalQuestions() {
            return questions.length;
        },
        get concluded() {
            return indexQuestion >= questions.length;
        },
        answer(answer: number) {
            setAnswers([...answers, answer]);
            nextQuestion();
        },
        reset() {
            setIndexQuestion(0);
            setAnswers([]);
            setQuestions(randomQuestions());
        },
    };
}
