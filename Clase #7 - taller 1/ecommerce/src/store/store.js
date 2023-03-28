import {createStore} from 'redux';

const initialState = {
    showModal: false
}

const showModal = 'ShowModal'
const hideModal = 'HideModal'

function counterReducer(state = initialState, action){
    switch(action.type) {
        case 'ShowModal':
            return {...state, showModal: true};
        case 'HideModal':
            return {...state, showModal: false};
        default:
        return state;
    }
}

const store = createStore(counterReducer);

export default store