import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {listSelectors} from "../../services/globalSelectors";
import {list} from "../../services/list/actions";

import './index.scss'
import ListItem from "../ListItem";

export const List = () => {
    const dispatch = useDispatch();

    const data = useSelector(listSelectors.list);
    const inputValue = ''
    //сюда нужно вводить значение инпута
    const newData = data.filter(el => el.firstName === inputValue)
    useEffect(() => {
        dispatch(list.update());
    }, []);


    return (
        <div className='w-50 p-3 d-flex flex-md-column align-items-center justify-content-center text-black-50 scrollbar scrollbar-lady-lips'>
            <h1 className='mb-5'>LIST</h1>
            <div className='wrap-list w-100 d-flex flex-wrap align-items-center justify-content-center force-overflow scrollbar scrollbar-near-moon'>
                {
                    data.length >= 1
                        ?
                        data.map((item, i) => <ListItem {...item}/>)
                        :
                        <h1>EMPTY</h1>
                }
            </div>
        </div>
    );
};
