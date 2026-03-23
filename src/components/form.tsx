import type { Invoice } from "../types/types"
import './form.css'

interface FormProps {
    invoice: Invoice
    setInvoice: (invoice: Invoice) => void
}


export function Form({ invoice, setInvoice }: FormProps) {
    const addItem = () => {
        setInvoice({ ...invoice, items: [...invoice.items, { name: '', price: 0, quantity: 1 }] });
    };

    return (
        <div className="container">
            <div className="header">
                <h3>Invoice Form</h3>
            </div>

            <main className="form-container">
                <div className="form-section">
                    <p className="form-section-title">From (Your Company)</p>
                    <input className="input-item" placeholder="Company Name"
                        value={invoice.Company.companyName}
                        onChange={(e) => setInvoice({ ...invoice, Company: { ...invoice.Company, companyName: e.target.value } })} />
                    <input className="input-item" placeholder="Address"
                        value={invoice.Company.companyAdress}
                        onChange={(e) => setInvoice({ ...invoice, Company: { ...invoice.Company, companyAdress: e.target.value } })} />
                    <input className="input-item" placeholder="Email"
                        value={invoice.Company.companyEmail}
                        onChange={(e) => setInvoice({ ...invoice, Company: { ...invoice.Company, companyEmail: e.target.value } })} />
                    <input className="input-item" placeholder="Bank Details"
                        value={invoice.Company.bankDetails}
                        onChange={(e) => setInvoice({ ...invoice, Company: { ...invoice.Company, bankDetails: e.target.value } })} />
                </div>

                <div className="form-section">
                    <p className="form-section-title">Bill To (Customer)</p>
                    <input className="input-item" placeholder="Customer Name"
                        value={invoice.Customer.customerName}
                        onChange={(e) => setInvoice({ ...invoice, Customer: { ...invoice.Customer, customerName: e.target.value } })} />
                    <input className="input-item" placeholder="Address"
                        value={invoice.Customer.customerAdress}
                        onChange={(e) => setInvoice({ ...invoice, Customer: { ...invoice.Customer, customerAdress: e.target.value } })} />
                    <input className="input-item" placeholder="Email"
                        value={invoice.Customer.customerEmail}
                        onChange={(e) => setInvoice({ ...invoice, Customer: { ...invoice.Customer, customerEmail: e.target.value } })} />
                </div>

                <div className="form-section">
                    <p className="form-section-title">Invoice Details</p>
                    <input className="input-item" placeholder="Invoice Number"
                        value={invoice.invoiceNumber}
                        onChange={(e) => setInvoice({ ...invoice, invoiceNumber: Number(e.target.value) })} />
                    <input className="input-item" placeholder="Date"
                        value={invoice.date}
                        onChange={(e) => setInvoice({ ...invoice, date: e.target.value })} />
                    <input className="input-item" placeholder="Payment Terms"
                        value={invoice.paymentTerms}
                        onChange={(e) => setInvoice({ ...invoice, paymentTerms: e.target.value })} />
                    <input className="input-item" placeholder="VAT %"
                        value={invoice.btw}
                        onChange={(e) => setInvoice({ ...invoice, btw: Number(e.target.value) })} />
                    <input className="input-item" placeholder="BTW Nummer"
                        value={invoice.btwNummer}
                        onChange={(e) => setInvoice({ ...invoice, btwNummer: e.target.value })} />
                    <input className="input-item" placeholder="KVK Nummer"
                        value={invoice.kvkNummer}
                        onChange={(e) => setInvoice({ ...invoice, kvkNummer: e.target.value })} />
                </div>

                <div className="form-section">
                    <p className="form-section-title">Items</p>
                    <div className="items-header">
                        <span>Description</span>
                        <span>Unit Price</span>
                        <span>Qty</span>
                        <span></span>
                    </div>
                    {invoice.items.map((item, index) => (
                        <div key={index} className="form-row">
                            <input className="input-item" placeholder="Item description"
                                value={item.name}
                                onChange={(e) => {
                                    const updatedItems = [...invoice.items];
                                    updatedItems[index] = { ...item, name: e.target.value };
                                    setInvoice({ ...invoice, items: updatedItems });
                                }} />
                            <input className="input-item" placeholder="Price"
                                value={item.price}
                                onChange={(e) => {
                                    const updatedItems = [...invoice.items];
                                    updatedItems[index] = { ...item, price: Number(e.target.value) };
                                    setInvoice({ ...invoice, items: updatedItems });
                                }} />
                            <input className="input-item" placeholder="Qty"
                                value={item.quantity}
                                onChange={(e) => {
                                    const updatedItems = [...invoice.items];
                                    updatedItems[index] = { ...item, quantity: Number(e.target.value) };
                                    setInvoice({ ...invoice, items: updatedItems });
                                }} />
                            <button className="btn-remove" onClick={() => {
                                const updatedItems = invoice.items.filter((_, i) => i !== index);
                                setInvoice({ ...invoice, items: updatedItems });
                            }}>Remove</button>
                        </div>
                    ))}
                    <button className="btn-add" onClick={addItem}>+ Add Item</button>
                </div>
            </main>
        </div>
    )
}