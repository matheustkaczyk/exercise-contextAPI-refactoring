import React from 'react';
import myContext from './myContext';

class Provider extends React.Component {
    constructor(props) {
      super(props);
        this.state = {
            cars: {
                red: false,
                blue: false,
                yellow: false,
              },
            signal: { color: 'red' },
        }
        this.handleCars = this.handleCars.bind(this);
        this.handleSignal = this.handleSignal.bind(this);
    }

    handleCars(car, side) {
        this.setState({
            cars: {
                ...this.state.cars,
                [car]: side,
            }
        });
    }

    handleSignal(color) {
        this.setState({
            signal: {
                ...this.state.signal,
                color: color
            }
        })
    }

    render() {
        const { children } = this.props;
        const context = {
            cars: this.state.cars,
            signal: this.state.signal,
            handleCars: this.handleCars,
            handleSignal: this.handleSignal,
        }
        return(
            <myContext.Provider value={context}>
                { children }
            </myContext.Provider>
        )
    }
}

export default Provider;
