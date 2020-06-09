import React, {Component} from 'react';
import Wisewords from './Wisewords'
import AnnoyingForm from './AnnoyingForm'
import CopyDemo from './CopyDemo'
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Wisewords/>
                <AnnoyingForm/>
                <CopyDemo/>
            </div>
        );
    }
}

export default App;
