import Image from "next/image";
import React from "react";

export default function CardHeader({color,bg,logo,rn}) {
  return (
    <div style={{ backgroundColor: bg }} className="px-4 pt-2 justify-between items-center flex flex-row">
      <div className="flex"> 
        {logo}
        <p className="pl-3 pt-1" style={{color:  color, fontWeight: 500, fontSize: "14px" }}>No. {rn}</p>
      </div>
      <Image src="/zoom.png" width={15} height={15} />
  </div>
  )
}
