const key = 'DataBase';

export const listUpdate = () => {
    console.log('listUpdate');
    return loadStorage()
};

const loadStorage = () => {
    console.log('LOAD STORAGE');
    let storageDB = localStorage.getItem(key);
    const data = [];

    if (storageDB) {
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