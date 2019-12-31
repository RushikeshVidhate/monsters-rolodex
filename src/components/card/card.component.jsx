import React from 'react'
import './card.styles.css';

export default function Card(props) {
    return (
        <div className='card'>
        <img src={`https://robohash.org/${props.monster.id}2?set=set1&size=150x150`} alt="monster" />
           <h2>{props.monster.name}</h2> 
           <h5>{props.monster.email}</h5>
        </div>
    )
}
