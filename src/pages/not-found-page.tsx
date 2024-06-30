import { useNavigate } from "react-router-dom"

import { Button } from "../components/button"
import { PageContainer } from "../components/page-container"
import { PageHeader } from "../components/page-header"

export function NotFoundPage() {
    const navigate = useNavigate()

    return (
        <PageContainer>
            <PageHeader />

            <div className="flex flex-col justify-center items-center gap-10 text-center text-text size-full">
                <span className="font-bold text-9xl phone:text-7xl">404</span>
                
                <div className="flex flex-col gap-3 w-full max-w-[400px]">
                    <span className="text-lg">Oooops, this page does not exist.</span>
                    <Button onClick={() => navigate("/")}>Go back to home</Button>
                </div>
            </div>
        </PageContainer>
    )
}