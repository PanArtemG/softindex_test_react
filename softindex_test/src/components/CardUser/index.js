import React from 'react';
import {useDispatch} from "react-redux";
import {list} from "../../services/list/actions";

import './index.scss'

export const CardUser = ({_id, firstName, lastName, phone, gender, age}) => {
    const dispatch = useDispatch();
    const removeData = id => dispatch(list.remove(id));

    return (
        <div className='wrap-card p-4 m-1 w-75' id={_id}>
            <span
                onClick={() => removeData(_id)}
                className='btn-cls'
                aria-hidden="true">
                &times;
            </span>
            <h5 className='text-center'>{firstName} {lastName}</h5>
            <ul className='list-group list-group-flush'>
                <li className='list-group-item bg-transparent p-0'>First name : {firstName}</li>
                <li className='list-group-item bg-transparent p-0'>Last name : {lastName}</li>
                <li className='list-group-item bg-transparent p-0'>Phone : {phone}</li>
                <li className='list-group-item bg-transparent p-0'>Gender : {gender}</li>
                <li className='list-group-item bg-transparent p-0'>Age : {age}</li>
            </ul>
        </div>
    );
};