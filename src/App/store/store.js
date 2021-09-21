import {createStore} from 'redux';
import {RESOURCES, REST_ADR} from "../config/config";

const memeInitialState = {
    memes: [],
    images: []
}

export const MEME_ACTIONS = Object.freeze(
    {
        ADD_MEME: 'ADD_MEME',
        ADD_MEMES: 'ADD_MEMES',
        ADD_IMAGES: 'ADD_IMAGES',
        ADD_IMAGE: 'ADD_IMAGE'
    }
);

const MEME_ACTION_PRIVATE = Object.freeze({
    INIT: 'INIT',
    UPDATE_INIT_VALUES: 'UPDATE_INIT_VALUES'
});

function memeReducer(state=memeInitialState, action) {
    console.log(action.type);
    switch (action.type) {
        case MEME_ACTIONS.ADD_MEMES:
            return {
                ...state,
                memes : action.values
            }
        case MEME_ACTIONS.ADD_MEME:
            return {
                ...state,
                memes: [...state.memes, action.value]
            }
        case MEME_ACTIONS.ADD_IMAGES:
            return {
                ...state,
                images : action.values
            }
        case MEME_ACTIONS.ADD_IMAGE:
            return {
                ...state,
                images: [...state.images, action.value]
            }
        case MEME_ACTION_PRIVATE.UPDATE_INIT_VALUES:
            return {
                ...state,
                memes: action.values.memes,
                images: action.values.images
            }
        case MEME_ACTION_PRIVATE.INIT:
            const promise1 = fetch(`${REST_ADR}${RESOURCES.memes}`)
                .then(f => {
                    return f.json()
                });
            const promise2 = fetch(`${REST_ADR}${RESOURCES.images}`)
                .then(f => f.json());

            Promise.all([promise1, promise2]).then(values => {
                store.dispatch({type: MEME_ACTION_PRIVATE.UPDATE_INIT_VALUES, values: {memes: values[0], images: values[1]}})
            });
            return state;
        default:
            return state;
    }
}

export const store = createStore(memeReducer);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch({
    type: 'INIT'
});
