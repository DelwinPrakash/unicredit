import Link from "next/link";
import PageHeader from "../../components/PageHeader";
import LoanSidebar from "../../components/LoanSidebar";
import { Zap, FileText, BadgeCheck, ArrowRight } from "lucide-react";


export const metadata = {
  title: "Car Loan - Unicredit",
};

export default function CarLoan() {
  return (
    <>
      <PageHeader title="Car Loan" breadcrumb="Car Loan" />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap lg:flex-nowrap gap-8">
            <div className="w-full lg:w-3/4">
              <div className="mb-6 rounded overflow-hidden">
                <img src="/asset/img/services-car.jpg" alt="Car Loan" className="w-full h-auto" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Get Car loans</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                These are the loans taken for the purchase of the vehicle. Vehicles can include both passenger
                and commercial vehicles as well as two-wheelers, four-wheelers and heavy vehicles. Here,
                the vehicle acts as a primary security for the lender. In the event of non-repayment, the lender
                can seize the vehicle. The interest rate on vehicle loans can start anywhere between 7% per
                annum to 7.5% per annum. The LTV depends upon the type of vehicle. For certain vehicle
                loans, the lender can even offer a loan of up to 100% of the vehicle&apos;s value.
              </p>

              <h4 className="text-xl font-bold text-blue-600 mb-2">No collateral needed</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                To get a car loan, you technically don&apos;t need any collateral. This is because your car will automatically
                serve as the collateral for the loan.
              </p>

              <h4 className="text-xl font-bold text-blue-600 mb-2">Great for credit history</h4>
              <p className="text-gray-600 leading-relaxed mb-8">
                Even if you have poor credit, you&apos;re likely still able to obtain an auto loan. The great thing about car
                payments is that they actually help your credit history, as long as you stay on top of payment deadlines.
              </p>

              <div className="flex flex-wrap md:flex-nowrap gap-6 items-center mb-8">
                <div className="w-full md:w-1/2 rounded overflow-hidden">
                  <img src="/asset/img/single-services.jpg" alt="Documents" className="w-full h-auto" />
                </div>
                <div className="w-full md:w-1/2">
                  <h5 className="text-lg font-bold text-gray-800 mb-4">Still thinking? When it comes to.</h5>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm">
                    <li>Less stress</li>
                    <li>Less documentation</li>
                    <li>Specialized teams</li>
                    <li>Excellent customer service</li>
                    <li>Great loan products</li>
                  </ul>
                </div>
              </div>

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
