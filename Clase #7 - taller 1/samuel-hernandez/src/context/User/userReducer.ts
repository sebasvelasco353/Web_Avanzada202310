import {User} from "../../interfaces/interfaces";

type UserAction =
    | {type: "clear", payload: null}
    | {type: "set", payload: User};

export const userReducer = (state: User, action: UserAction) : User => {
    switch (action.type) {
        case "clear":
            return  {
                ...state,
                id: "INVALID",
                username: "none",
            }
        case "set":
            return {
                ...state,
                id: action.payload.id,
                username: action.payload.username,
            }
        default:
            return state;
    }
}