import { useQuiz } from "../hooks/quiz-context"
import { QuizAnswerCard } from "./quiz-answer-card"

export function QuizPageContent() {
    const { currentQuestion } = useQuiz()
    
    return (
        <div className="flex flex-col items-center justify-center size-full gap-[40px]">
            <span className="text-2xl font-bold text-center text-text">{currentQuestion?.text}</span>

            <div className={`flex h-[300px] w-full gap-5 tablet:flex-col phone:flex-col`}>
                {currentQuestion?.answers.map(answer => (
                    <QuizAnswerCard key={answer.id} answer={answer} />
                ))}
            </div>
        </div>
    )
}