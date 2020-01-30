import React, {Fragment} from 'react';

export const Input = ({title, type}) => {
    return (

        <Fragment>
            <input className={title} type={type} placeholder={title}/>
        </Fragment>
    );
};
