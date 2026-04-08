import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <div className="mb-4">
              <img src="/asset/img/footer-logo.png" alt="Unicredit" className="h-10" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              <strong>Unicredit Consultants LLP</strong><br />
              7/431-CB1 <br />
              Narayana Apartments <br />
              Kunnumpuram - Civil Station Road <br />
              Thazhvaram Lane, Kakkanad<br />
              Ernakulam - 682030, <br />
              Kerala India
            </p>
          </div>
          
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <h4 className="text-lg font-bold mb-4 text-white">Solutions</h4>
            <ul className="space-y-2">
              <li><Link href="/business-loan" className="text-gray-400 hover:text-white transition">Business Loan</Link></li>
              <li><Link href="/overdraft" className="text-gray-400 hover:text-white transition">Overdraft</Link></li>
              <li><Link href="/car-loan" className="text-gray-400 hover:text-white transition">Car Loan</Link></li>
              <li><Link href="/home-loan" className="text-gray-400 hover:text-white transition">Home Loan</Link></li>
              <li><Link href="/personal-loan" className="text-gray-400 hover:text-white transition">Personal Loan</Link></li>
              <li><Link href="/loanagainstproperty" className="text-gray-400 hover:text-white transition">Loan Against Property</Link></li>
            </ul>
          </div>
          
          {/* Third column if needed, keeping symmetric or based on layout. Legacy had some commented out recent posts. We'll leave it simple. */}
          <div className="w-full md:w-1/3 px-4">
            <h4 className="text-lg font-bold mb-4 text-white">Newsletter</h4>
            <div className="mb-4">
              <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter and get latest news related to loan,credit cards,perday loan,interates rate.</p>
              <form action="#" method="get" className="flex flex-col gap-2">
                <div className="relative">
                  <input type="email" name="email" placeholder="Email address" className="w-full px-4 py-2 bg-white text-gray-800 rounded focus:outline-none" />
                </div>
                <button type="submit" className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition">Subscribe +</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright Bottom Bar */}
      <div className="mt-8 pt-6 border-t border-gray-800">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center text-sm">
          <div className="w-full md:w-1/2 text-gray-400 mb-4 md:mb-0 text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} unicredit. All Rights Reserved</p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition">FB</a>
            <a href="#" className="text-gray-400 hover:text-white transition">TW</a>
            <a href="#" className="text-gray-400 hover:text-white transition">IN</a>
            <a href="#" className="text-gray-400 hover:text-white transition">PI</a>
            <a href="#" className="text-gray-400 hover:text-white transition">VI</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
