//file componet bé nhất
//các cấp : index.js -> Usecontext -> Content
import { useContext } from 'react'
import { ThemeContext } from "./ThemeContext.js"
function Content() {
    const context = useContext(ThemeContext)
    console.log(context)
    return (
        <p className={context.theme}>Hello</p>
    )
}
export default Content