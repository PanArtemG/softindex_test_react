export const actionTypes = {
    LIST_UPDATE: 'LIST_UPDATE',
    LIST_ADD_DATA: 'LIST_ADD_DATA',
    LIST_REMOVE_DATA: 'LIST_REMOVE_DATA',
    LIST_SORT_DATA: 'LIST_SORT_DATA'
};

export const list = {
    update: () => ({
        type: actionTypes.LIST_UPDATE,
    }),
    add: data => ({
        type: actionTypes.LIST_ADD_DATA,
        payload: data
    }),
    remove: id => ({
        type: actionTypes.LIST_REMOVE_DATA,
        payload: id,
    }),
    sort: category => ({
        type: actionTypes.LIST_SORT_DATA,
        payload: category
    })
};