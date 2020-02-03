import React from 'react';
import {useDispatch} from "react-redux";
import {Formik, Form, Field} from 'formik';
import {validationSchema} from '../../shema'
import {Button} from "../index";
import {list} from "../../services/list/actions";

import './index.scss'

export const FormBlock = () => {

    const dispatch = useDispatch();
    const submit = values => dispatch(list.add(values));

    return (
        <Formik
            initialValues={{
                _id: '',
                firstName: '',
                lastName: '',
                phone: '',
                gender: '',
                age: ''
            }}
            onSubmit={(values, actions) => {
                values._id = `${Date.now()}`;
                submit(values);
                actions.resetForm();
            }}
            validationSchema={validationSchema}
        >
            {({errors, touched}) => (
                <Form
                    id='exampleForm'
                    className='form-wrap w-50 p-5 d-flex flex-md-column justify-content-between align-items-center text-center'>
                    <h1 className='mb-5'>Welcome!</h1>
                    <div className='w-75'>
                        <div className="form-group w-100">
                            <label htmlFor='firstNameExampleInput'>First Name</label>
                            <Field
                                name='firstName'
                                type='text'
                                className="form-control"
                                id='firstNameExampleInput'/>
                            {errors.firstName && touched.firstName && (
                                <small className="form-text text-danger">{errors.firstName}</small>
                            )}
                        </div>
                        <div className="form-group w-100">
                            <label htmlFor='lastNameExampleInput'>Last Name</label>
                            <Field
                                name='lastName'
                                type='text'
                                className="form-control"
                                id='lastNameExampleInput'/>
                            {errors.lastName && touched.lastName && (
                                <small className="form-text text-danger">{errors.lastName}</small>
                            )}
                        </div>
                        <div className="form-group w-100">
                            <label htmlFor='phoneExampleInput'>Phone</label>
                            <Field
                                name='phone'
                                type='text'
                                className="form-control"
                                id='phoneExampleInput'/>
                            {errors.phone && touched.phone && (
                                <small className="form-text text-danger">{errors.phone}</small>
                            )}
                        </div>
                        <div className="form-group w-100">
                            <label htmlFor='genderExampleInput'>Gender</label>
                            <Field
                                name='gender'
                                as="select"
                                className="form-control form-control-select"
                                id='genderExampleInput'>
                                <option value="">Select your gender</option>
                                <option value="man">man</option>
                                <option value="woman">woman</option>
                            </Field>
                            {errors.gender && touched.gender && (
                                <small className="form-text text-danger">{errors.gender}</small>
                            )}
                        </div>
                        <div className="form-group w-100">
                            <label htmlFor='ageExampleInput'>Age</label>
                            <Field
                                name='age'
                                type='number'
                                className="form-control"
                                id='ageExampleInput'/>
                            {errors.age && touched.age && (
                                <small className="form-text text-danger">{errors.age}</small>
                            )}
                        </div>
                    </div>
                    <Button/>
                </Form>
            )}
        </Formik>
    )
};