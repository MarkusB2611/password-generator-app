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
      <Checkbox id="useUppercase" label="Include Uppercase Letters" />
      <Checkbox id="useLowercase" label="Include Lowercase Letters" />
      Include Uppercase Letters Include Lowercase Letters Include Numbers
      Include Symbols Strength
      <Button>Generate</Button>
    </div>
  );
};

type PasswordSettingsProps = {
  settings: Settings;
  changeSettings: React.Dispatch<React.SetStateAction<Settings>>;
};

export default PasswordSettings;
