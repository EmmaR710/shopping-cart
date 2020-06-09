import React, { Component } from 'react';
import Home from './components/Home';
import Cart from './components/Cart';

class App extends Component {
    render() {
        return (
                <div className="App">
                    <Home/>
                    <hr/>
                    <Cart/>
                </div>
        );
    }
}

export default App;
