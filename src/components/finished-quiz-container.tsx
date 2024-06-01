import { useNavigate } from "react-router-dom"

import { useQuiz } from "../hooks/quiz-context"
import { Button } from "./button"

export function FinishedQuizContainer() {
    const { score, quiz } = useQuiz()
    const navigate = useNavigate()

    const percent = score * 100 / (quiz?.questions.length ?? 0)

    return (
        <div className="flex flex-col items-center justify-center gap-5 size-full">
            <span className="text-9xl">🏆</span>
            <span className="text-2xl text-text">Well done, your score is {percent}%.</span>
            <div className="w-[350px]">
                <Button onClick={() => navigate("/")}>Go back to home</Button>
            </div>
        </div>
    )
}