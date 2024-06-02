import React from "react";

export default function Circle({bg, children }) {
  return (
    <div style={{ backgroundColor: bg }} className="flex items-center justify-start pl-2 w-[36px] h-[36px] rounded-full bg-blue-500">
      <span style={{ color: "white" }}>
      {children}
      </span>
    </div>
  );
}
