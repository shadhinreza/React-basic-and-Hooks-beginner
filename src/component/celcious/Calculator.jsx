import React, { Component } from 'react';
import InputText from './InputText';
import {toCelsius, toFehrenheit, tryConvert} from './Convert.js'
import BoilingVerDict from './BoilingVerDict';

class Calculator extends Component {
    state = {
        scale: '',
        temperature: ''
    }

    handleCelsius = (temperature) =>{
        this.setState({scale: 'c', temperature})
    }
    handleFehrenheit = (temperature) =>{
        this.setState({scale : 'f', temperature})
    }
    render(){
        const {scale,temperature} = this.state;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature,toFehrenheit) : temperature;
        return (
            <div>
                <InputText scale='c' temperature={celsius} tempHandleChange={this.handleCelsius}/>
                <InputText scale='f' temperature={fahrenheit} tempHandleChange={this.handleFehrenheit}/>

                <BoilingVerDict celsius={parseFloat(temperature)}/>
            </div>
        )
    }
}

export default Calculator;
