import "./Button.css";

interface ButtonProps {
  id: string;
  onClick: () => void;
  text: string;
  className?: string;
  isDisabled: boolean;
}

const Button = ({ id, onClick, text, className, isDisabled }: ButtonProps) => {
  const compoundClass = `${className ? `button ${className}` : "button"}`;

  return (
    <button
      id={id}
      className={`${
        isDisabled ? `${compoundClass} button--disabled"` : compoundClass
      }`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};

export default Button;
