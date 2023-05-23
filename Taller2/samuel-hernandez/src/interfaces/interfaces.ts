
// Items and Cart
export interface Item {
    id : string,
    name : string,
    description : string,
    stock : number,
    price : number,
    inStock : boolean,
}

export interface CartItem extends Item {
    quantity : number
}

export interface CartState {
    items : CartItem[]
    productNumber : number,
    itemNumber: number,
    total: number,
}

export interface ModalState {
    isOpen: boolean,
    item : Item,
    initialQuantity: number,
}

// Session and User
export interface User {
    id : string,
    username : string,
    email: string,
    hasSpent : number,
    isAdmin : boolean
}

export interface SessionState {
    logged : boolean
}
