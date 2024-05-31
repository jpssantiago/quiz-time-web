import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

import { PageContainer } from "../components/page-container"
import { PageHeader } from "../components/page-header"
import { Input } from "../components/input"
import { Button } from "../components/button"
import { Divider } from "../components/divider"

export function HomePage() {
    const [pin, setPin] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)

    const navigate = useNavigate()

    async function handleOnSubmit(event: any) {
        event.preventDefault()

        if (pin.trim().length == 0) {
            toast("Enter a valid pin to continue.")
            return
        }

        setLoading(true)
        await new Promise(resolve => setTimeout(() => resolve(true), 750))
        setLoading(false)
    }

    return (
        <PageContainer>
            <PageHeader />

            <div className="size-full justify-center items-center flex flex-col gap-[60px]">
                <span className="text-2xl text-text font-bold text-center">Test your knowledge and make history 🏆</span>

                <div className="flex flex-col gap-5 phone:max-w-[400px] phone:w-full">
                    <form className="w-[400px] flex flex-col gap-5 phone:w-full" onSubmit={handleOnSubmit}>
                        <Input
                            placeholder="Enter the quiz pin"
                            value={pin}
                            onChange={setPin}
                        />

                        <Button variant="contained">{loading ? "Joining..." : "Join quiz"}</Button>
                    </form>

                    <Divider showOrText={true} />

                    <div className="w-[400px] phone:w-full">
                        <Button
                            onClick={() => navigate("/quiz")} 
                            variant="outlined"
                        >Create a new quiz</Button>
                    </div>
                </div>
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