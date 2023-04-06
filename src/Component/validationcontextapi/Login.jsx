
import { useContext } from "react"
import { Mycontext } from "./store"
import { useState } from "react"
const Login = () => {
  const {setloggedin,setadmin} = useContext(Mycontext)
  const [data,setdata] = useState()
  const [password,setpass] = useState()
  const loginid = ()=>{
    if((data==="abhishek" && password==="abhi@123")||(data==="admin" && password==="admin@123")){
      setloggedin(true)
      setadmin(data);
    }
    else
    {
      alert("please type valid credintial")
    }
  }
  // console.log(setloggedin)
  return (
    <div className='login'>
        <div><h1>Geekster Login</h1></div>
        <br />
        <div>
            <input type="text" placeholder='User name' onChange={(e)=>{setdata(e.target.value)}}/>
        </div>
        <br />
        <div>
            <input type="text" placeholder='Password' onChange={(e)=>{(setpass(e.target.value))}} />
        </div>
        <br />
        <div>
            <button onClick={loginid}>Login</button>
        </div>
    </div>
  )
}

export default Login