import Link from "next/link";
import PageHeader from "../../components/PageHeader";
import LoanSidebar from "../../components/LoanSidebar";
import { Zap, FileText, BadgeCheck, ArrowRight } from "lucide-react";


export const metadata = {
  title: "Loan Against Property - Unicredit",
};

export default function LoanAgainstProperty() {
  return (
    <>
      <PageHeader title="Loan Against Property" breadcrumb="Loan Against Property" />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap lg:flex-nowrap gap-8">
            <div className="w-full lg:w-3/4">
              <div className="mb-6 rounded overflow-hidden">
                <img src="/asset/img/services-againstpropert.jpg" alt="Loan Against Property" className="w-full h-auto" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Loan Against Property</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                This is a kind of mortgage loan whereby the borrowers can avail of funds by mortgaging their
                property with the lender. Loan against property can be availed of against both residential and
                commercial property. The administration charges for loans against property are higher than
                for home loans. The funds can be used by the lender for either business or personal purposes.
                The LTV in case of a loan against property can be anywhere between 65% to 70%. Further,
                the interest rates on loans against property are also slightly higher as compared to those on
                home loans. The interest rate here starts from 8% per annum.
              </p>

              <h4 className="text-xl font-bold text-blue-600 mb-4">Below are some of the benefits of a Loan Against Property:</h4>
              
              <div className="space-y-4 mb-8">
                <div>
                  <h5 className="font-bold text-gray-800 mb-1">Long repayment tenure</h5>
                  <p className="text-gray-600 text-sm">LAP or Loan against Property has a long repayment tenure that can stretch up to 15 years.</p>
                </div>
                <div>
                  <h5 className="font-bold text-gray-800 mb-1">Lower interest rates</h5>
                  <p className="text-gray-600 text-sm">As compared to other unsecured products like Personal Loans, where the rate of interest is usually high, LAP has lower interest charges.</p>
                </div>
                <div>
                  <h5 className="font-bold text-gray-800 mb-1">Lower EMIs</h5>
                  <p className="text-gray-600 text-sm">The longer the tenure, the lower the EMI. Since the tenure of the Loan Against Property is longer, the EMIs also gets reduced. Thus, bringing down the burden of the loan.</p>
                </div>
                <div>
                  <h5 className="font-bold text-gray-800 mb-1">Easy to avail</h5>
                  <p className="text-gray-600 text-sm">You can easily avail LAP as it is a secured loan type and banks are willing to provide the credit. If you have a property, you can mortgage it with a reputed bank to get loan for any business or personal needs.</p>
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
