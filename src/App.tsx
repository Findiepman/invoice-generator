import { useState } from "react"
import type { Invoice } from "./types/types"
import { Form } from "./components/form";
import { Preview } from "./components/preview";

function App() {
  const [invoice, setInvoice] = useState<Invoice>({
    Customer: { customerName: '', customerAdress: '', customerEmail: '' },
    Company: { companyName: '', companyAdress: '', companyEmail: '', bankDetails: '' },
    items: [],
    invoiceNumber: '',
    date: '',
    paymentTerms: '',
    btw: '',
    btwNummer: '',
    kvkNummer: ''
  });

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden', background: '#f0f2f5' }}>
      <div style={{ width: '50%', height: '100%', overflowY: 'auto' }}>
        <Form invoice={invoice} setInvoice={setInvoice} />
      </div>
      <div style={{ width: '50%', height: '100%', overflowY: 'auto', background: '#ffffff', marginLeft: '24px' }}>
        <Preview invoice={invoice} />
      </div>
    </div>
  )
}

export default App
