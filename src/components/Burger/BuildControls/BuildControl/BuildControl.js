import React from 'react';
import './BuildControl.scss';

const BuildControl = (props)=> (
    <div>
        <div className='BuildControl'>
            <div className='Label'>{props.label}</div>
            <button className='Less' onClick={props.removed} disabled={props.disabled}>Less</button>
            <button className='More' onClick={props.added}>More</button>
        </div>
    </div>
)

export default BuildControl
