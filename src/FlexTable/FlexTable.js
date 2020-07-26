import React, { useContext } from 'react';
import Board from '../Board/Board'
import ApiContext from '../ApiContext'

const FlexTable = () => {
    const systemInfo = useContext(ApiContext);
    return(
    <div>
        <div className='table-container'>
            <Board boardInfo={systemInfo}/>
        </div>

    </div>
    )
};

export default FlexTable