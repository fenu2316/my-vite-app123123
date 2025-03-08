import React,{useRef,useState} from "react";

export default function Task(){
    let taskref = useRef()
    let taskarray =[]
    const[taskui,settaskui]=useState()
    let Addtask=()=>
    {
        if(taskarray.findIndex((task)=>task.taskname==(taskref.current.value))>=0)
        {
            alert("TAsk already present")
            return
        }
        let task ={taskname:taskref.current.value,taskstatus:"incomplete"}

        taskarray.push(task)
        console.log(taskarray)
        taskref.current.value=""
        showtask()
    }
    let updateTask=(t)=>
    {
        let i = taskarray.findIndex((task)=>(task.taskname==t))
        if(i<0)
        {
            return
        }
        taskarray[i].taskstatus="Complete"
        showtask()
    }
    let showtask=()=>
    {
        let temparry = taskarray.map((t)=>{
            let colorname ="orange"
            if(t.taskstatus=="Complete")
            {
                colorname="yellowgreen"
            }
        
            return<tr style={{backgroundColor:colorname}}>
                <td>{t.taskname}</td>
                <td>{t.taskstatus}</td>
                <td><input type="button" value="Complete" onClick={()=>updateTask(t.taskname)}></input></td>
                <td><input type="button" value="Delete" onClick={()=>deletetask(t.taskname)}></input></td>
            </tr>
        })
        settaskui(temparry)
    }
    let deletetask =(taskname)=>
    {
        let index = taskarray.findIndex((t)=>t.taskname==taskname)
        taskarray.splice(index,1)
        showtask()
    }
    return(
        <div>
            <div>Enter Task: <input type="text" ref={taskref}></input>
            <input type="button" value="Add" onClick={()=>Addtask()}></input></div>

            <table>
                <thead>
                    <tr><th>TaskName</th>
                    <th>Taskstatus</th>
                    <th>Mark COmplete</th>
                    <th>Delete</th></tr>
                </thead>
                <tbody>
                    {taskui}
                </tbody>
            </table>
        </div>
    )
}
