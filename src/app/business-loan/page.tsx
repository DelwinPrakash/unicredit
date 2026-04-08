import Link from "next/link";
import PageHeader from "../../components/PageHeader";
import LoanSidebar from "../../components/LoanSidebar";
import { Zap, FileText, BadgeCheck, ArrowRight } from "lucide-react";


export const metadata = {
  title: "Business Loan - Unicredit",
};

export default function BusinessLoan() {
  return (
    <>
      <PageHeader title="Business Loan" breadcrumb="Business Loan" />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap lg:flex-nowrap gap-8">
            <div className="w-full lg:w-3/4">
              <div className="mb-6 rounded overflow-hidden">
                <img src="/asset/img/services-lg.jpg" alt="Business Loan" className="w-full h-auto" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Get Business Loan</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Uncertainties can strike the business anytime. In case a business is facing a financial crunch,
                then it can go for short-term business loans. These bank loans are structured to help
                businesses meet short-term uncertainties and financial crises. The eligibility criteria are
                simple, and the amount of loan that can be disbursed depends upon the profitability of the
                business and the profile of the borrower. The interest rates for short-term business loans can
                be anywhere between 1% and 1.5% per month, i.e., 12% to 18% per annum. The reason that
                business loans attract a higher interest rate than personal loans is that there is a chance of loss
                of borrowed funds in the business. In such cases, the risk falls on the shoulders of the lenders.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                One can benefit from a business loan for financing requirements of capital, broadening
                premises, and employing staff. The importance of Small Business loans are:
              </p>

              <h4 className="text-xl font-bold text-blue-600 mb-4">Benefits of Business Loan</h4>
              
              <div className="space-y-4 mb-8">
                <div>
                  <h5 className="font-bold text-gray-800 mb-1">Financial Flexibility</h5>
                  <p className="text-gray-600 text-sm">An online business loan provides essential working capital, ensuring flexibility in managing day-to-day expenses, seizing opportunities, and navigating cash flow fluctuations.</p>
                </div>
                <div>
                  <h5 className="font-bold text-gray-800 mb-1">Business Expansion</h5>
                  <p className="text-gray-600 text-sm">Loans enable businesses to expand operations, open new branches, diversify product lines, or enter new markets, contributing to increased revenue and market presence</p>
                </div>
                <div>
                  <h5 className="font-bold text-gray-800 mb-1">Emergency Funds During Downturns</h5>
                  <p className="text-gray-600 text-sm">Instant business loan provide a safety net during economic downturns, allowing companies to cover operational costs, salaries, and other crucial expenses, ensuring business continuity.</p>
                </div>
                <div>
                  <h5 className="font-bold text-gray-800 mb-1">Marketing and Promotions</h5>
                  <p className="text-gray-600 text-sm">A business Loan in India can be used for marketing campaigns, promotions, and advertising, boosting brand visibility and attracting more customers, thereby increasing sales and revenue.</p>
                </div>
              </div>

              <div className="flex flex-wrap md:flex-nowrap gap-6 items-center mb-8">
                <div className="w-full md:w-1/2 rounded overflow-hidden">
                  <img src="/asset/img/single-services.jpg" alt="Documents" className="w-full h-auto" />
                </div>
                <div className="w-full md:w-1/2">
                  <h5 className="text-lg font-bold text-gray-800 mb-4">Documents Required for Self Employed Applicants.</h5>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm">
                    <li>Application Form along with a Photograph</li>
                    <li>Proof of Identity and Address</li>
                    <li>Bank Account Statement of last 6months</li>
                    <li>Evidence of Business</li>
                    <li>Returns of Income Tax</li>
                    <li>Statements of profit/loss of the last 3 years</li> 
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
