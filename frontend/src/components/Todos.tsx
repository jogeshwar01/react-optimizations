
/* todos = [
   {
    title: "go to gym",
    description: "go to gym",
   } 
   ]
*/

import { TodoType } from "../types"

export function Todos({todos}) {

    return <div>
        {todos.map(function(todo: TodoType) {
            return <div>
                <h2>{todo.title}</h2>
                <h3>{todo.description}</h3>
                <button>{todo.completed == true ? "Completed" : "Mark as Complete"}</button>
            </div>
        })}
    </div>
}