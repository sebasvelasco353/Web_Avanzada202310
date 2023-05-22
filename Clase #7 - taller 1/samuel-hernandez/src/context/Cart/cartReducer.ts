import {CartItem, CartState} from "../../interfaces/interfaces";

type CartAction =
    | { type: "add", payload: CartItem }
    | { type: "remove", payload: {id: string, item: CartItem } }
    | { type: "update", payload: { id: string, item: CartItem } }
    | { type: "clear"};

export const cartReducer = (state: CartState, action: CartAction): CartState => {
    switch (action.type) {
        case "clear":
            return {
                total: 0,
                items: [],
                productNumber: 0,
                itemNumber: 0,
            }
        case "add":
            return {
                ...state,
                items: state.items.concat(action.payload),
                itemNumber: state.itemNumber + action.payload.quantity,
                productNumber: state.productNumber + 1,
                total: state.total + (action.payload.price * action.payload.quantity)
            }
        case "remove":
            return {
                ...state,
                items: state.items.filter(i => i.id !== action.payload.id),
                itemNumber: state.itemNumber - action.payload.item.quantity,
                productNumber: state.productNumber - 1,
                total: state.total - (action.payload.item.price * action.payload.item.quantity)
            }
        case "update":
            const oldItem = state.items.find(i => i.id === action.payload.id);
            const hadQuantity = oldItem && oldItem.quantity;
            const newQuantity = action.payload.item.quantity;
            const diff = hadQuantity ? Math.abs(hadQuantity - newQuantity) : 0;

            const newState =  {
                ...state,
                items: state.items.map(i => {
                    if (i.id !== action.payload.id) return i;
                    return action.payload.item;
                }),
                itemNumber: state.itemNumber + diff
            }

            const newTotal = () => {
                let sum = 0;
                newState.items.forEach(it => {
                    sum += it.quantity * it.price;
                });
                return sum;
            }

            return {
                ...newState,
                total: newTotal()
            }
        default:
            return state;
    }
}