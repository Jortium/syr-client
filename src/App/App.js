import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import TopNav from '../TopNav/TopNav';
import FlexTable from '../FlexTable/FlexTable';
import Contact from '../Contact/Contact';
import About from '../About/About';
import ApiContext from '../ApiContext';
import {staticData} from '../staticData';
import NewPost from '../NewPost/NewPost';

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
              component={FlexTable}
            />
            <Route
            exact
              path='/contact'
              component={Contact}
            />
            <Route
            exact
              path='/about'
              component={About}
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
