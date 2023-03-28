import {Item, ModalState} from "../../interfaces/interfaces";

type ModalAction =
    | {type: "set", payload: Item}
    | {type: "clear"};

export const modalReducer = (state:  ModalState, action: ModalAction) : ModalState => {
    switch (action.type) {
        case "set":
            return {
                isOpen: true,
                item: action.payload,
            }
        case "clear":
            return {
                isOpen: false,
                item: {} as Item,
            }
        default:
            return state;
    }
}