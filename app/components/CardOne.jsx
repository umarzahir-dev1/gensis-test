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
        <CardBox bg="#EEE1F0">
          <div className="flex flex-col justify-between  mh-[205px] h-[205px] w-[358px]">

          <CardHeader rn={2232} color={"#961A88"}  logo={<Image src={"/Logo_Cosmic.png"} width={100} height={100} />} />
          <div className="flex px-4 gap-x-2">
          {[54,65,76,98, 9].map(item =>  <Circle bg='#595857'>{item}</Circle>)}
          </div>
          <WinningPotRow/>
          <PalyRow bg={"#961A88"}/>
          </div>

          <Accordion />
        </CardBox>
  )
        
}

export async function getServerSideProps() {
  console.log("sdfsdfsf")
  const res = await fetch("https://testing-luckito-backend.rnssol.com/api/luckito/lottery/get-lottery?lotteryType=CLASSIC");
  const data = await res.json();
  debugger

  const lotteryData = data.data

  return {
    props: {
      lotteryData,
    },
  };
}
