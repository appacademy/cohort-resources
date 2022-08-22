function Buttons({increment,reset, decrement}) {
    

    return (
        <>
        <button onClick={increment}>increment</button>
        <button onClick={reset}>reset</button>
        <button onClick={decrement}>decrement</button>
            
        </>
    )
}

export default Buttons;
