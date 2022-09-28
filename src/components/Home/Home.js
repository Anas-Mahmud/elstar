import React, { useEffect, useState } from 'react';
import './Home.css'

const Home = () => {
    const [card, srtCard] = useState([]);

    useEffect(() => {
        fetch('fakedb.json')
            .then(res => res.json())
            .then(data => srtCard(data))
    }, [])
    return (
        <div className='cards'>
            <h1>elstar</h1>
            <h3>Select your song: {card.length}</h3>

        </div>
    );
};

export default Home;