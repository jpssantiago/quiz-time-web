interface Props {
    onClick?: () => void
    variant?: "contained" | "outlined"

    height?: string
    children?: any
}

export function Button({ onClick, variant = "contained", height, children }: Props) {
    return (
        <button
            className={`
                border-2
                rounded-lg
                ${height ?? "h-16"}
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