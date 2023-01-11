import { useState } from "react"
import PasswordSettings from "../password-settings"
import PasswordDisplay from "./password-display"

const PasswordGenerator = () => {
    const [password, setPassword] = useState('')
    return (
        <div className="flex flex-col justify-center items-center min-h-screen px-4 gap-4">
            <h1 className="text-title text-center text-grey sm:text-heading-M">Password Generator</h1>
            <PasswordDisplay password={password}/>
            <PasswordSettings />
        </div>
    )
}

export default PasswordGenerator