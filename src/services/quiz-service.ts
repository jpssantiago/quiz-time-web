import { Quiz } from "../models/quiz";
import { api } from "./api-service"

export async function getQuizByPin(pin: string): Promise<Quiz | null> {
    try {
        const response = await api.get("quiz/" + pin)

        return response.data as Quiz
    } catch (err) {
        return null
    }
}