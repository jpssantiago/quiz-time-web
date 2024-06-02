import { Question } from "./question"

export interface Quiz {
    _id: string
    pin: string
    questions: Question[]
}