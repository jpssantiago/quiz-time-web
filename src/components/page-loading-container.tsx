import ReactLoading from "react-loading"

export function PageLoadingContainer() {
    return (
        <div className="flex items-center justify-center size-full">
            <ReactLoading type="bars" color="#633BBC" width={100} />
        </div>
    )
}