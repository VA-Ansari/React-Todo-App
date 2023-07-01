import React, { useState } from 'react'

export const useList = () => {
    const [list, setList] = useState([]);

    const addTodo = (value) => {
        const newList = list.concat(value)

        setList(newList)
    }

    const removeTodo = (index) => {
        const newList = list.filter((val, ind)=>{
            return ind != index
        })

        setList(newList)
    }

  return {
        list : list,
        addTodo : addTodo,
        removeTodo : removeTodo
  }

}
