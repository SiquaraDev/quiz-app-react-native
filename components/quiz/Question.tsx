import QuestionModel from "@/data/model/Question";
import { View } from "react-native";
import Statement from "./Statement";
import Option from "./Option";

export interface QuestionProps {
    question: QuestionModel;
    selectOption: (id: number) => void;
}

export default function Question({ question, selectOption }: QuestionProps) {
    return (
        <View style={{ gap: 25 }}>
            <Statement statement={question.question} />
            <View style={{ gap: 10 }}>
                {question.answers.map((option, id) => (
                    <Option
                        key={id}
                        text={option}
                        onPress={() => {
                            selectOption(id);
                        }}
                    ></Option>
                ))}
            </View>
        </View>
    );
}
