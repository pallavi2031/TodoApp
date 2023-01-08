import { useState } from 'react'
import styles from './style.module.css'

export default function Todo({todoitem,todolist,setTodolist}){
  

    const eventhandle=()=>{
       setTodolist (todolist.filter((listitem)=>( listitem!==todoitem)));


    }
    return(
        <div>
        <h3 className={styles.todoitem} >{todoitem}</h3>
        <button type="submit" className={styles.btn} onClick={eventhandle}>Done </button>

        </div>
    );
}