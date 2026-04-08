import Image from "next/image";
import PageHeader from "../../components/PageHeader";
import { Eye, Target } from "lucide-react";

export const metadata = {
  title: "About Us - Unicredit",
};

export default function About() {
  return (
    <>
      <PageHeader title="About" breadcrumb="About" />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap md:flex-nowrap items-center gap-8 mb-16">
            <div className="w-full md:w-1/2">
              <img src="/asset/img/about.jpg" alt="About Unicredit" className="w-full rounded shadow-lg" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">About Unicredit</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                At unicredit, we’re here to provide you with financial solutions for all your lending needs. Whether you are looking for a loan, mortgage, or line of overdraft facility, our knowledgeable and experienced lending team will explain our lending options to you in a straightforward manner.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The only thing we have in common with big banks is our world wide reach. However, big banks, at unicredit we’re proud to make all lending decisions locally. Since our decision-makers work in the bank each day, they’ll review your loan application and respond within a few days. Our goal is to make getting a loan an easy and stress-free process!
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded shadow flex items-start gap-4">
              <div className="flex-shrink-0">
                <Eye className="w-12 h-12 text-blue-600" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">Our Vision</h4>
                <p className="text-gray-600 text-sm">The vision of unicredit is to create a positively significant and deeply sincere impression on all we serve. Our high caliber mortgage professionals are dedicated.</p>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded shadow flex items-start gap-4">
              <div className="flex-shrink-0">
                <Target className="w-12 h-12 text-blue-600" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">Our Mission</h4>
                <p className="text-gray-600 text-sm">Our Mission is to provide a high level of sound and meaningful financial services to the people we serve.Our customers receive a matchless experience that far expectations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section (replicated from index layout styles if needed). We can extract a Partners component later, but we'll inline it here for speed if short */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">Our Partners</h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[6,7,8,9,10].map((num) => (
              <div key={num} className="bg-white p-4 rounded-full shadow-sm">
                <img src={`/asset/img/brand-${num}.png`} alt={`Partner ${num}`} className="h-12 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
