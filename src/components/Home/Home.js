import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './Home.css'

const Home = () => {
    const [cards, srtCard] = useState([]);

    useEffect(() => {
        fetch('fakedb.json')
            .then(res => res.json())
            .then(data => srtCard(data))
    }, [])
    return (
        <div className='left-side'>
            <div className='text'>
                <h1>elstar</h1>
            </div>
            <div className='cards'>
                {
                    cards.map(card => <Card
                        key={card.id}
                        card={card}
                    ></Card>)
                }
            </div>

        </div>
    );
};

export default Home;