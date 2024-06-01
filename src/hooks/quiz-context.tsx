import { createContext, useContext, useState } from "react"

import { Quiz } from "../models/quiz"
import { getQuizById } from "../services/quiz-service"
import { Question } from "../models/question"
import { Answer } from "../models/answer"

interface QuizContextType {
    quiz: Quiz | null
    loadQuiz: (id: string) => Promise<string | undefined>

    currentQuestion: Question | null
    nextQuestion: () => boolean

    selectedAnswer: Answer | null
    selectAnswer: (answer: Answer) => void

    score: number
}

const QuizContext = createContext({} as QuizContextType)

export function useQuiz() {
    return useContext(QuizContext)
}

export function QuizProvider({ children }: any) {
    const [quiz, setQuiz] = useState<Quiz | null>(null)
    const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null)
    const [selectedAnswer, setSelectedAnswer] = useState<Answer | null>(null)
    const [score, setScore] = useState<number>(0)

    async function loadQuiz(id: string): Promise<string | undefined> {
        const response = await getQuizById(id)
        setQuiz(response)
        setCurrentQuestion(response?.questions[0] ?? null)

        return response?._id
    }

    function nextQuestion(): boolean {
        const length = quiz?.questions.length ?? 0
        const index = quiz?.questions.findIndex(q => q.id == currentQuestion?.id) ?? length

        setSelectedAnswer(null)

        if (index < length - 1) {
            setCurrentQuestion(quiz?.questions[index + 1] ?? null)
            return true
        }
        
        setCurrentQuestion(null)
        return false
    } 

    function selectAnswer(answer: Answer) {
        setSelectedAnswer(answer)

        if (answer.id == currentQuestion?.correctAnswer) {
            setScore(score + 1)
        }
    }
    
    return (
        <QuizContext.Provider value={{ quiz, loadQuiz, currentQuestion, nextQuestion, selectedAnswer, selectAnswer, score }}>
            {children}
        </QuizContext.Provider>
    )
}