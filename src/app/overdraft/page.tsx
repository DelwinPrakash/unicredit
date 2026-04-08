import Link from "next/link";
import PageHeader from "../../components/PageHeader";
import LoanSidebar from "../../components/LoanSidebar";
import { Zap, FileText, BadgeCheck, ArrowRight } from "lucide-react";


export const metadata = {
  title: "Overdraft - Unicredit",
};

export default function Overdraft() {
  return (
    <>
      <PageHeader title="Overdraft" breadcrumb="Overdraft" />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap lg:flex-nowrap gap-8">
            <div className="w-full lg:w-3/4">
              <div className="mb-6 rounded overflow-hidden">
                <img src="/asset/img/services-lg.jpg" alt="Overdraft" className="w-full h-auto" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Get Overdraft</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You need a loan to start a new business, expand an existing one, or need cash to take advantage of an opportunity, our expert commercial lenders at unicredit will work with you to determine the smartest loan for your business.
              </p>
              
              <h4 className="text-xl font-bold text-blue-600 mb-4">We&apos;re in business to help your business!</h4>
              
              <p className="text-gray-600 leading-relaxed mb-8">
                If you&apos;re in the market for a loan, we encourage you to give us a call or come in for a chat. If you prefer to communicate electronically, please fill out this contact form, our representative will get in touch with you shortly. At unicredit, we understand the market and we care about our customers financial well-being!
              </p>

              <div className="flex flex-wrap md:flex-nowrap gap-6 items-center mb-8">
                <div className="w-full md:w-1/2 rounded overflow-hidden">
                  <img src="/asset/img/single-services.jpg" alt="Documents" className="w-full h-auto" />
                </div>
                <div className="w-full md:w-1/2">
                  <h5 className="text-lg font-bold text-gray-800 mb-4">Still thinking? When it comes to.</h5>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm">
                    <li>Term Loan</li>
                    <li>Commercial Mortgages.</li>
                    <li>Equipment / Machinery Loans.</li>
                    <li>Construction / Development Loans.</li>
                    <li>Unsecured Business Loan</li> 
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
