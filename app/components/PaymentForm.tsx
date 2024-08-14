'use client';

import { useState } from 'react';

const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expirationMonth, setExpirationMonth] = useState('Month');
  const [expirationYear, setExpirationYear] = useState('Year');
  const [cvv, setCvv] = useState('');

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-300 via-blue-300 to-blue-500 p-6 w-full">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg border border-gray-200 p-6">
        <div className="relative mb-6">
          <div className="absolute inset-0 flex justify-between p-4">
            <div className="flex items-center space-x-2">
              <img src="/image/chip.png" alt="Chip" className="w-8" />
              <img src="/image/visa.png" alt="Visa" className="w-16" />
            </div>
          </div>
          <div className="bg-gray-800 text-white p-4 rounded-lg">
            <div className="text-xl font-bold mb-2">{cardNumber.padEnd(16, '•')}</div>
            <div className="flex justify-between">
              <div>
                <span className="text-sm">Card Holder</span>
                <div>{cardHolder || 'Full Name'}</div>
              </div>
              <div>
                <span className="text-sm">Expires</span>
                <div>{expirationMonth} / {expirationYear}</div>
              </div>
            </div>
          </div>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-black">Card Number</label>
            <input
              type="text"
              maxLength={16}
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm text-black placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black">Card Holder</label>
            <input
              type="text"
              value={cardHolder}
              onChange={(e) => setCardHolder(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm text-black placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-black">Expiration MM</label>
              <select
                name='dd'
                value={expirationMonth}
                onChange={(e) => setExpirationMonth(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm text-black placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="Month" disabled>Month</option>
                {[...Array(12).keys()].map(i => (
                  <option key={i} value={String(i + 1).padStart(2, '0')}>{String(i + 1).padStart(2, '0')}</option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-black">Expiration YY</label>
              <select
                value={expirationYear}
                onChange={(e) => setExpirationYear(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm text-black placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="Year" disabled>Year</option>
                {[...Array(10).keys()].map(i => (
                  <option key={i} value={2024 + i}>{2024 + i}</option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-black">CVV</label>
              <input
                type="text"
                maxLength={4}
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm text-black placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
