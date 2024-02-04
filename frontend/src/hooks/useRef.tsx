import { useEffect, useRef } from "react";

function App(){
    const divRef = useRef()

    useEffect(() => {
        setTimeout(() => {
            console.log(divRef.current)
            divRef.current.innerHTML = 10;
            console.log(divRef.current)
        },2000)
    },[])

    return (
        <div>
            <div ref={divRef}>
                hello
            </div>
        </div>
    ) 
}

export default App;
