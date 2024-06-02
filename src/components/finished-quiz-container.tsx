import { useNavigate } from "react-router-dom"

import { useQuiz } from "../hooks/quiz-context"
import { Button } from "./button"

export function FinishedQuizContainer() {
    const { score, quiz } = useQuiz()
    const navigate = useNavigate()

    const length = quiz?.questions.length ?? 0
    const percent = score * 100 / length

    function getMessage(): string {
        if (percent == 100) {
            return "Congratulations, you've got a perfect score!"
        }

        if (percent == 0) {
            return "Don't worry 😔, a few more tries and you'll get it!"
        }

        if (percent < 50) {
            return `Every master was once a beginner. Your score is ${score}/${length}.`
        }

        return `Well done, you've got ${score} out of ${length}.`
    }

    return (
        <div className="flex flex-col items-center justify-center gap-10 size-full">
            <span className="font-bold text-center text-9xl text-text phone:text-7xl">{percent.toFixed(0)}%</span>
            
            <div className="flex flex-col items-center gap-3">
                <span className="text-lg text-center text-text">{getMessage()}</span>
                <div className="w-[350px]">
                    <Button onClick={() => navigate("/")}>Go back to home</Button>
                </div>
            </div>
        </div>
    )
}