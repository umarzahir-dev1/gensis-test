import Image from "next/image";
import React from "react";

export default function PalyRow({bg}) {
  return (
    <div style={{ backgroundColor: bg}} className="px-4 text-white py-1 items-center justify-between flex flex-row">
      <div className="flex gap-x-1 items-center">

    <div className="flex flex-col items-center">
      <div className="pr-2">
        <p className="mb-0">Next</p>
        <p >Draw</p>
      </div>
    </div>
    <Image src="/clock.png" width={15}  height={15} />
      <p className="pl-2">23s02131</p>
      </div>
      <button className="py-[3px] text-black px-[24px] bg-white" style={{ borderRadius: "4px" }}>play</button>
</div>
  )
}
