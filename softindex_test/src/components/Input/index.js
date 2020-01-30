import React, {useState} from 'react';

export const Input = ({title, type}) => {
    const [valueInput, setValueInput] = useState('');
    function getValue (ev){
        setValueInput(ev.target.value);
        console.log(valueInput);
    }

    return (
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">{title}</label>
            <input name={title} type={type} onChange={getValue} value={valueInput} className="form-control" id={`exampleInput${title}`}/>
            <small className="form-text text-muted">
                Enter yours {title}
            </small>
        </div>
    );
};
