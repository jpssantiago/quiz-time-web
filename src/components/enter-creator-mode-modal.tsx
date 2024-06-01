import { useState } from "react"
import { X } from "lucide-react"

import { Input } from "./input"
import { Button } from "./button"

interface Props {
    show: boolean
    onClose: () => void
}

export function EnterCreatorModeModal({ show, onClose }: Props) {
    const [password, setPassword] = useState<string>("")

    function handleOnSubmit(event: any) {
        event.preventDefault()

        alert(password)
    }

    if (!show) return (<div className="absolute" />)

    return (
        <>
            <div className="absolute top-0 left-0 flex items-center justify-center w-screen h-screen bg-black/60" onClick={onClose} />
            <form className="absolute left-[calc(50%-220px)] top-[calc(50%-171px)] max-w-[440px] w-full flex flex-col gap-5 p-5 bg-modal border border-stroke rounded-lg text-text phone:left-0" onSubmit={handleOnSubmit}>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                        <span className="text-lg font-bold">Enter the password you have chosen</span>
                        <button onClick={onClose} type="reset">
                            <X className="transition-all text-caption hover:text-text" />
                        </button>
                    </div>

                    <span>
                        You are going to enter the creator mode and will be able to
                        edit or delete this quiz.<br />
                        Only the users with this password can access the creator
                        mode.
                    </span>
                </div>

                <Input placeholder="Password" value={password} onChange={setPassword} />

                <Button>Enter the creator mode</Button>
            </form>
        </>
    )
}