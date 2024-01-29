import { useEffect, useState } from "react";

function App() {
    const [todos,setTodos] = useState([])
    
    useEffect(() => {
        setInterval(() => {
            fetch("https://sum-server.100xdevs.com/todos")
            .then(async(res) => {
                const json = await res.json();
                setTodos(json.todos);
            })
        },10000)
    },[]);

    return (
        <div>
            {todos.map((todo) => {
                    return <div> {todo.title} : {todo.description} </div>
                }
            )}
        </div>
    )
}

export default App;