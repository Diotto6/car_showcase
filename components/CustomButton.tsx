import { MouseEventHandler } from "react";

type Props = {
  title?: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit" | "reset";
};

export default function CustomButton({
  title,
  containerStyles,
  handleClick,
  btnType = "button",
}: Props) {
  return (
    <button
      disabled={false}
      type={btnType}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className="flex-1">{title}</span>
    </button>
  );
}
