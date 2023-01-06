import { useContext } from "react";
import { Context } from "./context/ThemeContext";


export const SwitchTheme=()=>{
const {theme,setTheme}=useContext(Context)

    return(
        <><br/>
        change theme={theme}
        <button onClick={()=>setTheme(theme==="light" ? "dark" : "light")}>Change</button>
        </>
    );
}