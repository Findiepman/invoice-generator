export interface Customer {
    customerName: string,
    customerAdress: string,
    customerEmail: string,
}
export interface Company {
    companyName: string
    companyAdress: string
    companyEmail: string
    bankDetails: string
}
export interface Item {
    price: number
    name: string
    quantity: number
}

export interface Invoice {
    Customer: Customer
    Company: Company
    items: Item[]
    invoiceNumber: number
    date: string
    paymentTerms: string
    vat: number
}