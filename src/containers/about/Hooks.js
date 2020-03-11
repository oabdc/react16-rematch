import React, { useEffect, useReducer } from 'react';


function reducer(state, action) {
    switch (action.type) {
    case 'increment':
        return { number: state.number + 1 };
    case 'decrement':
        return { number: state.number - 1 };
    default:
        throw new Error();
    }
}
function Hooks(props) {
    console.log(props);
    const [state, dispatch] = useReducer(reducer, { number: props.num });
    return (
        <div>
          Count: {state.number}
          <button onClick={() => dispatch({ type: 'increment' })}>+</button>
          <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
        </div>
    );
}
export default Hooks;
