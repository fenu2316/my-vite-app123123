import React,{useSate} from "react";

export default function Valuewithsum1(){
    
    const [a,setA]=useSate("")
    const [babel,setB]=useState("")
    const [msg,setMsg]=useState(null)
    countCAlculatesum=()=>{
        const sum = Number(a)+Number(b)
        setMsg(sum {sum})
    };
    return(
        <div
    )
}