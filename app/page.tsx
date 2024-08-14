// app/page.tsx
// import PaymentForm from '../components/PaymentForm';

import PaymentForm from "./components/PaymentForm";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <PaymentForm />
    </div>
  );
}
