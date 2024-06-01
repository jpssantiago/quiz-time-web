import { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

import { useCreator } from "../hooks/creator-context"
import { PageContainer } from "../components/page-container"
import { PageHeader } from "../components/page-header"
import { CreatorActionsTail } from "../components/creator-actions-tail"

export function CreatorPage() {
    const { pin } = useParams()
    const navigate = useNavigate()

    const { isAuthenticated } = useCreator()

    useEffect(() => {
        if (!isAuthenticated) {
            return navigate(`/quiz/${pin}`)
        }
    }, [])

    return (
        <PageContainer>
            <PageHeader tail={<CreatorActionsTail />} />
        </PageContainer>
    )
}