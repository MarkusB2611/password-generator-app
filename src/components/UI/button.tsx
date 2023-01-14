import ArrowRight from "../../assets/icon-arrow-right";

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-neon-green text-dark-grey py-[1.125rem] sm:py-5 w-full font-jetbrainsmono flex justify-center items-center gap-4 border-2 box-border border-dark-grey hover:bg-dark-grey hover:text-neon-green hover:border-neon-green"
    >
      <span>{children.toUpperCase()}</span>
      <ArrowRight className="text-inherit" />
    </button>
  );
};

type ButtonProps = {
  children: string;
  onClick: () => void;
};

export default Button;
