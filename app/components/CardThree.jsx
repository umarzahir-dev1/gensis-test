import React from "react";
import CardHeader from "./CardHeader";
import Circle from "./Circle";
import WinningPotRow from "./WinningPotRow";
import PalyRow from "./PalyRow";
import Image from "next/image";
import CardBox from "./CardBox";
import Accordion from "./Accordion";

export default function () {
  return (
        <CardBox bg="#E9EEF6">
          <div className="flex flex-col justify-between  mh-[205px] h-[205px] w-[358px]">

          <CardHeader color="#191978" logo={<Image src={"/Logo_Classic.png"} width={100} height={100} />} />
          <div className="flex px-4 gap-x-2">
          {[15, 23,30, 43, 61, 6].map(item =>  <Circle bg='#00AEB1'>{item}</Circle>)}
          </div>
          <WinningPotRow/>
          <PalyRow bg={"#191978"}/>
          </div>

          <Accordion />
        </CardBox>
  )
        
}
