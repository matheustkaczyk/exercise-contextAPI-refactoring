
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import myContext from './myContext';

class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(car, set) {
    this.setState({
      cars: {
        ...this.state.cars,
        [car]: set,
      }
    });
  }

  render() {
    const context = {
      ...this.state,
      moveCar: this.handleChange,
    };

    const { children } = this.props;

    return (
      <myContext.Provider value={context}>
        {children}
      </myContext.Provider>
    );
  }
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;