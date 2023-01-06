import { createContext, useState } from "react";


export const Context=createContext();


const ThemeChangeProvider=({children})=>{
const [theme,setTheme]=useState("light")

const data={
    theme,
    setTheme
}

    return(
        <Context.Provider value={data}>{children}</Context.Provider>

    );
}

export default ThemeChangeProvider