import { useQuiz } from "../hooks/quiz-context"
import { QuizAnswerCard } from "./quiz-answer-card"

export function QuizPageContent() {
    const { currentQuestion } = useQuiz()
    
    return (
        <div className="flex flex-col size-full gap-[60px] items-center justify-center">
            <span className="text-2xl font-bold text-center text-text">{currentQuestion?.text}</span>

            <div className={`flex h-[300px] w-full gap-5 phone:flex-col`}>
                {currentQuestion?.answers.map(answer => (
                    <QuizAnswerCard key={answer.id} answer={answer} />
                ))}
            </div>
        </div>
    )
}