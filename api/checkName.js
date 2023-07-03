import sendRequest from "./sendRequest";

const PATH = '/checkName';


export const getCheckName = (INPUT) => {

    const BODY = {"version":53,"theName":{"name": INPUT ,"combinedName":""},"maxList":5,"allowTypeSwitch":false}

    return sendRequest(BODY,PATH);


}

export const getOneCheckName = (INPUT) => {

    const BODY = {"version":53,"theName":{"name": INPUT ,"combinedName":""},"maxList":1,"allowTypeSwitch":false}

    return sendRequest(BODY,PATH);


}