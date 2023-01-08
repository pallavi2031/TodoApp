
import { useState } from 'react';
import styles from './style.module.css'
import Todo from './Todo';
import Todolist from './Todolist';
export default function Header(){

    const[item,setItem]=useState("");
    const[todolist,setTodolist]=useState([]);
    const eventhandle=(event)=>{
       setItem( event.target.value);
      
    }
    const saveitem=(event)=>{
        let itemlist=todolist;
        itemlist.push(item);
        setTodolist(itemlist);
      
        setItem("");

    }
    return(
        <>
       
        <div className={styles.element}>
        <div className={styles.header}>
            Todo App
        </div>
         <input type="text"   placeholder='Add Todo Items' className={styles.inputs} value={item} onChange={eventhandle}/>
         <button type='submit' className={styles.buttons} onClick={saveitem}>Add</button>

         {/* {todolist.map((val,index)=>(
            <h3 key={index} className={styles.list}>{val}</h3>

         ))} */}
        
       
        </div>
        <Todolist  setTodolist ={setTodolist} todolist={todolist}/>
        </>
      

    );
}