import IconCopy from "../../assets/icon-copy";

const PasswordDisplay = ({ password }: PasswordDisplayProps) => {
  const isPasswordNotEmpty = password !== "";

  return (
    <div
      className={`text-almost-white  px-4 py-4 bg-dark-grey w-full flex justify-between items-center text-heading-M`}
    >
      <span className={`${isPasswordNotEmpty ? "" : "opacity-25"}`}>
        {isPasswordNotEmpty ? password : "P4$5W0rD!"}
      </span>
      <IconCopy className="text-neon-green hover:text-almost-white" />
    </div>
  );
};

type PasswordDisplayProps = {
  password: string;
};

export default PasswordDisplay;
