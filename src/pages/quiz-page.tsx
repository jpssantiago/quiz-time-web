import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { useQuiz } from "../hooks/quiz-context"
import { PageContainer } from "../components/page-container"
import { PageHeader } from "../components/page-header"
import { Score } from "../components/score"
import { PageLoadingContainer } from "../components/page-loading-container"
import { QuizPageBottom } from "../components/quiz-page-bottom"
import { QuizPageContent } from "../components/quiz-page-content"
import { FinishedQuizContainer } from "../components/finished-quiz-container"

export function QuizPage() {
    const { quiz, loadQuiz, currentQuestion } = useQuiz()
    const navigate = useNavigate()
    const { pin } = useParams()

    useEffect(() => {
        async function tryToLoadQuiz() {
            if (!pin) return navigate("/")

            if (!quiz) {
                const loaded = await loadQuiz(pin)
                if (!loaded) return navigate("/")
            }
        }

        tryToLoadQuiz()
    }, [])

    return (
        <PageContainer>
            <PageHeader tail={quiz && <Score />} />

            {!quiz && <PageLoadingContainer />}

            {quiz && !currentQuestion && <FinishedQuizContainer />}

            {quiz && currentQuestion && (
                <>
                    <QuizPageContent />

                    <QuizPageBottom />
                </>
            )}
        </PageContainer>
    )
}