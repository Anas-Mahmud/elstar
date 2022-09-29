import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import Banner from '../Banner/Banner';
import Card from '../Card/Card';
import './Home.css'
import Blog from '../Blog/Blog';

const Home = () => {
    const [cards, setCard] = useState([]);
    const [activity, setActivity] = useState([]);

    useEffect(() => {
        fetch('fakedb.json')
            .then(res => res.json())
            .then(data => setCard(data))
    }, [])

    const handleAddToList = (card) => {
        // console.log(card);
        const newActivity = [...activity, card];
        setActivity(newActivity);
        // console.log(activity);
    }

    return (
        <div className='home'>
            <div className='left-side'>
                <div className='text'>
                    <h1> <FontAwesomeIcon icon={faStarHalfStroke}></FontAwesomeIcon> elstar</h1>
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
                <Blog></Blog>
            </div>
            <Banner card={activity}></Banner>
        </div>
    );
};

export default Home;