const LOCAL_STORAGE_KEY = 'chatAppData';

export const loadData = () => {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || null;
};

export const saveData = (data) => {
    return localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
};