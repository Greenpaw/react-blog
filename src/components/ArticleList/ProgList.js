import React from 'react'
//import Article from '../Article' 
import Prog from '../Article'
import "./style.css"
export default function ProgList({ array }) {
    array.map((arrayItem) =>
        arrayItem.map((progItem) =>
        < li key={progItem.id}>
             <Prog array={array} defaultOpen = {index === 0}/>
        </li>
        
        ))
    return (
        <ul>
           {alert (progItem[0])};
        </ul>
    
    )
    
}