import { createContext,useContext,useState } from "react";

//create the context
const ThemeContext= createContext()
console.log(ThemeContext)
//provider
const ThemeProvider=(props)=>{
    console.log(props)
    const[theme,setTheme] = useState('light')
    return(
        <ThemeContext.Provider value={{theme ,setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

//consumer
const useTheme= ()=>useContext(ThemeContext);

export  {ThemeProvider,useTheme};
