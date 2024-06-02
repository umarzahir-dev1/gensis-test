import React from "react";

export default function CardBox({bg, children}) {
  return (
    <div style={{ backgroundColor: bg }} className="flex flex-col justify-between bg-rose-400">
      {children}
    </div>
  )}
