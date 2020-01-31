import React, {useState} from 'react';
import {Field} from 'formik';

export const Input = ({title, type, name}) => {
    const [valueInput, setValueInput] = useState('');
    function getValue (ev){
        setValueInput(ev.target.value);
        console.log(valueInput);
    }

    return (
        <div className="form-group">
            <label htmlFor={`${name}ExampleInput`}>{title}</label>
            <Field name={name} type={type} onChange={getValue} value={valueInput} className="form-control" id={`${name}ExampleInput`}/>
            <small className="form-text text-muted">
                Enter yours {title}
            </small>
        </div>
    );
};
