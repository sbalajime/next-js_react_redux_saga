import axios from 'axios';

const client = axios.create();

const request = options => {
    return client(options)
        .then(response => response.data)
        .catch(error => Promise.reject(error.response || error.message));
};

const createReqTypes = base => {
    const res = {};
    ['REQUEST', 'SUCCESS', 'FAILURE'].forEach(type => { res[type] = `${base}_${type}`; });
    return res;
}

const createGetReq = (endpoint, data) => {
    console.log('getREQ')
    return request({
        url: endpoint,
        method: 'get',
        params: data
    })
        .then( data  =>  data)
        .catch(data => ({ error: data }));
}

export { createGetReq, createReqTypes };
