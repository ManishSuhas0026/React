import { useState } from "react";

function Count(){
    let[count, setCount] = useState(0);
    const svj = () => {
        setCount(count = count + 1);
    }
    return(
        <>
        <h1>Count is {count}</h1>
        <button onClick={svj}>Increment count</button>
        <button onClick={()=>{setCount(count  = count - 1)}}>Decrement Count</button>
        <button onClick={()=>{setCount(0)}}>Reset</button>
        </>
    )
}

export default Count;