import React, {Component} from 'react';
import './App.css';
import Chart from './Chart';

const API_URL = "http://localhost:4000/results";

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            results: [],
        };
    }

    componentDidMount() {
        fetch(API_URL)
            .then(response => {
                if (response.ok) {
                    return  response.json()
                }
                else {
                    throw new Error ('something went wrong')
                }
            })
            .then(results => this.setState({
                results: results.filter((r)=>{
                        return r.name === 'Python';
                    })
                })
            )}

    render() {
        const {results} = this.state;

        return (
            <div className="App" style={{ marginLeft: 70 }}>
                <Chart data={results}/>
            </div>
        );
    }
}

export default App;