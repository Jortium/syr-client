import React, { useContext } from 'react';
import Board from '../Board/Board'
import ApiContext from '../ApiContext'

const FlexTable = () => {
    const systemInfo = useContext(ApiContext);
    return(
    <div>
        <div className='table-container'>
            <div className='flex-row'>CPU</div>
            <div className='flex-row'>GPU</div>
            <div className='flex-row'>RAM</div>
            <Board boardInfo={systemInfo}/>
        </div>
    </div>
    )
};

export default FlexTable