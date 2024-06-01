import { createContext, useContext } from "react"

import { authenticateWithPassword } from "../services/creator-service"

interface CreatorContextType {
    authenticate: (pin: string, password: string) => Promise<boolean>
} 

const CreatorContext = createContext({} as CreatorContextType)

export function useCreator() {
    return useContext(CreatorContext)
}

export function CreatorProvider({ children }: any) {
    async function authenticate(pin: string, password: string): Promise<boolean> {
        const response = await authenticateWithPassword(pin, password)

        return !!response
    }

    return (
        <CreatorContext.Provider value={{ authenticate }}>
            {children}
        </CreatorContext.Provider>
    )
}