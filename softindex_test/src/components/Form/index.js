import React from 'react';
import {Formik, Form, Field} from 'formik';
import * as yup from 'yup'

import {Input, Button} from "../index";
import {listInputs, DB} from '../../constants'


export const FormWrap = () => {

    const submit = values => {
            DB.push(values);
            console.log(DB);
            console.log(values);
    };


    return (
        <div>
            <h1>FORM</h1>
            <Formik
                initialValues={{}}
                onSubmit={ values => submit(values) }
            >
                <Form>
                    {
                        listInputs.map((input, i) => {
                            return (
                                <div className="form-group" key={input + i}>
                                    <label htmlFor={`${input.name}ExampleInput`}>{input.title}</label>
                                    <Field name={input.name} type={input.type} className="form-control"
                                           id={`${input.name}ExampleInput`}/>
                                    <small className="form-text text-muted">
                                        Enter yours {input.title}
                                    </small>
                                </div>
                            )
                        })
                    }
                    <Button/>
                </Form>
            </Formik>
        </div>
    )
};
