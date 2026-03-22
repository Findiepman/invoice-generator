import { useState } from "react"
import type { Invoice } from "./types/types"
import { Form } from "./components/form";
import { Preview } from "./components/preview";

function App() {
  const [invoice, setInvoice] = useState<Invoice>({
    Customer: { customerName: '', customerAdress: '', customerEmail: '' },
    Company: { companyName: '', companyAdress: '', companyEmail: '', bankDetails: ''},
    items: [],
    invoiceNumber: 1,
    date: '',
    paymentTerms: '',
    vat: 0,
  });

  return (
    <div>
      <Form invoice={invoice} setInvoice={setInvoice} /> <Preview invoice={invoice} />
    </div>
  )
}

export default App
