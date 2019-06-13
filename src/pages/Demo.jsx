import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Count = props => (
  <div>
    The count is {props.count}
      <button onClick={props.increment}>increment</button>
        <button onClick={props.incrementAsync}>incrementAsync</button>
  </div>
);

const mapState = state => ({
  count: state.count,
});

const mapDispatch = (obj) => {
  console.log('obj', obj);
  return {
    increment: () => obj.count.increment(1),
    incrementAsync: () => obj.count.incrementAsync(1),
  };
};

Count.propTypes = {
  increment: PropTypes.func,
  incrementAsync: PropTypes.func,
  count: PropTypes.number,
};

const CountContainer = connect(mapState, mapDispatch)(Count);
export default CountContainer;
