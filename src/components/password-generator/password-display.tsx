import copyIcon from '../../assets/icon-copy.svg'

const PasswordDisplay = ({password}: PasswordDisplayProps) => {
    const isPasswordNotEmpty = password !== ''

    return (
        <div className={`text-almost-white  px-4 py-4 bg-dark-grey w-full flex justify-between items-center text-heading-M`}>
            <span className={`${isPasswordNotEmpty ? '' : 'opacity-25'}`}>{isPasswordNotEmpty ? password : 'P4$5W0rD!'}</span>
            <button><img src={copyIcon} alt="" className='inline w-4 h-5'/></button>
        </div>
    )
}

type PasswordDisplayProps = {
    password: string
}

export default PasswordDisplay