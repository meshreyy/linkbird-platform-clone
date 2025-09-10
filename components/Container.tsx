import React from "react";

type ContainerProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

export default function Container({ children, style }: ContainerProps) {
  return (
    <div
      style={{
        border: "2px solid white",
        padding: "20px",
        ...style, // merge any additional styles passed
      }}
    >
      {children}
    </div>
  );
}
