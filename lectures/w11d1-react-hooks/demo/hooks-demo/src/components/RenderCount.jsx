import { useState, useEffect, useRef } from "react";

const RenderCount = () => {
    // const [count, setCount] = useState(1)
    const count = useRef(1)
    // count = {current: 1}

    useEffect(()=> {
        count.current = count.current + 1
    },[count])


    return(<>
        <h1>Total Renders: {count.current}</h1>
    </>)
}
export default RenderCount;