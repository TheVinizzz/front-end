import { FC } from "react"
import { IInput } from "./interfaces"

const Input: FC<IInput> = ({label, error, field, props}) => {
    return (
        <div className="w-full px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                {label}
            </label>
            <input 
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${Boolean(error) && 'border-red-500'} rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                type="text"
                {...field}
                {...props} 
            />
            <p className="text-red-500 text-xs italic">{error}</p>
        </div>
    )
}

export default Input