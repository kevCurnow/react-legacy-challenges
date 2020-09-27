import React from 'react';
import Nav from './Nav';
import Cats from './Cats/Cats';
import Dogs from './Dogs/Dogs';
import Search from './Search/Search';
import ToDo from './ToDo/ToDo';
import Weather from './Weather/Weather';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Main = () => {

    return (
        <React.Fragment>
            <Router>
                <Nav />
                <Switch>
                    <Route exact path="/cats" component={ Cats } />
                    <Route exact path="/search" component={ Search } />
                    <Route exact path="/dogs" component={ Dogs } />
                    <Route exact path="/todo" component={ ToDo } />
                    <Route exact path="/weather" component={ Weather} />
                </Switch>
            </Router>
        </React.Fragment>
    )
}

export default Main;