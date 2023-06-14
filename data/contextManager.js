import React, {useContext} from 'react'
import Station from '../models/Station';
import { myHvvContext } from '../data/myHvvContext';

class ContextManager {

    appData = useContext(myHvvContext)[0];
    setAppData;

    constructor() {
        setAppData = useContext(myHvvContext)[1];
    }
 
    getAppData = () => {
        return this.appData;
    }

    addFavorite = (newFavStation) => {
        //add fav
        let newFavorites = appData.favorites;
        newFavorites.push(newFavStation)
        setAppData(appData => ({
            favorites: newFavorites,
            recents: appData.recents,
        }));
    }

    addRecent = (newRecentStation) => {
        //add fav
        let newRecents = appData.recents;
        newRecents.push(newRecentStation)
        setAppData(appData => ({
            favorites: appData.favorites,
            recents: newRecents,
        }));
    }

    deleteFavorite = (stationToRemove) => {
        setAppData(appData => ({
            favorites: appData.favorites.filter(favorite => favorite.id !== stationToRemove.id),
            recents: appData.recents,
        }));
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