import sendRequest from "./sendRequest";

const PATH = '/departureList';


export const getDepartureList = (INPUT) => {

    const BODY = 
    { 
        "version": 55, 
        "station": INPUT , 
        "time": { 
        "date": "heute", "time": "jetzt" 
 
        }, 
        "maxList": 10, 
        "maxTimeOffset": 200, 
        "useRealtime":true 
    }

    console.log(BODY)
    return sendRequest(BODY,PATH);


}
