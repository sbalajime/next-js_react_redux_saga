import { GET_JOKE } from '../actions';
import {HYDRATE} from 'next-redux-wrapper';

const INIT_STATE = {
    loading: false, err: false, msg: '', joke: {} 
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case HYDRATE:
            console.log('hydrate', action.payload)
            return {...state, ...action.payload.jokeReducer};
        case GET_JOKE.REQUEST:
            console.log('req going');            
            return { ...state, loading: true, err: false, msg: '', joke: {} };
        case GET_JOKE.SUCCESS:
            console.log('req success', action.payload); 
            return { ...state, loading: false, err: false, msg: action.payload.type, joke: action.payload };
        case GET_JOKE.FAILURE:            
            console.log('req failure'); 
            return { ...state,  loading: false, err: true, msg: '', joke: {}  };
        default: return { ...state };
    }
}
