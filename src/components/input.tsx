interface Props {
    placeholder: string
    value: string
    onChange: (value: string) => void

    type?: string
}

export function Input({ placeholder, value, onChange, type = "text" }: Props) {
    return (
        <input
            className="w-full h-16 p-3 text-center transition-all border rounded-lg outline-none  bg-card text-text placeholder:text-caption border-stroke focus:border-dark-purple"
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            type={type}
        />
    )
}