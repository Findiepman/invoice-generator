import { useState } from "react"
import type { Invoice } from "./types/types"

function App() {
  const [invoice, setInvoice] = useState<Invoice>({
    Customer: { customerName: '', customerAdress: '', customerEmail: '' },
    Company: { companyName: '', companyAdress: '', companyEmail: '' },
    items: [],
    invoiceNumber: 1,
    date: '',
    paymentTerms: '',
    vat: 0,
  });

  return (
    <div>Hello world</div>
  )
}

export default App
