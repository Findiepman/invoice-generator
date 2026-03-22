import type { Invoice } from "../types/types";

interface PreviewProps {
  invoice: Invoice;
}

export function Preview({ invoice }: PreviewProps) {
  return (
    <div>Hello from the preview!</div>
  );
}