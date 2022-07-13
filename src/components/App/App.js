import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer'
import { Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import Profile from '../Profile/Profile';

function App() {


    return (
        <div className='page'>
            <Header />
            <Switch>
                <Route exact path='/'>
                    <Main />
                    <Footer />
                </Route>
                <Route path='/movies'>
                    <Movies />
                    <Footer />
                </Route>
                <Route path='/profile'>
                    <Profile />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
