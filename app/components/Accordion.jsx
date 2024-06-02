"use client"
import Image from "next/image";
import  { useState } from "react";

export default function Accordion({heading="Accoridon"}) {
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(prev => !prev)
  }
  return (
    
<div className="flex justify-center">

<div className="my-2" style={{  display: open ? "none" : 'block' }} onClick={handleOpen}>{ !open ? <Image src="/Polygon1.png" width={15} height={15} /> : <Image src="/Polygon2.png" width={15} height={15} /> }</div>
<div style={{ display: open ? "block" : 'none' }}> 
  <p>Dummy Information</p>
  <p>Dummy Information</p>
  <p>Dummy Information</p>
  <p>Dummy Information</p>
  <p>Dummy Information</p>
  <p>Dummy Information</p>
</div>
<div className="my-2" style={{  display: open ? "block" : 'none' }} onClick={handleOpen}>{ !open ? <Image src="/Polygon1.png" width={15} height={15} /> : <Image src="/Polygon2.png" width={15} height={15} /> }</div>


</div>


  )
}
