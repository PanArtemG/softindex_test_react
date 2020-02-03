import {actionTypes} from "./actions";
import {listUpdate, removeUserStorage, updateDataStorage} from "./operation";

const initialState = [];

export const listReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case actionTypes.LIST_UPDATE:
            payload = listUpdate();
            console.log(payload);
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
        case actionTypes.LIST_REMOVE_DATA:
            //console.log("REMOVE");
            payload = removeUserStorage(payload);
            // payload = listUpdate();
            // console.log(payload);
            // console.log(state);
            return [...payload];
        default:
            return state
    }
};