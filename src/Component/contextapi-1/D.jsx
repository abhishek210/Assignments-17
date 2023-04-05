import { useContext } from "react"
import mycontext from "./store"
const D = () => {
    const res = useContext(mycontext);
  return (
    <div>
        <h1>comp D</h1>
        <h4>data comes from comp A : {res}</h4>
    </div>
  )
}

export default D