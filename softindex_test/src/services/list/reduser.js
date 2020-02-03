import {actionTypes} from "./actions";
import {loadStorage, removeUserStorage, sortData, updateDataStorage} from "./operation";

const initialState = [];

export const listReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case actionTypes.LIST_UPDATE:
            payload = loadStorage();
            return [...payload];
        case actionTypes.LIST_ADD_DATA:
            updateDataStorage(payload);
            return [...state, payload];
        case actionTypes.LIST_REMOVE_DATA:
            payload = removeUserStorage(payload);
            return [...payload];
        case actionTypes.LIST_SORT_DATA:
            payload = sortData(payload);
            return [...payload];
        default:
            return state
    }
};