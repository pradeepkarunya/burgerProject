import React from 'react';
import './BuildControl.scss';

const BuildControl = (props)=> (
    <div>
        <div className='BuildControl'>
            <div className='Label'>{props.label}</div>
            <button className='Less'>Less</button>
            <button className='More'>More</button>
        </div>
    </div>
)

export default BuildControl
