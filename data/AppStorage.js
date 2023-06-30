import AsyncStorage from "@react-native-async-storage/async-storage";

//save new data into the asyncStorage
export const storeData = (data) => {
    try {
        AsyncStorage.setItem("APPDATA", JSON.stringify(data));
        return "stored"
    } catch (error) {
        throw error;
    }
};

//get data from the asyncStorage
export const getData = () => {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem("APPDATA").then(value => {
            if (value != null) {
                resolve(value);
            } else {
                reject(Error("Something went wrong"));
            }
        })
    })
};