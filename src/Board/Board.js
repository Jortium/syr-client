import React from 'react';
import './Board.css';

const Board = props => {
    const { boardInfo } = props
        return (
<div className='main'>
    {props.boardInfo.staticTest.length > 0 && props.boardInfo.staticTest.map(data =>
        <div className='column'>
        {data.cpumanufacturer} {data.cpumodel}, {data.cpucores} Cores, {data.gpumanufacturer} {data.gpumodel} {data.ram}GBs
    </div>
    )}
</div>

        )
    }

export default Board