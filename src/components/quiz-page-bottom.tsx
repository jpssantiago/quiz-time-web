import { ChevronRight } from "lucide-react"

import { useQuiz } from "../hooks/quiz-context"

export function QuizPageBottom() {   
    const { currentQuestion, quiz, selectedAnswer, nextQuestion } = useQuiz()

    const index = quiz?.questions.findIndex(q => q.id == currentQuestion?.id)

    return (
        <div className="flex items-center justify-between h-12">
            <div className="flex items-center w-12 gap-1 text-text">
                <strong className="text-xl">{(index ?? 0) + 1}</strong>
                <span className="text-[12px]">/ {quiz?.questions.length}</span>
            </div>

            <button 
                className="flex items-center justify-center transition-all border rounded-full size-12 hover:bg-success/80 bg-success border-success disabled:bg-card disabled:border-stroke"
                disabled={!selectedAnswer}
                onClick={nextQuestion}
            >
                <ChevronRight size={24} className="text-caption" />
            </button>
        </div>
    )
}