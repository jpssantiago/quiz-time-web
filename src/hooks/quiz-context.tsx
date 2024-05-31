import { createContext, useContext, useState } from "react"

import { Quiz } from "../models/quiz"
import { getQuizById } from "../services/quiz-service"

interface QuizContextType {
    quiz: Quiz | null
    loadQuiz: (id: string) => Promise<string | undefined>
}

const QuizContext = createContext({} as QuizContextType)

export function useQuiz() {
    return useContext(QuizContext)
}

export function QuizProvider({ children }: any) {
    const [quiz, setQuiz] = useState<Quiz | null>(null)

    async function loadQuiz(id: string): Promise<string | undefined> {
        const response = await getQuizById(id)
        setQuiz(response)

        return response?._id
    }
    
    return (
        <QuizContext.Provider value={{ quiz, loadQuiz }}>
            {children}
        </QuizContext.Provider>
    )
}