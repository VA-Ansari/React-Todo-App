import React, { useState } from 'react'
import { useList } from './useList'

export default function Todo() {
    const {list, addTodo, removeTodo} = useList([])

    const [todo, setTodo] = useState("")
    console.log(todo);

    const onSubmitHandler = (e) => {
        e.preventDefault()
        todo==""?alert("Fill"): addTodo(todo)
        console.log(todo);
        setTodo("")
    }





  return (
    <>
    <div className='container'>
        <h1 style={{textAlign:'center', marginTop:'10px', color:'blue'}}>To-Do</h1>

        <form onSubmit={onSubmitHandler}>
            <div class="mb-3">
                <label for="emailInput" class="form-label">Enter To-Do Task</label>
                <input type="text" value={todo} class="form-control" onChange={(e)=>setTodo(e.target.value)} />
                
                <div id="emailHelp" class="form-text">Be Productive.</div>
            </div>
            
            <button type="submit" class="btn btn-primary">Add Task</button>
        </form>
    </div>

    <div className='container' style={{marginTop:"25px"}}>
        {
            list.map((val, ind)=>{
                return <div style={{display:'flex', width:'900px', justifyContent:'space-between'}}>

                    <h3 style={{marginBottom:'10px'}}>{val}</h3>
                    <button style={{marginBottom:'10px'}} onClick={()=>removeTodo(ind)} type="button" class="btn btn-danger btn-sm">Done</button>
            
                </div> 
            })
        }
    </div>
    
    </>
  )
}
