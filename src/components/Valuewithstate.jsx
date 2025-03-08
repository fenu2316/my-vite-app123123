import React, {useState} from "react"

export default function Valuewithstate(){
    const [n,setn] =useState(0)
    const [name,setname]=useState("")
    const [cname,setcname]=useState("yellow")

    return(
        <div style={{backgroundColor:cname,height:"100dvh"}}>
            <div><input type="color" onChange={(e)=>setname(e.target.value)}/></div>
            <div>Enter name: <input type="text" onBlur={(e)=>setname(e.target.value)}/></div>
            <div>Wellcome {name}</div>
            <div>Enter any no :
                <input type="text" onChange={(e)=>setn(parseInt(e.target.value))}/>
            </div>
            <div className='text-2xl'>square of {n} is{n*n}</div>
        </div>
    )
}