// import A from "./Component/contextapi-1/A";
import { useContext } from "react";
import { Mycontext } from "./Component/validationcontextapi/store";
import Navbar from "./Component/validationcontextapi/Navbar";
import Home from "./Component/validationcontextapi/Home";
import Login from "./Component/validationcontextapi/Login";
function App() {
  const {loggedin}=useContext(Mycontext)
  // console.log(loggedin)
  return (
    <>
     {loggedin ? <div> <Navbar/><Home /></div> :<Login /> }
    </>
     
    
  );
}

export default App;
