import React from 'react';
import './Card.css'

const Card = ({ handleAddToList, card }) => {
    const { picture, name, time, singer, age, about } = card;
    // console.log(card);

    return (
        <div className='card'>
            <img src={picture} alt="" />
            <h2>Name: {name}</h2>
            <h5>Singer: {singer}</h5>
            <h5>Age: {age}</h5>
            <h5>Time: {time}m</h5>
            <button onClick={() => handleAddToList(card)} className='add-btn'>Add to list</button>
        </div>
    );
};

export default Card;