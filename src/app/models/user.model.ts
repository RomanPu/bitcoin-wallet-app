export interface User {
    name: string
    email: string
    phone: string
    balance: number
    currencyCode: string
    moves: Move[]
}

export interface Move {
    toId: string
    to: string
    at: number
    amount: number
}