import React, { useState } from 'react'
import arrowDown from "./images/icon-arrow-down.svg"
import arrowUp from "./images/Path 2.png"
import "./App.css";
interface Props {
    title:string
    info:string
}
export default function Questions({title,info}:Props) {
    const [showFaq,setShowFaq] = useState(false)
    function handleShowFaq() {
        setShowFaq(!showFaq)
      }
  return (
    <>
    <div className="faqs">
          <p id="faq-question">{title}</p>
          <span>
          <img src={!showFaq ? arrowDown : arrowUp} alt="arrow" onClick={handleShowFaq} />
          </span>
        </div>
        {showFaq && (
            <p id="about">{info}</p>
          )} 
           <div className='line'></div>
    </>
  )
}
