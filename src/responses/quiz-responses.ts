import { Quiz } from "../models/quiz"

export type GetQuizResponse = {
    quiz?: Quiz
    err?: string
}