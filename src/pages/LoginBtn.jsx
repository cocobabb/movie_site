import React from "react";

export default function LoginBtn({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}
