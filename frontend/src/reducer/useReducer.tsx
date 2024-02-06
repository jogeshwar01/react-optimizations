import { useReducer } from "react"

function reducer(tasks: string[],action: { type: unknown; text: string }) {
    switch(action.type){
        case "added": {
            return [...tasks,action.text]
        }

        case "changed": {
            return [...tasks,action.text]
        }

        default: {
            return tasks
        }
    }
}

const initialTasks: string[] = [];

function App() {
    
    // const [tasks,setTasks] = useState([])
    const [tasks,dispatch] = useReducer(reducer,initialTasks)

    function addHello() {
        dispatch({
            type: "added",
            text: "hello"
        })
    }

    function addNo() {
        dispatch({
            type: "added",
            text: "no"
        })
    }

    return (
        <div>
            <button onClick={addHello}>Add hello</button>
            <button onClick={addNo}>Add no</button>

            {tasks.map((task: string) => {
                return <div>{task}</div>
            })}

        </div>
    )
}

export default App
