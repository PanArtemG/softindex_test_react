export const actionTypes = {
    LIST_UPDATE: 'LIST_UPDATE',
    LIST_UPDATE_MESSAGE: 'LIST_UPDATE_MESSAGE',
    LIST_ADD_DATA: 'LIST_ADD_DATA'
};

export const list = {
    update: () => ({
        type: actionTypes.LIST_UPDATE,
    }),
    updateMess: () => ({
        type: actionTypes.LIST_UPDATE_MESSAGE,
    }),
    add: data => ({
        type: actionTypes.LIST_ADD_DATA,
        payload: data,
    })
};