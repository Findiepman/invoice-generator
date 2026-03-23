# Invoice Generator

A client-side invoice generator built for freelancers and small businesses. Fill in your company details, client info, and line items — a live preview updates instantly on the right. Download the finished invoice as a PDF in one click.

![Invoice Generator](screenshot.png)

## Features

- **Live preview** — every keystroke updates the invoice in real time
- **Line item management** — add and remove items with auto-calculated subtotals
- **PDF export** — download a print-ready PDF using html2canvas + jsPDF
- **Full invoice fields** — company details, client info, invoice number, date, payment terms, BTW, KVK, bank details
- **VAT calculation** — automatic BTW amount and grand total
- **Dutch compliance** — includes BTW number, KVK number, and payment details

## Tech Stack

- React + TypeScript
- Vite
- html2canvas + jsPDF (PDF export)

## How It Works

Everything runs in the browser — no backend, no database. All invoice data lives in a single React `useState` object that both the form and preview read from. When you type in the form, the state updates and the preview re-renders instantly.

The PDF export uses html2canvas to screenshot the preview panel and jsPDF to wrap it into a downloadable A4 PDF.

## Setup

```bash
npm install
npm run dev
```

## Project Structure

```
invoice-generator/
├── src/
│   ├── App.tsx              — state + layout
│   ├── components/
│   │   ├── Form.tsx         — all inputs
│   │   └── Preview.tsx      — live invoice + PDF export
│   └── types/
│       └── types.ts         — Invoice, Company, Customer, Item interfaces
```