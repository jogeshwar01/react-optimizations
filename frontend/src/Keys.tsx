import { useState } from "react"

let counter = 4;

function App() {
    const [todos, setTodos] = useState([
        { id: 1, title: 'todo1', description: 'desc1'},
        { id: 2, title: 2, description: 2},
        { id: 3, title: 'todo3', description: 'desc3'},
    ])

    const handleOnClick = () => {
        setTodos([...todos, {id: counter++, title: Math.random(), description: Math.random()}])
    }

    return (
        <div>
            <button onClick={handleOnClick}>Add Todo</button>

            {todos.map(
                (todo) => {
                    return <Todo key={todo.id} title={todo.title} description={todo.description} />
                }
            )}
        </div>
    )
}

function Todo(props: {
    title: string | number,
    description: string | number
}) {
    return (
        <div>
            {props.title} : {props.description}
        </div>
    )
}

export default App