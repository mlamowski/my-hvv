import React from 'react'
import Crypto from 'crypto-browserify'

export default function createSignature(requestBody) {


    return Crypto.createHmac('sha1','iJRu{/}si2pu')
    .update(JSON.stringify(requestBody))
    .digest('base64')
      

}
