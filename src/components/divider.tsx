interface Props {
    showOrText?: boolean
}

export function Divider({ showOrText = true }: Props) {
    return (
        <div className="flex gap-5 items-center">
            <div className="w-full h-[1px] bg-caption rounded-full" />
            {showOrText && <span className="text-caption font-bold text-sm">or</span>}
            {showOrText && <div className="w-full h-[1px] bg-caption rounded-full" />}
        </div>
    )
}