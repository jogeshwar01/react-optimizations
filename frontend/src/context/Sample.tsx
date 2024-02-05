import { useState } from "react"

function App() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <Count count={count} setCount={setCount} />
        </div>
    )
}

function Count({count,setCount}: { count: number, setCount: React.Dispatch<React.SetStateAction<number>>}) {
    return (
        <div>
            <CountRenderer count={count} />
            <Buttons count={count} setCount={setCount} />
        </div>
    )
}

function CountRenderer({count}: { count: number}){
    return (
        <div>
            {count}
        </div>
    )
}

function Buttons({count,setCount} : { count: number, setCount: React.Dispatch<React.SetStateAction<number>>}){
    return (
        <div>
            <button onClick={ () => {
                setCount(count + 1)
            }}></button>
        </div>
    )
}

export default App