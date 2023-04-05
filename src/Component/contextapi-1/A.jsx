import { useState } from "react"
import mycontext from "./store";
import B from "./B"

const A = () => {
    const [data,setdata] = useState("");
    const [inputdata,setinputdata] = useState("");
    const [inputdatac,setinputdatac] = useState("")

    const senddata=()=>{
        setinputdata(data);
    }
  return (
    <div>
        <h1>comp A :{inputdatac}</h1>
        <input type="text" onChange={(e)=>{setdata(e.target.value)}} />
        <button onClick={senddata}>send data from A to D</button>
        <mycontext.Provider value={[inputdata,setinputdatac]}>
        <B />
        </mycontext.Provider>
    </div>
  )
}

export default A