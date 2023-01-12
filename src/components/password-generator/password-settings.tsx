import React from "react";
import { Settings } from ".";
import Button from "../UI/button";
import Checkbox from "../UI/checkbox";
import Slider from "../UI/slider";

const PasswordSettings = ({
  settings,
  changeSettings,
}: PasswordSettingsProps) => {
  return (
    <div className="w-full bg-dark-grey p-4">
      <Slider
        id="Character Length"
        value={settings.length}
        setValue={changeSettings}
      />
      <div className="flex flex-col gap-4 mt-8 mb-8">
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
      
      <Button>Generate</Button>
    </div>
  );
};

type PasswordSettingsProps = {
  settings: Settings;
  changeSettings: React.Dispatch<React.SetStateAction<Settings>>;
};

export default PasswordSettings;
