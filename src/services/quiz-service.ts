import { Quiz } from "../models/quiz";
import { api } from "./api-service"

export async function getQuizByPin(pin: string): Promise<Quiz | undefined> {
    try {
        const response = await api.get("quiz/" + pin)

        return response.data
    } catch (err) {
        return undefined
    }
}