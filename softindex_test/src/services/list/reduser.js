import {actionTypes} from "./actions";
import {listUpdate, updateDataStorage} from "./operation";

const initialState = [];

export const listReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case actionTypes.LIST_UPDATE:
            payload = listUpdate();
            console.log(state);
            return [...state, ...payload];
        case actionTypes.LIST_UPDATE_MESSAGE:
            console.log(actionTypes.LIST_UPDATE_MESSAGE);
            return state;
        case actionTypes.LIST_ADD_DATA:
            updateDataStorage(payload);
            console.log(`${actionTypes.LIST_ADD_DATA} payload = ${payload}`);
            console.log(payload);
            return [...state, payload];
        default:
            return state
    }
};