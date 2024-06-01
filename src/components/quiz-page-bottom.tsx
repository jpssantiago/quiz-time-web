import { useState } from "react"
import { ChevronRight } from "lucide-react"
import { useNavigate } from "react-router-dom"

import { useQuiz } from "../hooks/quiz-context"
import { useCreator } from "../hooks/creator-context"
import { EnterCreatorModeModal } from "./enter-creator-mode-modal"

export function QuizPageBottom() {
    const [show, setShow] = useState<boolean>(false)
    
    const { quiz, selectedAnswer, nextQuestion } = useQuiz()
    const { hasToken } = useCreator()
    const navigate = useNavigate()

    function handleClick() {
        if (hasToken) {
            return navigate(`/creator/${quiz?.pin}`)
        }

        setShow(true)
    }

    return (
        <div className="flex items-center justify-between h-12">
            <div className="flex items-center w-12 gap-1 text-text">
                <strong className="text-xl">1</strong>
                <span className="text-[12px]">/ 5</span>
            </div>

            <span className="text-base text-center text-text phone:hidden">
                Are you the creator of this quiz?
                <span 
                    className="transition-all cursor-pointer text-light-purple hover:text-dark-purple"
                    onClick={handleClick}
                > You can edit it</span>.
            </span>

            <span 
                className="hidden text-sm text-center text-light-purple phone:flex"
                onClick={handleClick}
            >Edit this quiz.</span>

            <button 
                className="flex items-center justify-center transition-all border rounded-full size-12 hover:bg-success/80 bg-success border-success disabled:bg-card disabled:border-stroke"
                disabled={!selectedAnswer}
                onClick={nextQuestion}
            >
                <ChevronRight size={24} className="text-caption" />
            </button>

            <EnterCreatorModeModal show={show} onClose={() => setShow(false)} />
        </div>
    )
}