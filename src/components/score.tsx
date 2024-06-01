import { Check } from "lucide-react"

import { useQuiz } from "../hooks/quiz-context"

export function Score() {
    const { score } = useQuiz()

    return (
        <div className="flex items-center h-full gap-2 px-4 border-2 rounded-lg border-success text-success">
            <Check size={22} />
            <span className="text-xl font-bold">{score}</span>
        </div>
    )
}