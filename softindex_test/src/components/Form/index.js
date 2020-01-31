import React from 'react';
import {Formik, Form, Field} from 'formik';

import {Button} from "../index";
import {listInputs, DB, MESSAGES_ERROR} from '../../constants'
import {validationSchema} from '../../shema'

export const FormWrap = () => {


    const submit = values => {
        DB.push(values);
        console.log(DB);
        console.log(values);
    };


    return (
        <Formik
            initialValues={{
                firstName:  ''
            }}
            onSubmit={values => submit(values)}
            validationSchema={validationSchema}
        >
            {({ errors, touched }) => (

                <Form>
                    <h1>FORM</h1>
                    <div className="form-group" >
                        <label htmlFor='firstNameExampleInput'>First Name</label>
                        <Field
                            name='firstName'
                            type='text'
                            className="form-control"
                            id='firstNameExampleInput'/>
                        {errors.firstName && touched.firstName && (
                            <span style={{ color: 'red' }}>{errors.firstName}</span>
                        )}
                        <small className="form-text text-muted">
                            Enter yours First Name
                        </small>
                    </div>
                    <div className="form-group" >
                        <label htmlFor='lastNameExampleInput'>Last Name</label>
                        <Field
                            name='lastName'
                            type='text'
                            className="form-control"
                            id='lastNameExampleInput'/>
                        {errors.lastName && touched.lastName && (
                            <span style={{ color: 'red' }}>{errors.lastName}</span>
                        )}
                        <small className="form-text text-muted">
                            Enter yours Last Name
                        </small>
                    </div>
                    {/*{*/}
                    {/*    listInputs.map(({name, title, type}, i) => {*/}
                    {/*        return (*/}
                    {/*            <div className="form-group" key={name + i}>*/}
                    {/*                <label htmlFor={`${name}ExampleInput`}>{title}</label>*/}
                    {/*                <Field*/}
                    {/*                    style={{color: 'red'}}*/}
                    {/*                    name={name}*/}
                    {/*                    type={type}*/}
                    {/*                    className="form-control"*/}
                    {/*                    id={`${name}ExampleInput`}/>*/}
                    {/*                {errors.title && touched.title && (*/}
                    {/*                    <span style={{ color: 'red' }}>{errors.title}</span>*/}
                    {/*                )}*/}
                    {/*                <small className="form-text text-muted">*/}
                    {/*                    Enter yours {title}*/}
                    {/*                </small>*/}
                    {/*            </div>*/}
                    {/*        )*/}
                    {/*    })*/}
                    {/*}*/}
                    <button  type="submit" id='btnSubmit' className=" btn btn-primary">Submit</button>
                </Form>
            )}
        </Formik>
    )
};
