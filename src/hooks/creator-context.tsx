import { createContext, useContext } from "react"
import { useCookies } from 'react-cookie'

import { authenticateWithPassword } from "../services/creator-service"

interface CreatorContextType {
    isAuthenticated: boolean
    authenticate: (pin: string, password: string) => Promise<boolean>
    signOut: () => void
} 

const CreatorContext = createContext({} as CreatorContextType)

export function useCreator() {
    return useContext(CreatorContext)
}

export function CreatorProvider({ children }: any) {
    const [cookies, setCookie, removeCookie] = useCookies(["quiztime-auth-token"])

    const isAuthenticated = !!cookies["quiztime-auth-token"]

    async function authenticate(pin: string, password: string): Promise<boolean> {
        const response = await authenticateWithPassword(pin, password)

        setCookie("quiztime-auth-token", response)

        return !!response
    }

    function signOut() {
        removeCookie("quiztime-auth-token")
    }

    return (
        <CreatorContext.Provider value={{ isAuthenticated, authenticate, signOut }}>
            {children}
        </CreatorContext.Provider>
    )
}