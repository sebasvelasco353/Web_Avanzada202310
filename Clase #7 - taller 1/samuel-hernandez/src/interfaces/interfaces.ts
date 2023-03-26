import exp from "constants";

export interface Item {
    id : string,
    name : string,
    description : string,
    stock : number,
    price : number
}

export interface CartItem extends Item {
    quantity : number
}

export interface User {
    id : string,
    username : string,
}

export interface UserState extends User {
    cart : CartItem[],
}

export interface SessionState {
    logged : boolean
}