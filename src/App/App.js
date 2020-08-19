import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Contact from '../Contact/Contact';
import FlexTable from '../FlexTable/FlexTable';
import Landing from '../Landing/Landing';
import NewPost from '../NewPost/NewPost';
import TopNav from '../TopNav/TopNav';
import ApiContext from '../ApiContext';
import {staticData} from '../staticData';

export default class App extends Component{

    state = {
        staticTest:[]
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

    handlePostRig = formValues => {
        this.setState({
            staticTest: [
            ...this.state.staticTest,
            formValues
            ]
        })
        console.log('!!!!!!!!!!!!!!!!!!!!', formValues)
    }

    renderMainRoutes() {
        return (
          <>
            <Route
            exact
              path='/'
              component={Landing}
            />
            <Route
            exact
              path='/board'
              component={FlexTable}
            />
            <Route
            exact
              path='/post'
              component={NewPost}
            />
          </>
        )
      }

    render() { 
        const value = {
            staticTest: this.state.staticTest,
            // cpumanufacturer: this.state.cpumanufacturer,
            // cpumodel: this.state.cpumodel,
            // cpucores: this.state.cpucores,
            // gpumanufacturer: this.state.gpumanufacturer,
            // gpumodel: this.state.gpumodel,
            // ram: this.state.ram,
            postRig: this.handlePostRig
        }

    return(
    <ApiContext.Provider value={value}>
    <TopNav/>
    {this.renderMainRoutes()}
    </ApiContext.Provider>
);
}
}
