import { UseGlobalContext } from "./context";
import { BsFillMoonFill , BsFillSunFill } from "react-icons/bs";

const ThemeToggle = () => {

    const {isDarkTheme , toggleDarkTheme} = UseGlobalContext()
    return (
        <section className="toggle-container">
            <button onClick={toggleDarkTheme} className='dark-toggle'>
                {isDarkTheme ? (<BsFillMoonFill  className="toggle-icon"/>)
                : (<BsFillSunFill  className="toggle-icon" />)
            }
                
               
            </button>
        </section>
    );
};

export default ThemeToggle;