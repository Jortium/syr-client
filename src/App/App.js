import React, { Component } from 'react';
import './App.css';
import TopNav from '../TopNav/TopNav';
import FlexTable from '../FlexTable/FlexTable';
import ApiContext from '../ApiContext';
import {staticData} from '../staticData';

export default class App extends Component{

    state = {
        staticTest:[],
        cpumanufacturer:[],
        cpumodel:[],
        cpucores:[],
        gpumanufacturer:[],
        gpumodel:[],
        ram:[]
    };

    getData () {
        return staticData;
    }

    componentDidMount () {
        setTimeout(() => {
            const staticTest = this.getData()
            this.setState({
                staticTest
            })
        }, 1000);
    }

    render() { 
        const value = {
            staticTest: this.state.staticTest,
            cpumanufacturer: this.state.cpumanufacturer,
            cpumodel: this.state.cpumodel,
            cpucores: this.state.cpucores,
            gpumanufacturer: this.state.gpumanufacturer,
            gpumodel: this.state.gpumodel,
            ram: this.state.ram
        }
        return(
    <ApiContext.Provider value={value}>
    <TopNav/>
    <FlexTable/>
    </ApiContext.Provider>
);
}
}
