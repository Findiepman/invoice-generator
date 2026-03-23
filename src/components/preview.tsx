import type { Invoice } from "../types/types";
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import './Preview.css'



interface PreviewProps {
    invoice: Invoice;
}

export function Preview({ invoice }: PreviewProps) {
    const subtotal: number = invoice.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const vatPercentage = Number.parseFloat(invoice.btw) || 0;
    const vatAmount = subtotal * (vatPercentage / 100);
    const total = subtotal + vatAmount;

    const downloadPDF = async () => {
        const element = document.getElementById('invoice-page');
        if (!element) return;

        const canvas = await html2canvas(element, {
            scale: 2,
            backgroundColor: '#0d0d0d',
            useCORS: true,
        });

        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();

        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save(`factuur-${invoice.invoiceNumber || 'onbekend'}.pdf`);
    };

    return (
        <div className="preview-wrapper">
            <button className="pdf-download-btn" onClick={downloadPDF}>Download PDF</button>
            <div className="preview-page" id="invoice-page">

                {/* ======= HEADER ======= */}
                <div className="inv-header">
                    <div className="inv-header-left">
                        <h2 className="inv-brand">{invoice.Company.companyName || 'BEDRIJFSNAAM'}</h2>
                    </div>
                    <div className="inv-header-right">
                        <h1 className="inv-title">FACTUUR</h1>
                    </div>
                </div>

                {/* ======= COMPANY DETAILS ======= */}
                <div className="inv-company-details">
                    <p>{invoice.Company.companyAdress}</p>
                    <p>{invoice.Company.companyEmail}</p>
                </div>

                <div className="inv-line" />

                {/* ======= BILL TO + META ======= */}
                <div className="inv-info-row">
                    <div className="inv-bill-to">
                        <p className="inv-section-label">FACTUUR AAN</p>
                        <p className="inv-client-name">{invoice.Customer.customerName || '—'}</p>
                        <p className="inv-client-detail">{invoice.Customer.customerAdress}</p>
                        <p className="inv-client-detail">{invoice.Customer.customerEmail}</p>
                    </div>
                    <div className="inv-meta">
                        <div className="inv-meta-item">
                            <span className="inv-meta-label">FACTUURNUMMER</span>
                            <span className="inv-meta-val">{invoice.invoiceNumber || '—'}</span>
                        </div>
                        <div className="inv-meta-item">
                            <span className="inv-meta-label">DATUM</span>
                            <span className="inv-meta-val">{invoice.date || '—'}</span>
                        </div>
                        <div className="inv-meta-item">
                            <span className="inv-meta-label">VERVALDATUM</span>
                            <span className="inv-meta-val">{invoice.paymentTerms || '—'}</span>
                        </div>
                    </div>
                </div>

                <div className="inv-line" />

                {/* ======= ITEMS TABLE ======= */}
                <table className="inv-tbl">
                    <thead>
                        <tr>
                            <th style={{ textAlign: 'left', width: '50%' }}>OMSCHRIJVING</th>
                            <th style={{ textAlign: 'center', width: '15%' }}>AANTAL</th>
                            <th style={{ textAlign: 'right', width: '15%' }}>PRIJS</th>
                            <th style={{ textAlign: 'right', width: '20%' }}>BEDRAG</th>
                        </tr>
                    </thead>
                    <tbody>
                        {invoice.items.length === 0 && (
                            <tr><td colSpan={4} style={{ textAlign: 'center', color: '#555', fontStyle: 'italic', padding: '24px 0' }}>Geen items</td></tr>
                        )}
                        {invoice.items.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name || '—'}</td>
                                <td style={{ textAlign: 'center' }}>{item.quantity}</td>
                                <td style={{ textAlign: 'right' }}>€{item.price.toFixed(2)}</td>
                                <td style={{ textAlign: 'right', fontWeight: 600 }}>€{(item.price * item.quantity).toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="inv-line" />

                {/* ======= TOTALS ======= */}
                <div className="inv-totals">
                    <div className="inv-totals-row">
                        <span>SUBTOTAAL</span>
                        <span>€{subtotal.toFixed(2)}</span>
                    </div>
                    <div className="inv-totals-row">
                        <span>BTW ({vatPercentage}%)</span>
                        <span>€{vatAmount.toFixed(2)}</span>
                    </div>
                    <div className="inv-totals-row inv-totals-total">
                        <span>TOTAAL</span>
                        <span>€{total.toFixed(2)}</span>
                    </div>
                </div>

                {/* ======= FOOTER ======= */}
                <div className="inv-footer">
                    <div className="inv-footer-left">
                        <p className="inv-section-label">BETAALGEGEVENS</p>
                        <p className="inv-footer-text">{invoice.Company.bankDetails}</p>
                        {invoice.kvkNummer ? <p className="inv-footer-text">KVK: {invoice.kvkNummer}</p> : null}
                        {invoice.btwNummer ? <p className="inv-footer-text">BTW-nr: NL{invoice.btwNummer}</p> : null}
                    </div>
                    <div className="inv-footer-right">
                        <p className="inv-footer-thanks">Bedankt voor uw vertrouwen.</p>
                    </div>
                </div>

            </div>
        </div>
    );
}