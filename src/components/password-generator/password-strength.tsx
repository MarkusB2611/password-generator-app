import Rectangle from "../UI/rectangle"

const PasswordStrength = ({calculatedStrength} :PasswordStrengthProps) => {

    const color = 'bg-red'
    const colors = {
        0: {color: 'transparent', text: ''},
        1: {color: 'bg-red', text: 'TOO WEAK!'},
        2: {color: 'bg-orange', text: 'WEAK'},
        3: {color: 'bg-yellow', text: 'MEDIUM'},
        4: {color: 'bg-neon-green', text: 'STRONG'}
    }
    const rectangles = []
    for(let i = 0; i < 4; i++) {
        rectangles.push(<div className={`h-7 w-[10px] 
        ${i >= calculatedStrength ? 'border-almost-white border-2' : ''}
        ${i < calculatedStrength ? colors[calculatedStrength].color : ''}
    `}></div>)
    }

    return (
        <div className="bg-very-dark-grey px-8 py-6 flex justify-between items-center">
            <span className="text-base text-grey">STRENGTH</span>
            <div className="flex gap-2 items-center">
                <span className="mr-2 text-body">{colors[calculatedStrength].text}</span>
                {rectangles}
            </div>
        </div>
    )
}

type PasswordStrengthProps = {
    calculatedStrength: number
}

export default PasswordStrength