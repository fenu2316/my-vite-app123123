import React, { useRef } from "react";

export default function Calculate(){
    let aref = useRef()
    let bref = useRef()
    let resultref= useRef()
    let Calc =(op)=>
    {
        let a = parseInt(aref.current.value)
        let b = parseInt(bref.current.value)
        switch(op){
            case "+":
                resultref.current.innerHTML="sum is" +(a+b)
                break;
            case "-":
                resultref.current.innerHTML="Difference is" +(a-b)
                break;
            case "*":
                resultref.current.innerHTML="Multiplication is" +(a*b)
                break;
            case "/":
                resultref.current.innerHTML="Division is" +(a/b)
                break;
        }
    }
    return(
        <div>
            <p>Enter a: <input type="text" ref={aref}/></p>
            <p>Enter b: <input type="text" ref={bref}/></p>

        <p>
            <input type="button" value="+" onClick={()=>Calc('+')}/>
            <input type="button" value="-" onClick={()=>Calc('-')}/>
            <input type="button" value="*" onClick={()=>Calc('*')}/>
            <input type="button" value="/" onClick={()=>Calc('/')}/>
        </p>
        <p ref={resultref}>

        </p>
        </div>
    )
}