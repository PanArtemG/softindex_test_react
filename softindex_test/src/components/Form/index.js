import React from 'react';

import {listInputs} from '../../constants/listInputsForForm.js'
import {Input} from "../Input";

export const Form = () => {
    return (
        <form>
            <h1>FORM</h1>
            {
                listInputs.map((input, i) => {
                    console.log(input);
                    return (
                        <Input {...input} key={input.title + i }/>
                    )
                })
            }

        </form>
    );
};
