import { useMemo, useState } from "react";


function App(){
    const [counter,setCounter] = useState(0)
    const [inputValue,setInputValue] = useState(1)
    // const [count,setCount] = useState(0)

    const count = useMemo(() => {
        let finalCount = 0;
        for(let i=0; i<=inputValue; i++){
            finalCount += i;
        }

        return finalCount
    },[inputValue])

    // useEffect(() => {
    //     let finalCount = 0;
    //     for(let i=0; i<=inputValue; i++){
    //         finalCount += i;
    //     }

    //     setCount(finalCount)
    // },[inputValue])

    return (
        <div>
            <input onChange={(e) => {
                setInputValue(parseInt(e.target.value))
            }}></input>

            <br/>

            Sum from 1 to {inputValue} is {count}

            <br/>

            <button onClick={() => {
                setCounter(counter + 1);
            }}>Counter ({counter})</button>

        </div>
    )
}

export default App;