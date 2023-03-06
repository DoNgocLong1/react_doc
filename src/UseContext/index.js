//file component lớn nhất
//các cấp : index.js -> Usecontext -> Content
import App from './UseContext'
import '../App.css'
import {ThemeContext} from './ThemeContext'
import {useContext} from 'react'
function UseContext() {
    const context = useContext(ThemeContext)
    return (
    
            <div style = {{padding: 20}}>
                <App 
                />
                <button onClick={context.toggleTheme}>toggle</button>
            </div>
         
    )
}
export default UseContext