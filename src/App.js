import React from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// Create a Redux store
const store = createStore(reducer, { count: 0 });

// Map Redux state to component props
const mapStateToProps = state => ({
  count: state.count
});

// Map Redux actions to component props
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch({ type: 'INCREMENT' }),
  decrement: () => dispatch({ type: 'DECREMENT' })
});

// Connected component
const Counter = connect(
  mapStateToProps,
  mapDispatchToProps
)(({ count, increment, decrement }) => (
  <div>
    <h2>{count}</h2>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
  </div>
));

// App component
const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

export default App;
