interface Props {
    onClick?: () => void
    variant?: "contained" | "outlined"

    children?: any
}

export function Button({ onClick, variant = "contained", children }: Props) {
    return (
        <button
            className={`
                border
                rounded-lg
                h-16
                w-full
                transition-all
                ${variant == "contained" ? 
                    "bg-dark-purple border-light-purple text-text hover:bg-light-purple" 
                    : 
                    "bg-transparent border-light-purple text-light-purple hover:bg-card"
                }
                font-bold
                text-base
            `}
            onClick={onClick}
            type="submit"
        >
            {children}
        </button>
    )
}