import { FC } from "react"

const Button: FC<any> = ({children, className, onClick}) => {
    return (
        <button className={`${className} text-white font-bold py-2 rounded`} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button