import { createContext, useContext, useEffect, useState } from "react";


const AppContext = createContext();

const getInitialDarkMode = () =>{//checks the user's theme preference
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark').matches;//returns true or false based on if the user has dark mode enabled or not, respectively
    // console.log(prefersDarkMode);
    const storedDarkMode = localStorage.getItem('darkTheme');//retrieves the theme preference from the local storage
    if(storedDarkMode === null) return prefersDarkMode;//when there is no preference stored in local storage, return the user's system preference
    return storedDarkMode==='true';
}

export const AppProvider = ({ children }) =>{
    const [isDarkMode,setIsDarkMode] = useState(getInitialDarkMode());//invoked the func to set the initial theme preference
    const [searchTerm, setSearchTerm] = useState('cat');
    const toggleTheme = () =>{
        const newDarkMode = !isDarkMode;
        setIsDarkMode(newDarkMode)
        // const body = document.querySelector('body');
        // body.classList.toggle('dark-theme', newDarkMode);
        localStorage.setItem('darkTheme',newDarkMode);//stores the user's theme preference in the local storage
    }

    // running useEffect here to set the theme 
    useEffect(()=>{
        document.body.classList.toggle('dark-theme',isDarkMode);
    },[isDarkMode])

    return <AppContext.Provider value={{
        isDarkMode,
        toggleTheme,
        searchTerm,
        setSearchTerm
    }}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => useContext(AppContext);

export default AppProvider;
