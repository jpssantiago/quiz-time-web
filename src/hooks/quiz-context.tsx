import { createContext, useContext, useState } from "react"

import { Quiz } from "../models/quiz"
import { GetQuizResponse } from "../responses/quiz-responses"
import { getQuiz } from "../services/quiz-service"
import { Question } from "../models/question"
import { Answer } from "../models/answer"

interface QuizContextType {
    quiz?: Quiz
    loadQuiz: () => Promise<GetQuizResponse>

    currentQuestion?: Question
    nextQuestion: () => boolean

    selectedAnswer?: Answer
    selectAnswer: (answer: Answer) => void

    score: number

    restartQuiz: () => void
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

    function shuffleAnswers(answers?: Answer[]) {
        if (!answers) return

        answers.sort(() => Math.random() - 0.5)
    }

    async function loadQuiz(): Promise<GetQuizResponse> {
        const response = await getQuiz()

        if (response.quiz) {
            setQuiz(response.quiz)
            shuffleAnswers(response.quiz.questions[0].answers)
            setCurrentQuestion(response.quiz.questions[0])
            setSelectedAnswer(undefined)
            setScore(0)
        }

        return response
    }

    function nextQuestion(): boolean {
        const length = quiz?.questions.length ?? 0
        const index = quiz?.questions.findIndex(q => q.id == currentQuestion?.id) ?? length

        setSelectedAnswer(undefined)

        if (index < length - 1) {
            shuffleAnswers(quiz?.questions[index + 1].answers)
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

    function restartQuiz() {
        shuffleAnswers(quiz?.questions[0].answers)
        setCurrentQuestion(quiz?.questions[0])
        setSelectedAnswer(undefined)
        setScore(0)
    }

    return (
        <QuizContext.Provider value={{ quiz, loadQuiz, currentQuestion, nextQuestion, selectedAnswer, selectAnswer, score, restartQuiz }}>
            {children}
        </QuizContext.Provider>
    )
}