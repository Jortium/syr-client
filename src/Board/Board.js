import React from 'react';
import './Board.css';

const Board = props => {
    const { boardInfo } = props
        return (
<div className='main'>
    <ul>
    {props.boardInfo.staticTest.length > 0 && props.boardInfo.staticTest.map(data =>
    <li className={data.id}>
        {data.cpumanufacturer} {data.cpumodel}, {data.cpucores} Cores, {data.gpumanufacturer} {data.gpumodel}, {data.ram}GBs
    </li>
    )}
    </ul>
</div>

        )
    }

export default Board