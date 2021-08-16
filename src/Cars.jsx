// src/Cars.jsx

import PropTypes from 'prop-types';
import React from 'react';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
import myContext from './myContext';

class Cars extends React.Component {
  render() {
    const { red, yellow, blue } = this.context.cars;
    const { handleCars } = this.context;
    return (
      <div>
      <div>
        <img
          className={red ? 'car-right' : 'car-left'}
          src={carRed}
          alt="red car"
          />
        <button
          onClick={() => handleCars('red', !red)}
          type="button"
          >
          Move
        </button>
      </div>
      <div>
        <img
          className={blue ? 'car-right' : 'car-left'}
          src={carBlue}
          alt="blue car"
          />
        <button
          onClick={() => handleCars('blue', !blue)}
          type="button"
          >
          Move
        </button>
      </div>
      <div>
        <img
          className={yellow ? 'car-right' : 'car-left'}
          src={carYellow}
          alt="yellow car"
          />
        <button
          onClick={() => handleCars('yellow', !yellow)}
          type="button"
          >
          Move
        </button>
      </div>
    </div>
    );
  }
}

Cars.propTypes = {
  moveCar: PropTypes.func.isRequired,
  blueCar: PropTypes.bool.isRequired,
  redCar: PropTypes.bool.isRequired,
  yellowCar: PropTypes.bool.isRequired,
};

Cars.contextType = myContext;

export default Cars;