// src/TrafficSignal.jsx

import React from 'react';
import PropTypes from 'prop-types';
import myContext from './myContext';
import redSignal from './images/redSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';

const renderSignal = (signal) => {
  if (signal === 'red') return redSignal;
  if (signal === 'yellow') return yellowSignal;
  if (signal === 'green') return greenSignal;
  return null;
};

class TrafficSignal extends React.Component {
  render() {
    const { signal, handleSignal } = this.context;
    const { color } = signal;
    return (
      <div>
      <div className="button-container">
        <button onClick={() => handleSignal('red')} type="button">
          Red
        </button>
        <button onClick={() => handleSignal('yellow')} type="button">
          Yellow
        </button>
        <button onClick={() => handleSignal('green')} type="button">
          Green
        </button>
      </div>
      <img className="signal" src={renderSignal(color)} alt="" />
    </div>
    );
  }
};

TrafficSignal.propTypes = {
  changeSignal: PropTypes.func.isRequired,
  signalColor: PropTypes.string.isRequired,
};

TrafficSignal.contextType = myContext;

export default TrafficSignal;
