import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { config } from '../config';
import TopNav from '../TopNav/TopNav';
import FlexTable from '../FlexTable/FlexTable';
import Contact from '../Contact/Contact';
import About from '../About/About';
import ApiContext from '../ApiContext';
import {staticData} from '../staticData';
import NewPost from '../NewPost/NewPost';
import Splash from '../Splash/Splash';

export default class App extends Component{

    state = {
        staticTest:[],
        cpumanufacturer:[],
        cpumodel:[],
        cpucores:[],
        gpumanufacturer:[],
        gpumodel:[],
        ram:[],
    };

    getData () {
        return staticData;
    }

    async componentDidMount () {
      console.log(config.API_KEY)
      const opts = {
        headers: {
            'content-type': 'application/json',
          Authorization: `Bearer ${config.API_KEY}`
        }
      }
      try {
        const parts = await fetch('http://localhost:8000/api/parts', opts)
        const partsJson = await parts.json()
        console.log(partsJson)
        this.setState({
          staticTest: partsJson
        })
      } catch (e) {
        console.log('Error communicating with API ', e.message)
      }

        // setTimeout(() => {
        //     const staticTest = this.getData()
        //     this.setState({
        //         staticTest
        //     })
        // }, 1000);
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
              component={Splash}
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
                        <Route
            exact
              path='/board'
              component={FlexTable}
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
