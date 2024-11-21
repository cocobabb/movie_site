import React from "react";

export default function LoginBtn({ onClick, children }) {
  return (
    <button className="loginBtn" onClick={onClick}>
      {children}
    </button>
  );
}
