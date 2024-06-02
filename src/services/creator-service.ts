import { Quiz } from "../models/quiz"
import { api } from "./api-service"

interface AuthenticateWithPasswordResponse {
    token?: string
    quiz?: Quiz
}

interface GetQuizByTokenResponse {
    token?: string
    quiz?: Quiz
}

export async function authenticateWithPassword(pin: string, password: string): Promise<AuthenticateWithPasswordResponse> {
    try {
        const { data } = await api.post("/authenticate", { pin, password })
        return { token: data.token, quiz: data.quiz }
    } catch (err) {
        return {}
    }
}

export async function getQuizByToken(token: string): Promise<GetQuizByTokenResponse> {
    try {
        const { data } = await api.post("/creator", {}, { headers: { "Authorization": `Bearer ${token}` } })
        return { token: data.token, quiz: data.quiz }
    } catch (err) {
        return {}
    }
}