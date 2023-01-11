const Button = ({children} : ButtonProps) => {
    return <button className="bg-neon-green text-dark-grey py-[1.125rem] sm:py-5 w-full font-jetbrainsmono">{children}</button>
}

type ButtonProps = {
    children: string
}

export default Button