import { useRef, useState, useEffect} from 'react'
function UseRef() {
    const [count, setCount] = useState(60);
    const timerId = useRef();
    const prevCount = useRef();
    useEffect(() => {
      prevCount.current = count;
    }, [count]);
    const handleStart = () => {
      console.log(timerId.current > 0)
      if (timerId.current > 0) {
      } else {
        timerId.current = setInterval(() => {
          setCount((prevCount) => prevCount - 1);
        }, 1000);
        console.log(timerId.current)
      }
    };
    const handleStop = () => {
      clearInterval(timerId.current);
      timerId.current = -1;
    };
    console.log(count, prevCount.current);
    return (
      <div style={{ padding: "20px" }}>
        <h1>{count}</h1>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
      </div>
    );
}
export default UseRef