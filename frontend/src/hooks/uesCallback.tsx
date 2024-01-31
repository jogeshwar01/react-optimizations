import { memo, useCallback, useState } from "react";

function App() {
    const [count,setCount] = useState(0)

    const test = useCallback(() => {
        console.log('hi there')
    },[])

    // function test(){
    //     console.log('hi there')
    // }

    return (
        <div>
            <button onClick={() =>{
                    setCount(count + 1)
                }
            }>Count ({count})</button>

            <Comp test={test} />
        </div>
    )
}

const Comp = memo(function({test}) {
    console.log('re render')
    return (
        <div>
            hello
        </div>
    )
})

export default App;