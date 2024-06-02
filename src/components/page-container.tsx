interface Props {
    children?: any
}

export function PageContainer({ children }: Props) {
    return (
        <div className="h-[100svh] flex justify-center items-center px-[160px] py-[80px] tablet:px-[80px] tablet:py-[40px] phone:px-[40px] phone:py-[40px]">
            <div className="max-w-[1120px] max-h-[864px] size-full flex flex-col gap-[60px]">
                {children}
            </div>
        </div>
    )
}