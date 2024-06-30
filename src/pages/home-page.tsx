import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

import { PageContainer } from "../components/page-container"
import { PageHeader } from "../components/page-header"
import { Input } from "../components/input"
import { Button } from "../components/button"
import { useQuiz } from "../hooks/quiz-context"

export function HomePage() {
    const [name, setName] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)

    const navigate = useNavigate()
    const { loadQuiz } = useQuiz()

    async function handleOnSubmit(event: any) {
        event.preventDefault()

        if (loading) return

        setLoading(true)
        const response = await loadQuiz() 
        setLoading(false)

        if (response.err) {
            return toast("There was an error while loading the quiz. Try again later.")
        }

        navigate("/play")
    }

    return (
        <PageContainer>
            <PageHeader />

            <div className="flex flex-col justify-center items-center gap-[60px] size-full">
                <span className="font-bold text-2xl text-center text-text">Test your knowledge and make history 🏆</span>

                <form className="flex flex-col gap-5 w-full max-w-[400px]" onSubmit={handleOnSubmit}>
                        <Input
                            placeholder="Your name (optional 😁)"
                            value={name}
                            onChange={setName}
                        />

                        <Button variant="contained">{loading ? "Joining..." : "Join quiz"}</Button>
                    </form>
            </div>

            <ToastContainer
                pauseOnHover={false}
                theme="dark"
                toastStyle={{ color: "#D9D9D9" }}
                progressStyle={{ background: "#633BBC" }}
            />
        </PageContainer>
    )
}