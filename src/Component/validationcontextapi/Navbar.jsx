
import { useContext } from "react"
import { Mycontext } from "./store"
const Navbar = () => {
  const {setloggedin,admin} = useContext(Mycontext)
  return (
    <div className='navbar'>
        <div className="left"><h1>Geekster login</h1></div>
        <div className="right">
            <h1>Home</h1>
            <h1>About</h1>
            <h1>Services</h1>
            <button onClick={()=>{setloggedin(false)}} style={{background:"yellow",border:"none",width:"100px"}}>Logout</button>
        </div>
        <span style={{color:"green",fontSize:"20px"}}>{admin}</span>
    </div>
  )
}

export default Navbar