import sendRequest from "./sendRequest";

const PATH = '/departureList';


export const getDepartureList = (STATION) => {

    const BODY = 
    { 
        "version": 55, 
        "station": STATION , 
        "time": { 
            "date": "heute", "time": "jetzt" 
        }, 
        "maxList": 10,  
        "maxTimeOffset": 60, 
        "useRealtime":true 
    }

    //console.log("departureListRequestBody: ")
    //console.log(BODY)

    return sendRequest(BODY,PATH);


}

export const getFilteredDepartureList = (STATION, SERVICE_ID) => {

    const BODY = 
    { 
        "version": 55, 
        "station": STATION , 
        "time": { 
            "date": "heute", "time": "jetzt" 
        }, 
        "maxList": 10, 
        "filter": {
            "serviceID": SERVICE_ID,
        },
        "maxTimeOffset": 60, 
        "useRealtime":true 
    }

    //console.log("departureListRequestBody: ")
    //console.log(BODY)

    return sendRequest(BODY,PATH);


}
