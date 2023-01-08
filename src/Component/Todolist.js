
import styles from './style.module.css'
import Todo from './Todo';
const Todolist=({todolist,setTodolist})=>{
    return(
        <div>
       
            {todolist.map((items,index)=>(
               <>
             
                <Todo todoitem={items}  todolist={todolist} setTodolist={setTodolist}></Todo>
                </>

            ) )}
           </div>

    );
}
export default Todolist;