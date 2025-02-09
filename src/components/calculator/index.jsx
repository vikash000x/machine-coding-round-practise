import React, { useState } from 'react'
import "./styles.css";
const  Calculator = () => {

const [input , setInput] = useState("");
const [result, setResult] = useState("");

const handleButton =(value) =>{
    setInput((prev)=>prev+value);
}

const clearInput = () =>{
    setInput("");
    setResult("");
}

const calcResult = ()=>{
    let num1  = "";
    let num2 = "";
    let operator = "";

    for(let i=0; i<input.length; i++){
        const ch = input[i];
       if(["+", "-", "*", "/"].includes(ch)){
        operator = ch;
       } else if(!operator){
        num1 += ch;
       } else {
        num2 += ch;
       }
    }

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    let res = 0;
    if(operator==='*') res = num1 * num2;
    if(operator==='-') res = num1 - num2;
    if(operator==='+') res = num1 + num2;
    if(operator==='/') res = num2!==0 ? num1/num2 : "Error";
    setResult("");
    setResult(res);
}


  return (
    <div classNamr= "container">
        <input 
        type ="text"
        value = {input}
        placeholder = "Enter your operation"
        readOnly
        className =  "input"
        />
        <div classNamr="result">result is : {result} </div>

        <div className="buttons-container">
            {[1,2,3,"+",4,5,6,"-",7,8,9,"*","/","C", "="].map((btn)=>(
             
<button key={btn} onClick={
    btn==="C"? clearInput :
    btn==="=" ? calcResult :
    () => handleButton(btn.toString())
}  className= {`calculator-button ${
    btn==="c" ? "clear" : btn === "=" ? "equal" : ""
} `}  > {btn}  </button>

            )) }
              </div>

   

    </div>
  )
}

export default  Calculator