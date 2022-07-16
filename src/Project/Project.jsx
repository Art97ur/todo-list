import { useReducer } from "react";
import { TodoFooter } from "../Components/TodoFooter/TodoFooter";
import { TodoForm } from "../Components/TodoForm/TodoForm";
import { TodoList } from "../Components/TodoList/TodoList";
import { reducer } from "../Reducer/Reducer";
import "./styles.css"
export const Project = () =>{
        const [todos, dispatch] = useReducer(reducer, [
            {
              id: Math.random(),
              text: "Learn JS",
              isCompleted: false
            },
            {
              id: Math.random(),
              text: "Learn CSS",
              isCompleted: false
            },
            {
              id: Math.random(),
              text: "Learn React",
              isCompleted: false
            }
          ]);
          
        
          return (
            <div className="wrapper">
              <header>
                  <h1 className="todoAppTitle">todos</h1>
                </header>
                
              <TodoForm onAdd={(text) => {
                dispatch({
                  type: 'add',
                  payload: {
                    text: text
                  }
                });
              }}/>
              <TodoList
                todos={todos} 
                onDelete={(todo) => {
                  dispatch({
                    type: "delete",
                    payload: {
                      id: todo.id
                    }
                  });
                }}
                onChange={(newTodo) => {
                  dispatch({
                    type: "update",
                    payload: {
                      updatedTodo: newTodo
                    }
                  });
                }}
              />
              <TodoFooter todos={todos} onClearCompleted={() => {
                dispatch({
                  type: "clear-completed"
                });
              }}/>

              
            </div>
          );
    
}