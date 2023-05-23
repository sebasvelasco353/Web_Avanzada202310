import { SessionState } from "../../interfaces/interfaces";

type SessionAction =
    | {type : 'toggle', payload: boolean}

export const sessionReducer = (state: SessionState, action: SessionAction) : SessionState => {

    switch (action.type) {
        case 'toggle':
            return {
                ...state,
                logged: action.payload
            };
        default:
            return state;
    }
}