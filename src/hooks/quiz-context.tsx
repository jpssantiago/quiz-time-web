import { createContext, useContext, useState } from "react"

import { Quiz } from "../models/quiz"
import { getQuizByPin } from "../services/quiz-service"
import { Question } from "../models/question"
import { Answer } from "../models/answer"

interface QuizContextType {
    quiz?: Quiz
    loadQuiz: (pin: string) => Promise<string | undefined>

    currentQuestion?: Question
    nextQuestion: () => boolean

    selectedAnswer?: Answer
    selectAnswer: (answer: Answer) => void

    score: number
}

const QuizContext = createContext({} as QuizContextType)

export function useQuiz() {
    return useContext(QuizContext)
}

export function QuizProvider({ children }: any) {
    const [quiz, setQuiz] = useState<Quiz | undefined>(undefined)
    const [currentQuestion, setCurrentQuestion] = useState<Question | undefined>(undefined)
    const [selectedAnswer, setSelectedAnswer] = useState<Answer | undefined>(undefined)
    const [score, setScore] = useState<number>(0)

    async function loadQuiz(pin: string): Promise<string | undefined> {
        const response = await getQuizByPin(pin)
        setQuiz(response.quiz)
        setCurrentQuestion(response.quiz?.questions[0])
        setSelectedAnswer(undefined)
        setScore(0)

        return response.quiz?.pin
    }

    function nextQuestion(): boolean {
        const length = quiz?.questions.length ?? 0
        const index = quiz?.questions.findIndex(q => q.id == currentQuestion?.id) ?? length

        setSelectedAnswer(undefined)

        if (index < length - 1) {
            setCurrentQuestion(quiz?.questions[index + 1])
            return true
        }
        
        setCurrentQuestion(undefined)
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