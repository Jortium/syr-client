import React, { Component } from 'react';
import './App.css';
import TopNav from '../TopNav/TopNav';
import Board from '../Board/Board';

export default class App extends Component{

    render() {     
        return(
    <>
    <TopNav/>
    <Board/>
    </>
);
}
}
