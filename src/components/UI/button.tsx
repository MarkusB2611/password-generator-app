import arrow from '../../assets/icon-arrow-right.svg'

const Button = ({children} : ButtonProps) => {
    return <button className="bg-neon-green text-dark-grey py-[1.125rem] sm:py-5 w-full font-jetbrainsmono flex justify-center items-center gap-4"><span>{children.toUpperCase()}</span> <img className='inline' src={arrow} alt="" /></button>
}

type ButtonProps = {
    children: string
}

export default Button