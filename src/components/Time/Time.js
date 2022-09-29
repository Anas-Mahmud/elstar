import React from 'react';
import './Time.css'

const Time = () => {
    return (
        <div>
            <h2>Add A Break</h2>
            <div className='break'>
                <button className='break-btn'>10m</button>
                <button className='break-btn'>20m</button>
                <button className='break-btn'>30m</button>
                <button className='break-btn'>40m</button>
                <button className='break-btn'>50m</button>
            </div>
            <h2>Music Details</h2>
            <h3 className='time'>Music Time: </h3>
            <h3 className='time'>Break Time: </h3>
            <button className='activity-btn'>Activity Completed</button>
        </div>
    );
};

export default Time;