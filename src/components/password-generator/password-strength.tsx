const PasswordStrength = () => {
    return (
        <div className="bg-very-dark-grey px-8 py-6 flex justify-between items-center">
            <span className="text-base text-grey">STRENGTH</span>
            <div className="flex gap-2 items-center">
                <span className="mr-2 text-body">TOO WEAK!</span>
                <div className="h-7 w-[10px] border-almost-white border-2"></div>
                <div className="h-7 w-[10px] border-almost-white border-2"></div>
                <div className="h-7 w-[10px] border-almost-white border-2"></div>
                <div className="h-7 w-[10px] border-almost-white border-2"></div>
            </div>
        </div>
    )
}

export default PasswordStrength