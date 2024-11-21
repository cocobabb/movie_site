import React from "react";

export default function LoginBtn({ onClick, children }) {
  return (
    <button
      className="loginBtn w-btn-outline w-btn-gray-outline"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
