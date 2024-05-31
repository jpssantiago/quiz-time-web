interface Props {
    tail?: any
}

export function PageHeader({ tail: Tail }: Props) {
    return (
        <div className={`flex ${Tail ? "justify-between" : "justify-center"} items-center h-12 w-full`}>
            <span 
                className="text-2xl text-text"
            ><strong>👋 Quiz</strong>Time</span>

            {Tail}
        </div>
    )
}