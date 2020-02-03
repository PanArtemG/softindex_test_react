import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {listSelectors} from "../../services/globalSelectors";
import {list} from "../../services/list/actions";
import {CardUser, Select} from '../index.js'

import './index.scss';

export const List = () => {
    const data = useSelector(listSelectors.list);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(list.update());
    }, []);

    return (
        <div
            className='wrap-block-list w-50 p-3 d-flex flex-md-column align-items-center justify-content-center scrollbar scrollbar-lady-lips'>
            <h1 className='mb-5'>LIST</h1>
            <div
                className='wrap-list w-100 d-flex flex-wrap align-items-center justify-content-center force-overflow scrollbar scrollbar-near-moon'>
                {
                    !!data.length
                        ?
                        <Select/>
                        :
                        null
                }
                {
                    !!data.length
                        ?
                        data.map((item, i) => <CardUser key={item._id + i} {...item}/>)
                        :
                        <h1>Fill the form >>></h1>
                }
            </div>
        </div>
    );
};
