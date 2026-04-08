import Link from "next/link";
import PageHeader from "../../components/PageHeader";
import LoanSidebar from "../../components/LoanSidebar";
import { Zap, FileText, BadgeCheck, ArrowRight } from "lucide-react";


export const metadata = {
  title: "Personal Loan - Unicredit",
};

export default function PersonalLoan() {
  return (
    <>
      <PageHeader title="Personal Loan" breadcrumb="Business Loan" />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap lg:flex-nowrap gap-8">
            <div className="w-full lg:w-3/4">
              <div className="mb-6 rounded overflow-hidden">
                <img src="/asset/img/services-lg.jpg" alt="Personal Loan" className="w-full h-auto" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Get Personal Loan</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                These are one of the most sought-after bank loans in India. Personal loans are loans extended
                by banks or financial institutions without any collateral security. It is essentially a loan
                against the income of the borrower. The key features of personal loans are that it does not
                require any collateral security, and there is no restriction as to the end use of the borrowed
                funds. The borrower can utilise the amount borrowed for any purpose, be it medical
                emergencies, marriage, education of the children, purchasing any asset or travelling. The
                amount of personal loan that a borrower can avail of depends upon the income of the
                borrower and his/her CIBIL score. Further, the rates of interest on personal loans can range
                anywhere from 8% per annum to 10% per annum.
              </p>
              
              <p className="text-gray-600 leading-relaxed mb-8">
                We can see an increase in several personal loans for different purposes in recent times. Many
                reasons exist for the increase in personal loans like low rates of interest, liquidity, etc. The
                documents required are:
              </p>

              <div className="flex flex-wrap md:flex-nowrap gap-6 items-center mb-8">
                <div className="w-full md:w-1/2 rounded overflow-hidden">
                  <img src="/asset/img/single-services.jpg" alt="Documents" className="w-full h-auto" />
                </div>
                <div className="w-full md:w-1/2">
                  <h5 className="text-lg font-bold text-gray-800 mb-4">For Salaried Applicants:</h5>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm">
                    <li>Application Form along with Photograph</li>
                    <li>Proof of Identity and Address</li>
                    <li>Bank Account Statement of last 6 months</li>
                    <li>Recent Salary Slip</li>
                    <li>Form 16</li> 
                  </ul>
                </div>
              </div>

              <hr className="border-gray-200 mb-8" />
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Simple Loan Process</h2>
              
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
                  <h4 className="font-bold text-gray-800">No Security or Guarantors</h4>
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
