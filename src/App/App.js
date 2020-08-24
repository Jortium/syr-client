import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Board from '../Board/Board';
import Landing from '../Landing/Landing';
import NewPost from '../NewPost/NewPost';
import TopNav from '../TopNav/TopNav';
import apiContext from '../apiContext';
import { staticData } from '../staticData';

export default class App extends Component {

    state = {
        staticTest: [],
    };

    getData() {
        return staticData;
    }

    componentDidMount() {
        setTimeout(() => {
            const staticTest = this.getData();
            this.setState({
                staticTest,
            });
        }, 1000);
    }

    handlePostRig = (formValues) => {
        this.setState({
            staticTest: [...this.state.staticTest, formValues],
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
            staticTest: this.state.staticTest,
            postRig: this.handlePostRig
        };

        return (
            <apiContext.Provider value={value}>
                <TopNav />
                {this.renderMainRoutes()}
            </apiContext.Provider>
        );
    }
}
