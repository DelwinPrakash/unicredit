import Link from "next/link";
import Image from "next/image";
import HeroSlider from "../components/HeroSlider";
import { 
  Clock, Users, Headset, 
  Wallet, Car, Briefcase, Home as HomeIcon, CreditCard, Landmark,
  MousePointerClick, FileText, CheckCircle, DollarSign, ArrowRight
} from "lucide-react";

export default function Home() {
  return (
    <>
      <HeroSlider />

      {/* Header Bottom Section / Features */}
      <section className="py-12 md:py-16 bg-white">
        <div className="bg-white shadow-lg shadow-blue-900/5 border border-slate-100 mx-4 md:mx-auto md:max-w-5xl rounded-2xl md:rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            <div className="p-6 md:p-8 flex items-center justify-start gap-4 md:gap-5 hover:bg-slate-50 transition-colors">
              <div className="bg-blue-50/80 p-3 md:p-4 rounded-xl md:rounded-2xl text-blue-600 shadow-sm border border-blue-100/50">
                <Clock className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              <div>
                <p className="font-bold text-slate-800 text-base md:text-lg leading-tight">Quick &amp; Easy<br />Loan Approvals</p>
              </div>
            </div>
            <div className="p-6 md:p-8 flex items-center justify-start gap-4 md:gap-5 hover:bg-slate-50 transition-colors">
              <div className="bg-blue-50/80 p-3 md:p-4 rounded-xl md:rounded-2xl text-blue-600 shadow-sm border border-blue-100/50">
                <Users className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              <div>
                <p className="font-bold text-slate-800 text-base md:text-lg leading-tight">10k+ Satisfied<br />Customers</p>
              </div>
            </div>
            <div className="p-6 md:p-8 flex items-center justify-start gap-4 md:gap-5 hover:bg-slate-50 transition-colors">
              <div className="bg-blue-50/80 p-3 md:p-4 rounded-xl md:rounded-2xl text-blue-600 shadow-sm border border-blue-100/50">
                <Headset className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              <div>
                <p className="font-bold text-slate-800 text-base md:text-lg leading-tight">Experienced Personal<br />Consultation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section / Loan Types */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">Loans for your life</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">We have a comprehensive range of financial products to craft the perfect solution for your unique needs.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Personal Loan",
                desc: "Personal loans extended by financial institutions without any collateral security.",
                icon: Wallet,
                link: "/personal-loan"
              },
              {
                title: "Car Loan",
                desc: "Get behind the wheel faster with our competitive and popular car installment loans.",
                icon: Car,
                link: "/car-loan"
              },
              {
                title: "Business Loan",
                desc: "Capital to expand your existing business or kickstart a new venture.",
                icon: Briefcase,
                link: "/business-loan"
              },
              {
                title: "Home Loan",
                desc: "Buying a home is a big decision. Let us make the financing part easy and stress-free.",
                icon: HomeIcon,
                link: "/home-loan"
              },
              {
                title: "Overdraft Facility",
                desc: "A flexible credit limit to support smooth and reliable cash flows in your business.",
                icon: CreditCard,
                link: "/overdraft"
              },
              {
                title: "Loan Against Property",
                desc: "Leverage your real estate by mortgaging your property to secure substantial funds.",
                icon: Landmark,
                link: "/loanagainstproperty"
              }
            ].map((loan, idx) => {
              const Icon = loan.icon;
              return (
                <div key={idx} className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                  <div className="mb-6 w-16 h-16 bg-blue-50 border border-blue-100/50 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300">
                    <Icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 mb-3">{loan.title}</h4>
                  <p className="text-slate-500 mb-6 line-clamp-3">{loan.desc}</p>
                  <Link href={loan.link} className="text-blue-600 font-semibold hover:text-blue-800 inline-flex items-center group/link">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Get Consultations Section */}
      <section className="py-24 bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 opacity-10 blur-3xl">
          <div className="w-96 h-96 bg-white rounded-full"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h4 className="text-blue-200 font-bold uppercase tracking-widest mb-3">Get a free consultation today</h4>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-10 max-w-3xl mx-auto leading-tight">Checking your loan options <span className="text-blue-200">does not affect</span> your credit score.</h2>
          <Link href="/apply-now" className="inline-block bg-white text-blue-700 font-bold py-4 px-10 rounded-full hover:bg-slate-50 hover:shadow-lg hover:-translate-y-1 transition duration-300">
            Apply For a Loan
          </Link>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Why Choose Unicredit</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div className="group cursor-pointer">
              <div className="rounded-2xl overflow-hidden mb-6 relative shadow-md group-hover:shadow-xl transition-shadow duration-300">
                <img src="/asset/img/choose-1.jpg" alt="No Hidden Fees" className="w-full object-cover h-64 group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>
              <h4 className="text-2xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">No Hidden Fees</h4>
            </div>
            <div className="group cursor-pointer">
              <div className="rounded-2xl overflow-hidden mb-6 relative shadow-md group-hover:shadow-xl transition-shadow duration-300">
                <img src="/asset/img/choose-2.jpg" alt="Less Documents" className="w-full object-cover h-64 group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>
              <h4 className="text-2xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">Less Documents</h4>
            </div>
            <div className="group cursor-pointer">
              <div className="rounded-2xl overflow-hidden mb-6 relative shadow-md group-hover:shadow-xl transition-shadow duration-300">
                <img src="/asset/img/choose-3.jpg" alt="Specialist Team" className="w-full object-cover h-64 group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>
              <h4 className="text-2xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">Specialist Team</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Process Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Our Simple Process</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">Get your loan funded in 4 easy steps.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center relative">
            <div className="hidden lg:block absolute top-[40px] left-[15%] right-[15%] h-0.5 border-t-2 border-dashed border-blue-200 z-0"></div>
            
            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto bg-white border-2 border-blue-100 shadow-lg rounded-full flex items-center justify-center mb-6 text-blue-600 group hover:border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer">
                <MousePointerClick className="w-8 h-8 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-2">1. Choose Amount</h4>
              <p className="text-slate-500">Pick your loan amount and flexible terms.</p>
            </div>
            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto bg-white border-2 border-blue-100 shadow-lg rounded-full flex items-center justify-center mb-6 text-blue-600 group hover:border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer">
                <FileText className="w-8 h-8 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-2">2. Submit Docs</h4>
              <p className="text-slate-500">Provide basic information to check eligibility.</p>
            </div>
            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto bg-white border-2 border-blue-100 shadow-lg rounded-full flex items-center justify-center mb-6 text-blue-600 group hover:border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer">
                <CheckCircle className="w-8 h-8 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-2">3. Verification</h4>
              <p className="text-slate-500">Our specialists verify documents and approve rapidly.</p>
            </div>
            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto bg-white border-2 border-blue-100 shadow-lg rounded-full flex items-center justify-center mb-6 text-blue-600 group hover:border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer">
                <DollarSign className="w-8 h-8 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-2">4. Get Funded</h4>
              <p className="text-slate-500">Once approved, receive funds directly to your account.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
