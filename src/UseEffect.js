import Content from './UseEffectContent'
import { useState } from 'react'
function UseEffect() {
    const [show, setShow] = useState(true)
    return (
        <div>
            {//handle mounted & unmounted
            }
            <button onClick={() => setShow(!show)}> show</button>
            {show && <Content/>}
        </div>          
    )
}

export default UseEffect