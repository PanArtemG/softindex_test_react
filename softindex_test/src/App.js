import React from 'react';
import {Provider} from 'react-redux';
import {store} from   './services/store'
import {FormBlock, List} from "./components/";

function App() {
    return (
        <Provider store = {store}>
            <div className="App wrap d-flex vh-100 vw-100 m-0">
                <List/>
                <FormBlock/>
            </div>
        </Provider>
    );
}

export default App;
