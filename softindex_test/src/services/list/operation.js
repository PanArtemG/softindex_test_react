const key = 'DataBase';

export const listUpdate = () => {
    console.log('listUpdate');
    return loadStorage()
};

export const removeUserStorage = (id) => {
    let storageDB = localStorage.getItem(key);

    if (storageDB) {
        storageDB = JSON.parse(storageDB);
        storageDB = storageDB.filter(el => {
            return el._id !== id
        });
        storageDB = JSON.stringify(storageDB);
        localStorage.setItem(key, storageDB);
        console.log(storageDB);
    }
    return loadStorage()
};

export const loadStorage = () => {
    console.log('LOAD STORAGE');
    let storageDB = localStorage.getItem(key);
    const data = [];
    console.log(storageDB);
    if (storageDB.length > 0 ) {
        storageDB = JSON.parse(storageDB);
        storageDB.forEach(el => {
            data.push(el);
        });
    } else {
        console.log('STORAGE EMPTY')
    }
    return data
};

export const updateDataStorage = values => {
    const data = loadStorage();
    if (data) {
        data.push(values);
        const updateData = JSON.stringify(data);
        localStorage.setItem('DataBase', updateData);

        console.log(data);
        console.log('ДОБАВИЛО');
    }
};