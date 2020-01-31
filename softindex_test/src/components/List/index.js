import React, {useEffect} from 'react';
import {DB} from '../../constants'

export const List = () => {

    useEffect(() => {
        console.log(DB)
    }, DB);

    const loadDB = () => {
        const data = localStorage.getItem('DataBase');
        if (data) {
            const storageBD = JSON.parse(data);
            console.log(storageBD);
            storageBD.forEach(el => {
                DB.push(el)
            });
            console.log(DB)
        }
    };

    loadDB();

    return (
        <div className='w-50 p-3 d-flex flex-md-column align-items-center justify-content-center '>
            <h1 className='mb-5'>LIST</h1>
            {
                DB.length >= 1
                    ?
                    DB.map(el => {
                        return (
                            <ul>
                                <li>{el.firstName}</li>
                                <li>{el.lastName}</li>
                                <li>{el.phone}</li>
                                <li>{el.gender}</li>
                                <li>{el.age}</li>
                            </ul>
                        )
                    })
                    : <h1>EMPTY</h1>
            }
        </div>
    );
};
