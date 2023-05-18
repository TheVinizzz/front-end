import { ImSpinner8 } from "react-icons/im";

const ScreenLoading = () => {
    return (
        <div className="w-full h-screen bg-yellow-500 flex justify-center items-center text-5xl">
            <ImSpinner8 className="animate-spin text-white"/>
        </div>
    )
}

export default ScreenLoading