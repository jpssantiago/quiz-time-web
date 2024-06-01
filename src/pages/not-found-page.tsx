import { useNavigate } from "react-router-dom"

import { Button } from "../components/button"
import { PageContainer } from "../components/page-container"
import { PageHeader } from "../components/page-header"

export function NotFoundPage() {
    const navigate = useNavigate()

    return (
        <PageContainer>
            <PageHeader />

            <div className="flex flex-col items-center justify-center gap-10 text-center size-full text-text">
                <span className="font-bold text-9xl phone:text-7xl">404</span>
                
                <div className="max-w-[400px] w-full gap-3 flex flex-col">
                    <span className="text-lg">Oooops, this page does not exist.</span>
                    <Button onClick={() => navigate("/")}>Go back to home</Button>
                </div>
            </div>
        </PageContainer>
    )
}