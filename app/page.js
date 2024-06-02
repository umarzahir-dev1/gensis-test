import Image from "next/image";
import CardOne from "./components/CardOne";
import Accordion from "./components/Accordion";
import CardTwo from "./components/CardTwo";
import CardThree from "./components/CardThree";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     
     {/* <Accordion /> */}
     <CardOne />
     <CardThree />
     <CardTwo />

      
    </main>
  );
}
