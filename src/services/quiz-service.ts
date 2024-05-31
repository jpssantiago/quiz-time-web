import { Quiz } from "../models/quiz";
import { api } from "./api-service"

export async function getQuizById(id: string): Promise<Quiz | null> {
    try {
        const response = await api.get("quiz/" + id)

        return response.data as Quiz
    } catch (err) {
        return null
    }
}