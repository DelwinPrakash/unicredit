import Link from "next/link";
import PageHeader from "../../components/PageHeader";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Services - Unicredit",
};

export default function Services() {
  const services = [
    {
      title: "Personal Loan",
      desc: "Personal loans are loans extended by banks or financial institutions without any collateral security",
      img: "portfolio-11.jpg",
      link: "/personal-loan"
    },
    {
      title: "Car Loan",
      desc: "Car loan is most popular kind of installment loan.",
      img: "portfolio-10.jpg",
      link: "/car-loan"
    },
    {
      title: "Business Loan",
      desc: "You need a loan to new business expand existing.",
      img: "portfolio-3.jpg",
      link: "/business-loan"
    },
    {
      title: "Home Loan",
      desc: "Buying a home is one of the biggest decision ever make.",
      img: "portfolio-4.jpg",
      link: "/home-loan"
    },
    {
      title: "Overdraft Facility",
      desc: "An overdraft facility is a credit limit provided by banks to support cash flows in business",
      img: "portfolio-5.jpg",
      link: "/overdraft"
    },
    {
      title: "Loan Against Property",
      desc: "This is a kind of mortgage loan whereby the borrowers can avail of funds by mortgaging their property with the lender.",
      img: "portfolio-6.jpg",
      link: "/loanagainstproperty"
    }
  ];

  return (
    <>
      <PageHeader title="Services" breadcrumb="Services" />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white rounded overflow-hidden shadow hover:shadow-md transition">
                <div className="relative h-64 w-full">
                  <img src={`/asset/img/${service.img}`} alt={service.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <Link href={service.link}>
                    <h4 className="text-xl font-bold text-gray-800 mb-2 hover:text-blue-600 transition">{service.title}</h4>
                  </Link>
                  <p className="text-gray-600 mb-4 h-16 overflow-hidden">{service.desc}</p>
                  <Link href={service.link} className="text-blue-600 font-semibold hover:text-blue-800 inline-flex items-center">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Check Rate Section */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between">
            <div className="w-full md:w-2/3 mb-4 md:mb-0">
              <h4 className="text-2xl font-bold">Checking your loan options does not affect your credit score</h4>
            </div>
            <div className="w-full md:w-1/3 text-left md:text-right">
              <Link href="/apply-now" className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded hover:bg-gray-100 transition">
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
