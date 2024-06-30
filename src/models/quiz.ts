import { Question } from "./question"

export interface Quiz {
    id: string
    questions: Question[]
}