import { Quiz } from "../models/quiz";
import { api } from "./api-service"

interface GetQuizByPinResponse {
    quiz?: Quiz
}

export async function getQuizByPin(pin: string): Promise<GetQuizByPinResponse> {
    try {
        const response = await api.get("quiz/" + pin)

        return { quiz: response.data }
    } catch (err) {
        return {}
    }
}