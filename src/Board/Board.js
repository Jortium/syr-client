import React, { Component } from 'react';
import './Board.css';

export default class Board extends Component {
    render(){
        return (
<div className='main'>
<br></br>
    <div className='move'>
        <p className='post'>
        Posts go here
        </p>
        <div className="buttonBox">
        <i className="far fa-plus-square"></i>
        </div>
        </div>
</div>
        )
    }
}