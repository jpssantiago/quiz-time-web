import { GetQuizResponse } from "../responses/quiz-responses"

export async function getQuiz(): Promise<GetQuizResponse> {
    try {
        const response = await fetch("https://bucket.joaosantiago.com.br/quiz-time.json")
        const data = await response.json()

        if (data.quiz) {
            return { quiz: data.quiz }
        }

        return { err: "no-quiz" }
    } catch (err) {
        return { err: "bucket-not-available" }
    }
}