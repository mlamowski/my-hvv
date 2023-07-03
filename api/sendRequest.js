import React from 'react'
import Crypto from 'crypto-browserify'
import createSignature from './createSignature'


export default async function sendRequest(reqBody, path) {

    const response = await fetch('https://gti.geofox.de/gti/public' + path, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'geofox-auth-user': 'AlexanderFarwer',
            'geofox-auth-signature': createSignature(reqBody),
            'X-TraceId': '82c406b4-5ddf-4f86-83e7-b20d630a6392',
            'Content-Length': '2',
            'Host': 'gti.geofox.de',
            'Connection': 'Keep-Alive'
            
    
        },
        
        body: 
            JSON.stringify(reqBody) 
    });

    const data = await response.json();

    if (data.error) {
        throw new Error(data.error);
    }
    
    return data;
}
