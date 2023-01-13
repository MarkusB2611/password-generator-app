import ArrowRight from "../../assets/icon-arrow-right"

const Button = ({children, disabled, onClick} : ButtonProps) => {
    return <button onClick={onClick} className="bg-neon-green text-dark-grey py-[1.125rem] sm:py-5 w-full font-jetbrainsmono flex justify-center items-center gap-4 border-2 box-border border-dark-grey enabled:hover:bg-dark-grey enabled:hover:text-neon-green enabled:hover:border-neon-green disabled:bg-grey disabled:cursor-not-allowed" disabled={disabled}><span>{children.toUpperCase()}</span><ArrowRight className="text-inherit" /></button>
}

type ButtonProps = {
    children: string
    disabled: boolean
    onClick: () => void
}

export default Button