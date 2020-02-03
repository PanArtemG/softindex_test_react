const key = 'DataBase';

export const loadStorage = () => {
    let storageDB = localStorage.getItem(key);
    const data = [];
    if (!!storageDB) {
        storageDB = JSON.parse(storageDB);
        storageDB.forEach(el => {
            data.push(el);
        });
    }
    return data
};

export const updateDataStorage = values => {
    const data = loadStorage();
    if (data) {
        data.push(values);
        const updateData = JSON.stringify(data);
        localStorage.setItem(key, updateData);
    }
};

export const removeUserStorage = id => {
    let storageDB = localStorage.getItem(key);
    if (storageDB) {
        storageDB = JSON.parse(storageDB);
        storageDB = storageDB.filter(el => {
            return el._id !== id
        });
        storageDB = JSON.stringify(storageDB);
        localStorage.setItem(key, storageDB);
    }
    return loadStorage()
};

export const sortData = category => {
    const data = loadStorage();

    switch (category) {
        case 'firstName':
            data.sort((a, b) => a[category].localeCompare(b[category]));
            return data;
        case 'lastName':
            data.sort((a, b) => a[category].localeCompare(b[category]));
            return data;
        case 'gender':
            data.sort((a, b) => a.gender - b.gender);
            return data;
        case 'age':
            data.sort((a, b) => a.age - b.age);
            return data;
        case 'reset':
            data.sort((a, b) => a._id - b._id);
            return data;
        default:
            return data
    }
};