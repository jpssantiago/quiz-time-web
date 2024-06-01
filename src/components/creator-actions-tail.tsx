import { Trash2 } from "lucide-react"
import { useNavigate, useParams } from "react-router-dom"

import { useCreator } from "../hooks/creator-context"
import { Button } from "./button"

export function CreatorActionsTail() {
    const { signOut } = useCreator()
    const navigate = useNavigate()
    const { pin } = useParams()

    function handleLeaveCreatorMode() {
        signOut()
        navigate(`/quiz/${pin}`)
    }

    function handleDelete() {
        alert("delete")
    }

    return (
        <div className="flex h-12 gap-5">
            <div className="w-[205px] h-full">
                <Button 
                    variant="outlined" 
                    height="h-12"
                    onClick={handleLeaveCreatorMode}
                >Leave creator mode</Button>
            </div>

            <div 
                className="flex items-center justify-center transition-all border-2 rounded-lg cursor-pointer size-12 border-danger hover:bg-card"
                onClick={handleDelete}
            >
                <Trash2 size={24} className="text-danger" />
            </div>
        </div>
    )
}