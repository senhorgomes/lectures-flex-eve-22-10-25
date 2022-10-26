import {useState} from 'react'

function Counter() {
    const [state, setState] = useState(0)
    //state is a variable, setState is a function with the sole purpose of updating state.
    //cant i just modify it directly?
    //We always want to invoke prev inside of setState to grab the previous state.
    return( 
        <div className="header">
            <p>Counter: {state}</p>
            <button onClick={()=>setState((prev)=>prev + 1)}> Click Me!</button>
        </div>
    );
}

export default Counter;