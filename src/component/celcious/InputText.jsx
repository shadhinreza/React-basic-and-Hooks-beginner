import React from "react";

let ScaleName = {
    c : 'Celsius',
    f : 'Fehrenheit'
}
function InputText(props) {
    const inputHandleChange = (e) =>{
        props.tempHandleChange(e.target.value)
    }
        const {temperature,scale} = props;
        return (
            <div>
                <fieldset>
                    <legend>Enter temperature in {ScaleName[scale]}:</legend>
                    <input type="text" placeholder='Enter a number' value={temperature} onChange={inputHandleChange}/>
                </fieldset>  
                
            </div>
        );
}

export default InputText;
