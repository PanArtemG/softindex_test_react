import React, {Fragment} from 'react';

export const Button = () => {
    // function handleClick (ev){
    //     ev.preventDefault();
    //     console.log('Submit form');
    // }

    return (
        <Fragment>
            <button  type="submit" id='btnSubmit' className=" btn btn-primary">Submit</button>
        </Fragment>
    );
};