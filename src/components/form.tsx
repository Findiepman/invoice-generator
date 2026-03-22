import type { Invoice } from "../types/types"

interface FormProps {
    invoice: Invoice
    setInvoice: (invoice: Invoice) => void
}


export function Form({ invoice, setInvoice }: FormProps) {
    return(
        <div>Hello from the form!</div>
    )
}