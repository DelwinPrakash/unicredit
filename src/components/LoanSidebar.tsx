import Link from "next/link";
import { FileText, Phone, Mail } from "lucide-react";

export default function LoanSidebar() {
  const loans = [
    { title: "Business Loan", link: "/business-loan" },
    { title: "Overdraft", link: "/overdraft" },
    { title: "Car Loan", link: "/car-loan" },
    { title: "Home Loan", link: "/home-loan" },
    { title: "Personal Loan", link: "/personal-loan" },
    { title: "Loan Against Property", link: "/loanagainstproperty" },
  ];

  return (
    <div className="space-y-8">
      {/* Services List */}
      <div className="bg-gray-50 rounded p-6 shadow-sm border border-gray-100">
        <ul className="space-y-3">
          {loans.map((loan, idx) => (
            <li key={idx}>
              <Link href={loan.link} className="flex items-center text-gray-700 hover:text-blue-600 transition font-medium">
                <span className="mr-2 text-blue-600">→</span> {loan.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Brochures */}
      <div className="bg-gray-50 rounded p-6 shadow-sm border border-gray-100">
        <h4 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Brochures</h4>
        <div className="space-y-3">
          <a href="#" className="flex items-center text-gray-600 hover:text-blue-600 transition">
            <FileText className="w-5 h-5 mr-2 text-red-500" />
            Download file PDF
          </a>
          <a href="#" className="flex items-center text-gray-600 hover:text-blue-600 transition">
            <FileText className="w-5 h-5 mr-2 text-blue-500" />
            Download file DOC
          </a>
        </div>
      </div>

      {/* Get in Touch */}
      <div className="bg-blue-600 text-white rounded p-6 shadow-sm">
        <h4 className="text-xl font-bold mb-4 border-b border-blue-500 pb-2">Get in Touch with us</h4>
        <p className="text-blue-100 text-sm mb-4 leading-relaxed">
          7/431-CB1 <br />
          Narayana Apartments <br />
          Kunnumpuram - Civil Station Road <br />
          Thazhvaram Lane, Kakkanad<br />
          Ernakulam - 682030, <br />
          Kerala India
        </p>
        <ul className="space-y-3 pt-2 border-t border-blue-500">
          <li className="flex items-center text-sm">
            <Phone className="w-4 h-4 mr-3" />
            8547726755
          </li>
          <li className="flex items-center text-sm">
            <Mail className="w-4 h-4 mr-3" />
            info@unicredit.co.in
          </li>
        </ul>
      </div>
    </div>
  );
}
