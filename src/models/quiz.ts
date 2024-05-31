import { Question } from "./question"

export interface Quiz {
    _id: string
    questions: Question[]
}