import type { Invoice } from "../types/types";


interface PreviewProps {
    invoice: Invoice;
}

export function Preview({ invoice }: PreviewProps) {
    return (
        <main>
            <p>{invoice.Company.companyName}</p>
            <p>{invoice.Company.companyEmail}</p>
            <p>{invoice.Company.companyAdress}</p>

            <p>{invoice.Customer.customerName}</p>
            <p>{invoice.Customer.customerEmail}</p>
            <p>{invoice.Customer.customerAdress}</p>

            <p>{invoice.invoiceNumber}</p>
            <p>{invoice.date}</p>
            <p>{invoice.paymentTerms}</p>
            <p>{invoice.vat}</p>
            {invoice.items.map((item, index) => (
                <div key={index}>
                    <p>{item.name}</p>
                    <p>${item.price * item.quantity}</p>
                    <p>{item.quantity}</p>
                </div>
            ))}
        </main>
    );
}