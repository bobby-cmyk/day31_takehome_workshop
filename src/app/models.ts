export interface Item {
    key: string,
    imagePath : string,
    name: string,
    unitPrice: number
}

export interface UpdateItemEvent {
    key: string,
    delta: number
}

export interface Cart {
    lineItems: CartLineItem[],
    totalPrice: number
}

export interface CartLineItem {
    key: string,
    name: string,
    quantity: number,
    unitPrice: number,
    totalPrice: number
}