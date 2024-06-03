import { Check, X } from "lucide-react"

import { Answer } from "../models/answer"
import { useQuiz } from "../hooks/quiz-context"

interface Props {
    answer: Answer
}

export function QuizAnswerCard({ answer }: Props) {
    const { selectedAnswer, selectAnswer, currentQuestion } = useQuiz()

    const isThisTheSelectedAnswer = selectedAnswer?.id == answer.id // Check if THIS answer is the selected answer.
    const isThisAnswerWrong = selectedAnswer && isThisTheSelectedAnswer && currentQuestion?.correctAnswer != answer.id // Check if THIS answer is the selected answer and it is not correct.
    const isThisAnswerCorrect = selectedAnswer && currentQuestion?.correctAnswer == answer.id // Check if THIS answer is the selected answer and the correct one.

    function getTheCardBorder(): string {
        if (isThisAnswerCorrect) {
            return "border-success border-b-[6px]"
        }

        if (isThisAnswerWrong) {
            return "border-danger border-b-[6px]"
        }

        return "border-stroke"
    }

    function getIndicatorBackground(): string {
        if (isThisAnswerCorrect) {
            return "border-success bg-success"
        }

        if (isThisAnswerWrong) {
            return "border-danger bg-danger"
        }

        return "border-caption group-hover:border-text"
    }

    function handleOnClick() {
        if (!selectedAnswer) selectAnswer(answer)
    }

    return (
        <div
            key={answer.id}
            className={`relative flex items-center justify-center text-center rounded-lg shadow-lg size-full bg-card border-[3px] cursor-pointer group transition-all hover:bg-stroke ${getTheCardBorder()}`}
            onClick={handleOnClick}
        >
            <div
                className={`absolute rounded-full top-5 right-5 size-6 border-[3px] transition-all ${getIndicatorBackground()} tablet:top-[calc(50%-12px)] phone:top-[calc(50%-12px)]`}
            >
                {currentQuestion && isThisAnswerCorrect && <Check size={18} className="text-caption" />}
                {currentQuestion && isThisAnswerWrong && <X size={18} className="text-caption" />}
            </div>

            <span className="w-full text-base font-bold mx-14 text-text">{answer.text}</span>
        </div>
    )
}