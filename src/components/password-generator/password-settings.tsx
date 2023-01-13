import React from "react";
import { Settings } from ".";
import Button from "../UI/button";
import Checkbox from "../UI/checkbox";
import Slider from "../UI/slider";
import PasswordStrength from "./password-strength";

const PasswordSettings = ({
  settings,
  changeSettings,
  generatePassword
}: PasswordSettingsProps) => {

  const calculatePasswordStrength = () => {
    if(!settings.useUppercase && !settings.useLowercase && !settings.useNumbers && !settings.useSymbols) return 0
    if(settings.length === 0) return 0;
    let score = 0;
    if(settings.length >= 1 && settings.length < 5) score +=1
    if(settings.length >= 5 && settings.length < 8) score +=2
    if(settings.length >= 8 && settings.length < 15) score +=3
    if(settings.length >= 15) score +=4
    if(settings.useUppercase) score +=1
    if(settings.useLowercase) score +=1
    if(settings.useNumbers) score +=1
    if(settings.useSymbols) score +=1
    return Math.floor(score/2)
  }

  return (
    <div className="w-full bg-dark-grey p-4 flex flex-col gap-8">
      <Slider
        id="Character Length"
        value={settings.length}
        setValue={changeSettings}
      />
      <div className="flex flex-col gap-4">
        <Checkbox
        id="useUppercase"
        label="Include Uppercase Letters"
        value={settings.useUppercase}
        setValue={changeSettings}
      />
      <Checkbox
        id="useLowercase"
        label="Include Lowercase Letters"
        value={settings.useLowercase}
        setValue={changeSettings}
      />
      <Checkbox
        id="useNumbers"
        label="Include Numbers"
        value={settings.useNumbers}
        setValue={changeSettings}
      />
      <Checkbox
        id="useSymbols"
        label="Include Symbols"
        value={settings.useSymbols}
        setValue={changeSettings}
      />
      </div>
      <PasswordStrength calculatedStrength={calculatePasswordStrength()} />
      
      <Button disabled={calculatePasswordStrength() === 0} onClick={generatePassword}>Generate</Button>
    </div>
  );
};

type PasswordSettingsProps = {
  settings: Settings;
  changeSettings: React.Dispatch<React.SetStateAction<Settings>>;
  generatePassword: () => void
};

export default PasswordSettings;
