import { useState } from "react";
import PasswordSettings from "./password-settings";
import PasswordDisplay from "./password-display";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [settings, setSettings] = useState<Settings>({
    length: 15,
    useUppercase: true,
    useLowercase: true,
    useNumbers: true,
    useSymbols: true,
  });

  const calculatePasswordStrength = () => {
    if (password === "") return 0;
    const hasUppercase = "(?=.*[A-Z])";
    const hasLowercase = "(?=.*[a-z])";
    const hasNumbers = "(?=.*[0-9])";
    const hasSymbols = "(?=.*[^A-Za-z0-9])";
    const hasLength = (length: number) => {
      return `(?=.{${length},})`;
    };
    if (
      //length >= 15 and include all possibilities
      password.match(
        hasUppercase + hasLowercase + hasNumbers + hasSymbols + hasLength(15)
      )
    ) {
      return 4;
    } else if (
      password.match(
        hasUppercase + hasLowercase + hasNumbers + hasSymbols + hasLength(8)
      ) ||
      password.match(
        hasUppercase + hasLowercase + hasNumbers + hasLength(15)
      ) ||
      password.match(
        hasUppercase + hasLowercase + hasSymbols + hasLength(15)
      ) ||
      password.match(hasUppercase + hasNumbers + hasSymbols + hasLength(15)) ||
      password.match(hasLowercase + hasNumbers + hasSymbols + hasLength(15))
    ) {
      return 3;
    } else if (
      password.match(
        hasUppercase + hasLowercase + hasNumbers + hasSymbols + hasLength(5)
      ) ||
      password.match(hasUppercase + hasLowercase + hasNumbers + hasLength(8)) ||
      password.match(hasUppercase + hasLowercase + hasSymbols + hasLength(8)) ||
      password.match(hasUppercase + hasNumbers + hasSymbols + hasLength(8)) ||
      password.match(hasLowercase + hasNumbers + hasSymbols + hasLength(8)) ||
      password.match(hasUppercase + hasLowercase + hasLength(15)) ||
      password.match(hasUppercase + hasNumbers) + hasLength(15) ||
      password.match(hasUppercase + hasSymbols + hasLength(15)) ||
      password.match(hasLowercase + hasNumbers + hasLength(15)) ||
      password.match(hasLowercase + hasSymbols + hasLength(15)) ||
      password.match(hasNumbers + hasSymbols + hasLength(15))
    ) {
      return 2;
    }

    return 1;
  };

  const generatePassword = () => {
    let charSet = "";
    if (settings.useUppercase) charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (settings.useLowercase) charSet += "abcdefghijklmnopqrstuvwxyz";
    if (settings.useNumbers) charSet += "0123456789";
    if (settings.useSymbols) charSet += "!()-.?[]`~;@#$%^&*+=";
    let password = "";
    for (let i = 0; i < settings.length; i++) {
      let char = charSet[Math.floor(Math.random() * charSet.length)];
      if (password.length === 0) {
        while (char === "." || char === "-") {
          char = charSet[Math.floor(Math.random() * charSet.length)];
        }
      }
      console.log(Math.random() * charSet.length);
      password += char;
    }
    setPassword(password);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-4 gap-4">
      <h1 className="text-title text-center text-grey sm:text-heading-M">
        Password Generator
      </h1>
      <PasswordDisplay password={password} />
      <PasswordSettings
        settings={settings}
        changeSettings={setSettings}
        generatePassword={generatePassword}
        calculatedPasswordStrength={calculatePasswordStrength()}
      />
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
