import React from "react";
import { Settings } from "../password-generator";

const Slider = ({ id, value, setValue }: sliderProps) => {
  const handleSliderValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const percent = (parseInt(e.target.value) / parseInt(e.target.max)) * 100;
    e.target.style.setProperty("--percent", `${percent.toFixed(2)}%`);

    setValue((prev) => ({ ...prev, length: parseInt(e.target.value) }));
  };

  return (
    <div className="w-full">
      <div className="flex justify-between mb-2 sm:mb-4">
        <label htmlFor={id} className="text-base sm:text-body">
          {id}
        </label>
        <span className="text-heading-M sm:text-heading-L text-neon-green">
          {value}
        </span>
      </div>
      <input
        type="range"
        id={id}
        min={0}
        max={20}
        value={value}
        className="w-full slider"
        onChange={handleSliderValueChange}
      />
    </div>
  );
};

type sliderProps = {
  id: string;
  value: number;
  setValue: React.Dispatch<React.SetStateAction<Settings>>;
};
export default Slider;
