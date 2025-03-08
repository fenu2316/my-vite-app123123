import React from "react";

export default function Workingwithevent(){
    let showmsg = ()=>
    {
        alert("hello world")
    }
    return(
        <>
        <div>Workingwithevent</div>
        <input type="button" value="Click here" onClick={()=>showmsg()}/>
        </>
    )
}