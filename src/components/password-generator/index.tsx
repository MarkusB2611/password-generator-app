import { useState } from "react";
import PasswordSettings from "./password-settings";
import PasswordDisplay from "./password-display";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [settings, setSettings] = useState<Settings>({
    length: 0,
    useUppercase: false,
    useLowercase: false,
    useNumbers: false,
    useSymbols: false,
  });
  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-4 gap-4">
      <h1 className="text-title text-center text-grey sm:text-heading-M">
        Password Generator
      </h1>
      <PasswordDisplay password={password} />
      <PasswordSettings settings={settings} changeSettings={setSettings} />
    </div>
  );
};

export type Settings = {
  length: number;
  useUppercase: boolean;
  useLowercase: boolean;
  useNumbers: boolean;
  useSymbols: boolean;
};

export default PasswordGenerator;
