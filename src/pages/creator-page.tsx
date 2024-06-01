import { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

import { useCreator } from "../hooks/creator-context"
import { PageContainer } from "../components/page-container"
import { PageHeader } from "../components/page-header"
import { CreatorActionsTail } from "../components/creator-actions-tail"
import { PageLoadingContainer } from "../components/page-loading-container"

export function CreatorPage() {
    const { pin } = useParams()
    const navigate = useNavigate()

    const { hasToken, quiz, loadQuizFromStoredToken } = useCreator()

    useEffect(() => {
        async function load() {
            if (!hasToken) {
                return navigate(`/quiz/${pin}`)
            }

            if (!quiz) {
                const hasQuiz = await loadQuizFromStoredToken()
                if (!hasQuiz) {
                    console.log("dsaads")
                    return navigate(`/quiz/${pin}`)
                }
            }
        }
        
        load()
    }, [])

    return (
        <PageContainer>
            <PageHeader tail={<CreatorActionsTail />} />

            {!quiz && <PageLoadingContainer />}
        </PageContainer>
    )
}