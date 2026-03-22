import type { Invoice } from "../types/types"

interface FormProps {
    invoice: Invoice
    setInvoice: (invoice: Invoice) => void
}


export function Form({ invoice, setInvoice }: FormProps) {
    const addItem = () => {
        setInvoice({ ...invoice, items: [...invoice.items, { name: '', price: 0, quantity: 1 }] });
    };

    return (
        <main>
            <input placeholder="Company Name"
            value={invoice.Company.companyName}
                onChange={(e) => setInvoice({ ...invoice, Company: { ...invoice.Company, companyName: e.target.value } })}>
            </input>
            <input placeholder="Company address"value={invoice.Company.companyAdress}
                onChange={(e) => setInvoice({ ...invoice, Company: { ...invoice.Company, companyAdress: e.target.value } })}>
            </input>
            <input placeholder="Company email"value={invoice.Company.companyEmail}
                onChange={(e) => setInvoice({ ...invoice, Company: { ...invoice.Company, companyEmail: e.target.value } })}>
            </input>
            <input placeholder="Company bankDetails"
                value={invoice.Company.bankDetails}
                onChange={(e) => setInvoice({ ...invoice, Company: { ...invoice.Company, bankDetails: e.target.value } })}>
            </input>

            <input placeholder="customer Name"value={invoice.Customer.customerName}
                onChange={(e) => setInvoice({ ...invoice, Customer: { ...invoice.Customer, customerName: e.target.value } })}>
            </input>

            <input placeholder="customer address" value={invoice.Customer.customerAdress}
                onChange={(e) => setInvoice({ ...invoice, Customer: { ...invoice.Customer, customerAdress: e.target.value } })}>
            </input>
            <input placeholder="customer email"value={invoice.Customer.customerEmail}
                onChange={(e) => setInvoice({ ...invoice, Customer: { ...invoice.Customer, customerEmail: e.target.value } })}>
            </input>

            <input placeholder="invoice number"
                value={invoice.invoiceNumber}
                onChange={(e) => setInvoice({ ...invoice, invoiceNumber: Number(e.target.value) })}>
            </input>
            <input placeholder="invoice date"
                value={invoice.date}
                onChange={(e) => setInvoice({ ...invoice, date: e.target.value })}>
            </input>
            <input placeholder="payment terms"
                value={invoice.paymentTerms}
                onChange={(e) => setInvoice({ ...invoice, paymentTerms: e.target.value })}>
            </input>
            <input placeholder="invoice VAT"
                value={invoice.vat}
                onChange={(e) => setInvoice({ ...invoice, vat: Number(e.target.value) })}
            >
            </input>

            {invoice.items.map((item, index) => (
                <div key={index}>
                    <input 
                        value={item.name} 
                        onChange={(e) => {
                            const updatedItems = [...invoice.items];
                            updatedItems[index] = { ...item, name: e.target.value };
                            setInvoice({ ...invoice, items: updatedItems });
                        }}
                    />
                    <input
                        value={item.price}
                        onChange={(e) => {
                            const updatedItems = [...invoice.items];
                            updatedItems[index] = { ...item, price: Number(e.target.value) };
                            setInvoice({ ...invoice, items: updatedItems });
                        }}
                    />
                    <input
                        value={item.quantity}
                        onChange={(e) => {
                            const updatedItems = [...invoice.items];
                            updatedItems[index] = { ...item, quantity: Number(e.target.value) };
                            setInvoice({ ...invoice, items: updatedItems });
                        }}
                    />
                    <button onClick={() => {
                        const updatedItems = invoice.items.filter((_, i) => i !== index);
                        setInvoice({ ...invoice, items: updatedItems });
                    }}>Remove</button>
                </div>
            ))}
            <button onClick={addItem}>Add item</button>
        </main>
    )
}