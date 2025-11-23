import React from 'react'
import { useGlobalContext } from './context'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';

const ThemeToToggle = () => {
    const {isDarkMode, toggleTheme} = useGlobalContext();
  return (
    <section className='toggle-container'>
        <button className="dark-toggle" onClick={toggleTheme}>
            {isDarkMode ? (<BsFillMoonFill className='toggle-icon'/>) : (<BsFillSunFill className='toggle-icon'/>)}
        </button>
    </section>
  )
}

export default ThemeToToggle