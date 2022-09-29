import React from 'react';
import Time from '../Time/Time';
import './Id.css'

const Id = () => {
    return (
        <div>
            <h2>Anas Mahmud</h2>
            <p>Halishahar, Chittagong</p>
            <div className='id-info'>
                <div>
                    <h2>74kg</h2>
                    <h3>Weight</h3>
                </div>
                <div>
                    <h2>5.4</h2>
                    <h3>Height</h3>
                </div>
                <div>
                    <h2>22yrs</h2>
                    <h3>Age</h3>
                </div>
            </div>
            <Time></Time>
        </div>
    );
};

export default Id;