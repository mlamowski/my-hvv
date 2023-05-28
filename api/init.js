import sendRequest from "./sendRequest";

const PATH = '/init';
const BODY = {}

export const getInit = () => {

    return sendRequest(BODY,PATH);


}
