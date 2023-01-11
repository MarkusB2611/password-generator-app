import Button from "./UI/button"
import Slider from "./UI/slider"

const PasswordSettings = () => {
    return (
        <div className="w-full bg-dark-grey p-4">
            <Slider id='Character Length' />
            Include Uppercase Letters
            Include Lowercase Letters
            Include Numbers
            Include Symbols
            Strength
            <Button>Generate</Button>
        </div>
    )
}

export default PasswordSettings