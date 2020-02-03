import React from 'react';
import {useDispatch} from "react-redux";
import {list} from "../../services/list/actions";

import './index.scss'

export const Select = () => {
    const dispatch = useDispatch();
    const getValue = category => dispatch(list.sort(category));

    return (
        <div className="wrap-sort d-flex w-75 align-items-center mb-5">
            <select
                onChange={ev => getValue(ev.target.value)}
                name='sort'
                className="form-control"
            >
                <option value="reset">Select category</option>
                <option value="firstName">Fist name</option>
                <option value="lastName">Last Name</option>
                <option value="gender">Gender</option>
                <option value="age">Age</option>
            </select>
        </div>
    )
};