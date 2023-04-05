import { useState } from "react"
import { useContext } from "react";
import D from "./D"
import mycontext from "./store";

const C = () => {
    const [inputdata,setinputdatac] = useContext(mycontext)
    const [datac,setdatac] = useState();
    const datasend = ()=>{
        setinputdatac(datac);
    }
  return (
    <div>
        <h1>comp C </h1>
        <input type="text" onChange={(e)=>{setdatac(e.target.value)}} />
        <button onClick={datasend}>send data from C to A</button>
        <D />
    </div>
  )
}

export default C