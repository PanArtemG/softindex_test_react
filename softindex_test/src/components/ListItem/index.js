import React from 'react';

import './index.scss'

const ListItem = ({firstName, lastName, phone, gender, age}, i) => {
    return (
        <div className='wrap p-4 m-1 w-75' key={phone} >
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

export default ListItem;