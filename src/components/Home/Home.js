import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Card from '../Card/Card';
import './Home.css'

const Home = () => {
    const [cards, setCard] = useState([]);

    useEffect(() => {
        fetch('fakedb.json')
            .then(res => res.json())
            .then(data => setCard(data))
    }, [])

    const handleAddToList = (card) => {
        console.log(card);
    }

    return (
        <div className='home'>
            <div className='left-side'>
                <div className='text'>
                    <h1>elstar</h1>
                </div>
                <div className='cards'>
                    {
                        cards.map(card => <Card
                            key={card.id}
                            card={card}
                            handleAddToList={handleAddToList}
                        ></Card>)
                    }
                </div>
            </div>
            <Banner></Banner>
        </div>
    );
};

export default Home;