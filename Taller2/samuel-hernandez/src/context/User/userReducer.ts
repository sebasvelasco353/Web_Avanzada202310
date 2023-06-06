import {User} from "../../interfaces/interfaces";

type UserAction =
    | { type: "clear", payload: null }
    | { type: "set", payload: User }
    | { type: "get", payload: null };

export const userReducer = (state: User, action: UserAction): User => {
    switch (action.type) {
        case "clear":
            return {
                ...state,
                uid: "INVALID",
                displayName: "none",
            }
        case "set":
            return {
                ...state,
                uid: action.payload.uid,
                displayName: action.payload.displayName,
            }
        case "get":
            return state;
        default:
            return state;
    }
}