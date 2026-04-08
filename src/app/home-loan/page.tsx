import Link from "next/link";
import PageHeader from "../../components/PageHeader";
import LoanSidebar from "../../components/LoanSidebar";
import { Zap, FileText, BadgeCheck, ArrowRight } from "lucide-react";


export const metadata = {
  title: "Home Loan - Unicredit",
};

export default function HomeLoan() {
  return (
    <>
      <PageHeader title="Home Loan" breadcrumb="Home Loan" />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap lg:flex-nowrap gap-8">
            <div className="w-full lg:w-3/4">
              <div className="mb-6 rounded overflow-hidden">
                <img src="/asset/img/services-home.jpg" alt="Home Loan" className="w-full h-auto" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Home Loan</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                These are the most common types of secured loans availed of by borrowers. As the name
                suggests, home loans are taken for the purchase or construction of a home by the borrower.
                Here, the home itself acts as a security for the lender. However, while the home is the primary
                security, the lender may require the borrower to furnish collateral security as well depending
                upon the borrower&apos;s profile and the valuation of the home. This can either be a fixed deposit
                or any other asset. Home loans are long-term loans and the loan tenure can range from 10
                years to as long as 25 years. They are usually high-ticket loans running into lakhs and also the
                most affordable ones. The home loan interest rates start anywhere between 7% per annum to
                7.5% per annum. The loan needs to be repaid in Equated Monthly Installment (EMIs). The
                Loan-to-Value (LTV) ratio is usually 80%. It means, the borrower can avail of a loan up to
                80% of the property value.
              </p>

              <div className="flex flex-wrap md:flex-nowrap gap-6 items-center mb-8">
                <div className="w-full md:w-1/2 rounded overflow-hidden">
                  <img src="/asset/img/single-services.jpg" alt="Documents" className="w-full h-auto" />
                </div>
                <div className="w-full md:w-1/2">
                  <h5 className="text-lg font-bold text-gray-800 mb-4">The criteria of eligibility depend on the type of home loan. Some of the criteria are:</h5>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm">
                    <li>A reasonable score of credit</li>
                    <li>The continuous flow of income</li>
                    <li>Age should be between 23 -60 years</li>
                    <li>Some collateral like FDs, non-movable property, investments, etc</li> 
                    <li>Good connection with bank</li> 
                    <li>The Debt Repayment history should be a timely one.</li>  
                  </ul>
                </div>
              </div>

              <hr className="border-gray-200 mb-8" />
              
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Home loans offer various features and benefits, such as .</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm mb-8">
                <li>The opportunity to own a home with a lower initial cost and flexible repayment options</li>
                <li>Tax benefits on the interest and principal amount of the loan</li>
                <li>Low-interest rates compared to other kinds of loans</li>
                <li>The choice between fixed and floating interest rates</li> 
                <li>The option to buy new, pre-owned, and under-construction properties</li> 
                <li>The facility to transfer the loan balance to another lender</li>  
                <li>The potential for property appreciation and wealth building</li>  
                <li>The savings from paying rent</li>  
              </ul>

              <hr className="border-gray-200 mb-8" />
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Loan Simple Process</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-center">
                <div className="bg-gray-50 p-6 rounded border border-gray-100">
                  <div className="text-blue-600 mb-4 flex justify-center">
                    <Zap className="w-10 h-10" />
                  </div>
                  <h4 className="font-bold text-gray-800">Simple procedure</h4>
                </div>
                <div className="bg-gray-50 p-6 rounded border border-gray-100">
                  <div className="text-blue-600 mb-4 flex justify-center">
                    <FileText className="w-10 h-10" />
                  </div>
                  <h4 className="font-bold text-gray-800">Less Document</h4>
                </div>
                <div className="bg-gray-50 p-6 rounded border border-gray-100">
                  <div className="text-blue-600 mb-4 flex justify-center">
                    <BadgeCheck className="w-10 h-10" />
                  </div>
                  <h4 className="font-bold text-gray-800">Need Guarantors</h4>
                </div>
              </div>

              <hr className="border-gray-200 mb-8" />
              
              <div className="flex gap-4">
                <Link href="/apply-now" className="bg-blue-600 text-white font-bold py-2 px-6 rounded hover:bg-blue-700 transition">
                  Apply Loan
                </Link>
                <Link href="/contact" className="bg-gray-800 text-white font-bold py-2 px-6 rounded hover:bg-gray-900 transition">
                  Contact Now
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-1/4">
              <LoanSidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
