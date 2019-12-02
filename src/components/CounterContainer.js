import React, { Component } from 'react';
import { connect } from "react-redux";

// ACTIONS
const addAction = {
  type: 'ADD',
};

const removeAction = {
  type: 'REMOVE',
};

const add10Action = {
  type: 'ADD_10'
};

const remove10Action = {
  type : 'REMOVE_10'
};

const resetAction = {
  type : 'RESET',
};

const mapStateToProps = state => ({
  counter: state
});

class CounterComponent extends Component {
  render() {
    const { counter, dispatch } = this.props;
    return (
      <div>
        <p>{counter}</p>
        <button onClick={() => dispatch(addAction)}>+</button>
        <button onClick={() => dispatch(add10Action)}>+10</button>
        <button onClick={() => dispatch(removeAction)}>-</button>
        <button onClick={() => dispatch(remove10Action)}>-10</button>
        <button onClick={() => dispatch(resetAction)}>Reset</button>
      </div>
    )
  }
}


const CounterContainer = connect(mapStateToProps)(CounterComponent);

export default CounterContainer;

