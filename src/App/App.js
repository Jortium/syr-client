import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Board from '../Board/Board';
import Landing from '../Landing/Landing';
import NewPost from '../NewPost/NewPost';
import TopNav from '../TopNav/TopNav';
import ApiContext from '../ApiContext';
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
                <Route exact path="/board" component={Board} />
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
            <ApiContext.Provider value={value}>
                <TopNav />
                {this.renderMainRoutes()}
            </ApiContext.Provider>
        );
    }
}
