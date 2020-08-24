import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import FlexTable from '../FlexTable/FlexTable';
import Landing from '../Landing/Landing';
import NewPost from '../NewPost/NewPost';
import TopNav from '../TopNav/TopNav';
import apicontext from '../apicontext';
import { getAllRigs } from '../api';

export default class App extends Component {
    state = {
        pcParts: [],
    };

    async componentDidMount() {
        const parts = await getAllRigs();
        if (parts.body.status === 'FAILURE') {
            console.log('Error communicating with server')
            return;
        }
        console.log(parts);
        this.setState({
            pcParts: parts.body.data,
        });
    }

    handlePostRig = (formValues) => {
        this.setState({
            pcParts: [...this.state.pcParts, formValues],
        });
    };

    renderMainRoutes() {
        return (
            <>
                <Route exact path="/" component={Landing} />
                <Route exact path="/board" component={FlexTable} />
                <Route exact path="/post" component={NewPost} />
            </>
        );
    }

    render() {
        const value = {
            pcParts: this.state.pcParts,
            postRig: this.handlePostRig,
        };

        return (
            <apicontext.Provider value={value}>
                <TopNav />
                {this.renderMainRoutes()}
            </apicontext.Provider>
        );
    }
}
