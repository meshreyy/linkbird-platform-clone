import React from "react";

type ButtonProps = {
  text: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  style?: React.CSSProperties;
};

function Button({ text, onClick, style }: ButtonProps) {
  return (
    <button onClick={onClick} style={style}>
      {text}
    </button>
  );
}

export default Button;
