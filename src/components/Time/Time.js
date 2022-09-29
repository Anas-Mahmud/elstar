import React from 'react';
import './Time.css'
import Swal from 'sweetalert2'

const Time = ({ cards }) => {
    // console.log(cards);

    let totalTime = 0;
    for (const card of cards) {
        totalTime = card.time + totalTime;
    }

    const sweetAlert = () => {
        Swal.fire(
            'Good job!',
            'Your Activity is Completed',
            'success'
        )
    }

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
            <h3 className='time'>Music runtime: {(totalTime).toFixed(2)}m</h3>
            <h3 className='time'>Break Time: </h3>
            <button onClick={sweetAlert} className='activity-btn'>Activity Completed</button>
        </div>
    );
};

export default Time;