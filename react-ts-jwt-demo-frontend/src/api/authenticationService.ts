import React from 'react';
import axios from 'axios';

const getToken = () => {
    return localStorage.getItem('USER_KEY');
}

const baseUrl = 'http://locahost:8080';

export const userLogin = (authRequest: any, baseUrl) => {
    return axios({
        method: 'POST',
        url: `${process.env.hostUrl} || ${baseUrl}}/api/v1/auth/login`,
        data: authRequest
    });
}

export const fetchUserData = (authRequest: any, baseUrl) => {
    return axios({
        method: 'GET',
        url: `${process.env.hostUrl} || ${baseUrl}}/api/v1/auth/userinfo`,
        headers: {
            'Authorization': 'Berear ' + getToken()
        }
    })
}