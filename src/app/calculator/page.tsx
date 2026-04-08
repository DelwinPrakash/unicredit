"use client";
import { useState } from "react";
import PageHeader from "../../components/PageHeader";

export default function Calculator() {
  const [principal, setPrincipal] = useState(1000000);
  const [months, setMonths] = useState(120);
  const [rate, setRate] = useState(8.5);

  let emi = 0;
  let totalInterest = 0;
  let totalPayment = 0;

  const p = principal;
  const r = rate / 12 / 100;
  const n = months;
  
  if (r === 0) {
    if (n > 0) {
      emi = Math.round(p / n);
      totalPayment = p;
      totalInterest = 0;
    }
  } else if (n > 0) {
    const emiCalc = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalAmount = emiCalc * n;
    const totalInt = totalAmount - p;
    
    emi = Math.round(emiCalc);
    totalPayment = Math.round(totalAmount);
    totalInterest = Math.round(totalInt);
  }

  return (
    <>
      <PageHeader title="EMI Calculator" breadcrumb="EMI Calculator" />
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap md:flex-nowrap gap-8 bg-white p-8 rounded shadow-lg">
            <div className="w-full md:w-2/3">
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-xl font-bold text-gray-800">Home Loan Amount</h4>
                  <div className="bg-blue-50 text-blue-800 font-semibold px-4 py-2 rounded">
                    ₹ {principal.toLocaleString("en-IN")}
                  </div>
                </div>
                <input 
                  type="range" 
                  min="100000" 
                  max="10000000" 
                  step="50000"
                  value={principal} 
                  onChange={(e) => setPrincipal(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>₹ 1L</span>
                  <span>₹ 1Cr</span>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-xl font-bold text-gray-800">Loan Months</h4>
                  <div className="bg-blue-50 text-blue-800 font-semibold px-4 py-2 rounded">
                    {months} Months
                  </div>
                </div>
                <input 
                  type="range" 
                  min="12" 
                  max="360" 
                  step="1"
                  value={months} 
                  onChange={(e) => setMonths(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>12 Months</span>
                  <span>360 Months</span>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-xl font-bold text-gray-800">Interest Rate</h4>
                  <div className="bg-blue-50 text-blue-800 font-semibold px-4 py-2 rounded">
                    {rate} %
                  </div>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="20" 
                  step="0.1"
                  value={rate} 
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>5%</span>
                  <span>20%</span>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/3 bg-blue-600 text-white p-8 rounded-lg text-center flex flex-col justify-center">
              <div className="mb-6">
                <h5 className="text-blue-200 font-medium mb-1">Loan EMI</h5>
                <h2 className="text-4xl font-bold">₹ {emi.toLocaleString("en-IN")}</h2>
              </div>
              <div className="mb-6">
                <h5 className="text-blue-200 font-medium mb-1">Total Interest Payable</h5>
                <h2 className="text-2xl font-bold">₹ {totalInterest.toLocaleString("en-IN")}</h2>
              </div>
              <div className="mb-8">
                <h5 className="text-blue-200 font-medium mb-1">Total Payment <br/> (Principal + Interest)</h5>
                <h2 className="text-2xl font-bold">₹ {totalPayment.toLocaleString("en-IN")}</h2>
              </div>
              <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded hover:bg-gray-100 transition shadow-md w-full">
                APPLY NOW
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
