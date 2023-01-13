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

  const generatePassword = () => {
    let charSet = ''
    if(settings.useUppercase) charSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if(settings.useLowercase) charSet += 'abcdefghijklmnopqrstuvwxyz'
    if(settings.useNumbers) charSet += '0123456789'
    if(settings.useSymbols) charSet += '!()-.?[]`~;@#$%^&*+='
    let password = ''
    for(let i = 0; i < settings.length; i++) {
      let char = charSet[Math.floor(Math.random()*charSet.length)]
      if(password.length === 0) {
        while(char === '.' || char === '-') {
          char = charSet[Math.floor(Math.random()*charSet.length)]
        }
      }
      console.log(Math.random()*charSet.length)
      password += char
    }
    setPassword(password)
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-4 gap-4">
      <h1 className="text-title text-center text-grey sm:text-heading-M">
        Password Generator
      </h1>
      <PasswordDisplay password={password} />
      <PasswordSettings settings={settings} changeSettings={setSettings} generatePassword={generatePassword} />
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
