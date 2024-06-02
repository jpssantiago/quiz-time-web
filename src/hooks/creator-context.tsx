import { createContext, useContext, useState } from "react"
import { useCookies } from 'react-cookie'

import { Quiz } from "../models/quiz"
import { authenticateWithPassword, getQuizByToken } from "../services/creator-service"

interface CreatorContextType {
    hasToken: boolean
    authenticate: (pin: string, password: string) => Promise<boolean>
    signOut: () => void

    quiz?: Quiz
    loadQuizFromStoredToken: () => Promise<boolean>
} 

const CreatorContext = createContext({} as CreatorContextType)

export function useCreator() {
    return useContext(CreatorContext)
}

export function CreatorProvider({ children }: any) {
    const [cookies, setCookie, removeCookie] = useCookies(["quiztime-auth-token"])
    const [quiz, setQuiz] = useState<Quiz | undefined>()

    const hasToken = !!cookies["quiztime-auth-token"]

    async function authenticate(pin: string, password: string): Promise<boolean> {
        const response = await authenticateWithPassword(pin, password)

        setCookie("quiztime-auth-token", response.token, { path: "/" })
        setQuiz(response.quiz)

        return !!response
    }

    function signOut() {
        removeCookie("quiztime-auth-token", { path: "/" })
    }

    async function loadQuizFromStoredToken(): Promise<boolean> {
        const response = await getQuizByToken(cookies["quiztime-auth-token"])

        setCookie("quiztime-auth-token", response.token, { path: "/" })
        setQuiz(response.quiz)

        return !!response
    }

    return (
        <CreatorContext.Provider value={{ hasToken, authenticate, signOut, quiz, loadQuizFromStoredToken }}>
            {children}
        </CreatorContext.Provider>
    )
}