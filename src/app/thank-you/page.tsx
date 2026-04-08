import Link from "next/link";
import PageHeader from "../../components/PageHeader";
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "Thank You - Unicredit",
};

export default function ThankYou() {
  return (
    <>
      <PageHeader title="Thank You" breadcrumb="Thank You" />
      
      <section className="py-20 bg-white min-h-[50vh] flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 text-green-500 rounded-full mb-6">
            <CheckCircle className="w-12 h-12" />
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Submission Successful!</h2>
          <p className="text-gray-600 text-lg mb-8">
            Thank you for reaching out. We have received your details and one of our specialists will contact you shortly.
          </p>
          <Link href="/" className="bg-blue-600 text-white font-bold py-3 px-8 rounded hover:bg-blue-700 transition">
            Back to Home
          </Link>
        </div>
      </section>
    </>
  );
}
