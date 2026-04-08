import Image from "next/image";
import PageHeader from "../../components/PageHeader";
import { MapPin, Mail, Phone } from "lucide-react";

export const metadata = {
  title: "Contact Us - Unicredit",
};

export default function Contact() {
  return (
    <>
      <PageHeader title="Contact" breadcrumb="contact" />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap md:flex-nowrap gap-8 mb-12">
            <div className="w-full md:w-7/12">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>
                <p className="text-gray-600 leading-relaxed">
                  Where does your business need more support? We offer a broad range of services and packages that be customized to your needs. Send us a message today, and we can start you on a path to success.
                </p>
              </div>
              
              <form action="/api/contact" method="POST" className="space-y-6">
                <div className="flex gap-6">
                  <div className="w-1/2">
                    <input type="text" name="name" placeholder="Name" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-blue-500" />
                  </div>
                  <div className="w-1/2">
                    <input type="text" name="phone" placeholder="Phone" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-blue-500" />
                  </div>
                </div>
                <div>
                  <input type="email" name="email" placeholder="Email" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-blue-500" />
                </div>
                <div>
                  <textarea name="message" placeholder="Message" required rows={5} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-blue-500"></textarea>
                </div>
                <div>
                  <button type="submit" className="bg-blue-600 text-white font-bold py-3 px-8 rounded hover:bg-blue-700 transition uppercase text-sm tracking-wide">
                    SEND MESSAGE
                  </button>
                </div>
              </form>
            </div>
            
            <div className="w-full md:w-5/12">
              <div className="h-full w-full rounded shadow-md overflow-hidden flex items-center justify-center bg-gray-50">
                <img src="/asset/img/ceo.png" alt="Get in Touch" className="max-w-full h-auto object-contain" />
              </div>
            </div>
          </div>
          
          <hr className="border-gray-200 my-12" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full">
                <MapPin className="w-6 h-6 text-gray-700" />
              </div>
              <div className="text-gray-600 text-sm leading-relaxed">
                <p>
                  <strong>Unicredit Consultants LLP</strong><br />
                  7/431-CB1, Narayana Apartments<br />
                  Kunnumpuram - Civil Station Road<br />
                  Thazhvaram Lane, Kakkanad<br />
                  Ernakulam - 682030,<br />
                  Kerala India
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full">
                <Mail className="w-6 h-6 text-gray-700" />
              </div>
              <div className="text-gray-600 text-sm py-2">
                <p>info@unicredit.co.in</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full">
                <Phone className="w-6 h-6 text-gray-700" />
              </div>
              <div className="text-gray-600 text-sm py-2">
                <p>8547726755</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
