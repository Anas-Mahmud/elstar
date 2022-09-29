import React, { useState } from 'react';
import './Time.css'
import Swal from 'sweetalert2'

const Time = ({ cards }) => {
    // console.log(cards);

    const [breakTime, setBreakTime] = useState('');

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

    const handleBreakTime = (time) => {
        // console.log(time);
        setBreakTime(time);
    }

    return (
        <div>
            <h2>Add A Break</h2>
            <div className='break'>
                <button onClick={() => { handleBreakTime(20) }} className='break-btn'><p>20m</p></button>
                <button onClick={() => { handleBreakTime(30) }} className='break-btn'><p>30m</p></button>
                <button onClick={() => { handleBreakTime(40) }} className='break-btn'><p>40m</p></button>
                <button onClick={() => { handleBreakTime(50) }} className='break-btn'><p>50m</p></button>
                <button onClick={() => { handleBreakTime(60) }} className='break-btn'><p>60m</p></button>
            </div>
            <h2>Music Details</h2>
            <h3 className='time'>Music runtime: {(totalTime).toFixed(2)}m</h3>
            <h3 className='time'>Break Time: {breakTime}m</h3>
            <button onClick={sweetAlert} className='activity-btn'>Activity Completed</button>
        </div>
    );
};

export default Time;