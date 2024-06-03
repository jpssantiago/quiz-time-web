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
    const [pin, setPin] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)

    const navigate = useNavigate()
    const { loadQuiz } = useQuiz()

    async function handleOnSubmit(event: any) {
        event.preventDefault()

        if (loading) return

        if (pin.trim().length == 0) {
            return toast("Enter a valid pin to continue.")
        }

        setLoading(true)
        const loadedPin = await loadQuiz(pin) 
        setLoading(false)

        if (!loadedPin) {
            return toast("The pin you entered is invalid.")
        }

        navigate("/quiz/" + loadedPin)
    }

    return (
        <PageContainer>
            <PageHeader />

            <div className="size-full justify-center items-center flex flex-col gap-[60px]">
                <span className="text-2xl font-bold text-center text-text">Test your knowledge and make history 🏆</span>

                <form className="max-w-[400px] w-full flex flex-col gap-5" onSubmit={handleOnSubmit}>
                        <Input
                            placeholder="Enter the quiz pin"
                            value={pin}
                            onChange={setPin}
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