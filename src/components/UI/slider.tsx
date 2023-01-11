const Slider = ({id}: sliderProps) => {
    return (
        <div className="w-full">
            <div className="flex justify-between mb-2 ">
                <label htmlFor={id} className='text-base'>{id}</label>
                <span className="text-heading-M text-neon-green">10</span>
            </div>
            <input type="range" id={id} min={1} max={20} value={10} className='w-full form-range bg-red'/>
        </div>
    )
}

type sliderProps = {
    id: string
}
export default Slider