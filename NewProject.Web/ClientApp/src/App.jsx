import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {

    state = {
        count: 0
    }

    onButtonClick = () => {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        return (
            <div className="app-container">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <h1>Welcome to React</h1>
                    <button onClick={this.onButtonClick} className="btn btn-primary mb-3">Click me</button>
                    <h2>{this.state.count}</h2>
                </div>
            </div>
        );
    }
};

export default App;