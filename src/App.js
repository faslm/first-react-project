import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Counters: [
        { id: 1, value: 0 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 }
      ]
    }
  }
  handleIncrement = counter => {
    const counters = this.state.Counters;
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  handleReset = () => {
    const counters = this.state.Counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handleDelete = counterId => {
    const Counters = this.state.Counters.filter(c => c.id !== counterId);
    this.setState({ Counters });
  }
  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters = {this.state.Counters.filter(c => c.value > 0).length}
         />
        <main className="container">
          <Counters
            Counters={this.state.Counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
