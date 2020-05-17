import { createGetReq } from '../request';

export const getjokeURL = id => createGetReq('https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=religious');
