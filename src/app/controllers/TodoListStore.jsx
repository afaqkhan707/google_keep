'use client'
import { useState } from 'react';
import React, { createContext } from 'react';

export const TotalContext =createContext(0)

const TodoStore =({children})=>{
    const [counts ,setCounts]= useState(0)
    return (
        <TotalContext.Provider  value={{ counts, setCounts }}>
             {children}
        </TotalContext.Provider>
    )
}

export default TodoStore
