import React, {useContext, Component} from 'react'
import Station from '../models/Station';
import { myHvvContext } from '../data/myHvvContext';
import { storeData } from './AppStorage';

// has the global context and is used to interact with it 
// it provides the appdata usestate to other components 
// and takes new data from other places and saves them into the appdata usestate and saves it into the asyncStorage
class ContextManager {

    appData = useContext(myHvvContext)[0];
    setAppData;

    constructor() {
        setAppData = useContext(myHvvContext)[1];
    }

    //return appdata state
    getAppData = () => {
        return this.appData;
    }


    //add a station to the favorite list
    //prevents the same station from being added twice
    addFavorite = (newFavStation) => {

        //check if station is allready in the fav list
        if (this.appData.favorites.some(obj => obj.id === newFavStation.id)) { //uses .some method to check if there is already a station with that id 
            //station allready in the list
            console.log("station allready in list");
        } else {
            //add fav
            let newFavorites = appData.favorites;
            newFavorites.push(newFavStation)
            setAppData(appData => ({
                favorites: newFavorites,
                recents: appData.recents,
            }));
            //storeData(this.appData);
        }

    }


    //add a station to the recent list
    //todo: if a station is already on the list then remove it first 
    //todo add stations to the beginning 
    addRecent = (newRecentStation) => {

        //remove station if it is already in the list 
        let newRecents = appData.recents.filter(recent => recent.id !== newRecentStation.id);
        newRecents.unshift(newRecentStation)
        setAppData(appData => ({
            favorites: appData.favorites,
            recents: newRecents,
        }));

        newRecents.forEach(element => {
            console.log(element.station);
        });

        //console.log(storeData(this.appData));

    }

    


    //delete a favorite 
    deleteFavorite = (stationToRemove) => {
        setAppData(appData => ({
            favorites: appData.favorites.filter(favorite => favorite.id !== stationToRemove.id),
            recents: appData.recents,
        }));

        console.log("Favs len: " + appData.favorites.length);
        for (const fav in appData.favorites) {
            console.log(fav);
        }

        //console.log(storeData(appData));
    }

    //delete all recents
    deleteRecents = () => {
        setAppData(appData => ({
            favorites: appData.favorites,
            recents: [],
        }));

        //console.log(storeData(appData));
    }
}
  
export default ContextManager;

// how to use: 

// init:
// import ContextManager from '../data/contextManager';
// const myContextManager = new ContextManager();

// to add station:
// myContextManager.addFavorite(new Station())

// to delete:
// myContextManager.deleteFavorite(stationObject)

// to access data state: 
// appData = myContextManager.getAppData(); returns the state