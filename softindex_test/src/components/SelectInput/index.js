import React from 'react';
import {Field} from "formik";

export const Select = () => (
    <div className="form-group">
        <label htmlFor='genderExampleInput'>Gender</label>
        <Field
            name='gender'
            as="select"
            className="form-control"
            id='genderExampleInput'>
            <option value="">Select your gender</option>
            <option value="Men">Men</option>
            <option value="Woman">Woman</option>
        </Field>
    </div>
);