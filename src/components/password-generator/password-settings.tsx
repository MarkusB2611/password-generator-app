import React from "react";
import { Settings } from ".";
import Button from "../UI/button";
import Checkbox from "../UI/checkbox";
import Slider from "../UI/slider";
import PasswordStrength from "./password-strength";

const PasswordSettings = ({
  settings,
  changeSettings,
  generatePassword,
  calculatedPasswordStrength,
}: PasswordSettingsProps) => {
  return (
    <div className="w-full bg-dark-grey p-4 sm:p-8 flex flex-col gap-8">
      <Slider
        id="Character Length"
        value={settings.length}
        setValue={changeSettings}
      />
      <div className="flex flex-col gap-4 sm:gap-5">
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
      <PasswordStrength calculatedStrength={calculatedPasswordStrength} />

      <Button onClick={generatePassword}>Generate</Button>
    </div>
  );
};

type PasswordSettingsProps = {
  settings: Settings;
  changeSettings: React.Dispatch<React.SetStateAction<Settings>>;
  generatePassword: () => void;
  calculatedPasswordStrength: number;
};

export default PasswordSettings;
