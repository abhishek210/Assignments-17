import { createContext } from "react";
import { useState } from "react";
// import { useState } from "react";

const Mycontext = createContext();

const CustomProvider = ({children}) => {
    const [loggedin,setloggedin] = useState(false)
    const [admin,setadmin] = useState()
    // const data = "hello"
    return (
        <>
            <Mycontext.Provider value={{loggedin,setloggedin,admin,setadmin}}>
                {children}
            </Mycontext.Provider>
        </>
    );

}
export { Mycontext, CustomProvider };