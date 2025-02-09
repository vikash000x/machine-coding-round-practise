
import React, { useState } from 'react'

import "./styles.css";

const Accordion = () => {

    const [clickedAccordian, setClickedAccordian] = useState(null);
    const data = [
        {header: "item 1",
            content : "defination 1"
        },
        {header: "item 2",
            content : "defination 2"
        },
        {header: "item 3",
            content : "defination 3"
        },
        {header: "item 4",
            content : "defination 4"
        },

    ]

    function handleClick(index){
        setClickedAccordian(index===clickedAccordian ? null : index);
    }

  return (
    <div  className = "container" >
{
     data && data.map((item, index) => (

        <div key={index} className="acontainer" >

        <div  onClick={()=>handleClick(index)} className="header" > {item.header}  </div>
      {
         clickedAccordian===index &&  (
            <div className="content" > {item.content} </div>
         )
      }
      </div>

     ) )
}


    </div>
  )
}

export default Accordion