import PageHeader from "../../components/PageHeader";

export const metadata = {
  title: "Apply Now - Unicredit",
};

export default function ApplyNow() {
  return (
    <>
      <PageHeader title="Apply Now" breadcrumb="Apply Now" />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="w-full lg:w-10/12 xl:w-8/12">
              <form action="/api/apply" method="POST" className="bg-gray-50 p-8 md:p-12 rounded-lg shadow sm:border border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  <div>
                    <input type="text" name="lamount" placeholder="LOAN AMOUNT (₹) *" required className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-blue-500 placeholder-gray-500 uppercase text-sm" />
                  </div>
                  <div>
                    <select name="porpuse_of_loan" required className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-blue-500 text-gray-500 uppercase text-sm bg-white">
                      <option value="">PURPOSE OF LOAN *</option>
                      <option value="Business">Business</option>
                      <option value="Car Purchase">Car Purchase</option>
                      <option value="Holiday">Holiday</option>
                      <option value="Home Purchase">Home Purchase</option>
                      <option value="Wedding ">Wedding </option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <input type="text" name="fname" placeholder="First Name *" required className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-blue-500 placeholder-gray-500 text-sm" />
                  </div>
                  <div>
                    <input type="text" name="lname" placeholder="Last Name *" required className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-blue-500 placeholder-gray-500 text-sm" />
                  </div>

                  <div>
                    <input type="email" name="email" placeholder="Email *" required className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-blue-500 placeholder-gray-500 text-sm" />
                  </div>
                  <div>
                    <input type="text" name="phone" placeholder="Phone *" required className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-blue-500 placeholder-gray-500 text-sm" />
                  </div>

                  <div>
                    <input type="text" name="date_of_birth" placeholder="Date of Birth *" required className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-blue-500 placeholder-gray-500 text-sm" />
                  </div>
                  <div>
                    <select name="martial_state" required className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-blue-500 text-gray-500 uppercase text-sm bg-white">
                      <option value="">MARITAL STATUS *</option>
                      <option value="Married">Married</option>
                      <option value="Single">Single</option>
                      <option value="Co-habiting">Co-habiting</option>
                      <option value="Separated">Separated</option>
                      <option value="Divorced">Divorced</option>
                      <option value="Civil Union">Civil Union</option>
                      <option value="Widowed">Widowed</option>
                      <option value="Partner">Partner</option>
                    </select>
                  </div>

                  <div>
                    <select name="number_of_dependants" required className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-blue-500 text-gray-500 uppercase text-sm bg-white">
                      <option value="">NUMBER OF DEPENDANTS *</option>
                      <option value="0 Dependants">0 Dependants</option>
                      <option value="1 Dependants">1 Dependants</option>
                      <option value="2 Dependants">2 Dependants</option>
                      <option value="3 Dependants">3 Dependants</option>
                      <option value="4 Dependants">4 Dependants</option>
                      <option value="5+ Dependants">5+ Dependants</option>
                    </select>
                  </div>
                  <div>
                    <input type="text" name="country" placeholder="Country *" required className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-blue-500 placeholder-gray-500 uppercase text-sm" />
                  </div>

                  <div>
                    <input type="text" name="city" placeholder="TOWN/CITY *" required className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-blue-500 placeholder-gray-500 uppercase text-sm" />
                  </div>
                  <div>
                    <input type="text" name="street" placeholder="STREET *" required className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-blue-500 placeholder-gray-500 uppercase text-sm" />
                  </div>

                  <div>
                    <input type="text" name="house_number" placeholder="HOUSE NAME/NUMBER *" required className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-blue-500 placeholder-gray-500 uppercase text-sm" />
                  </div>
                  <div>
                    <input type="text" name="house_status" placeholder="HOMEOWNER STATUS *" required className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-blue-500 placeholder-gray-500 uppercase text-sm" />
                  </div>

                  <div>
                    <input type="text" name="time_address" placeholder="TIME AT ADDRESS *" required className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-blue-500 placeholder-gray-500 uppercase text-sm" />
                  </div>
                  <div>
                    <select name="employment_status" required className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-blue-500 text-gray-500 uppercase text-sm bg-white">
                      <option value="">EMPLOYMENT STATUS *</option>
                      <option value="Full Time Employed ">Full Time Employed </option>
                      <option value="Part Time Employed ">Part Time Employed </option>
                      <option value="Self Employed ">Self Employed </option>
                      <option value="Temporarily  Employed ">Temporarily Employed </option>
                      <option value="Student ">Student </option>
                      <option value="Pension">Pension</option>
                      <option value="Disability">Disability</option>
                      <option value="Unemployed ">Unemployed </option>
                    </select>
                  </div>

                  <div>
                    <input type="text" name="employment_industry" placeholder="EMPLOYMENT INDUSTRY *" required className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-blue-500 placeholder-gray-500 uppercase text-sm" />
                  </div>
                  <div>
                    <input type="text" name="employer_name" placeholder="EMPLOYER NAME *" required className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-blue-500 placeholder-gray-500 uppercase text-sm" />
                  </div>

                  <div>
                    <input type="text" name="employer_work_phone" placeholder="WORK PHONE NUMBER *" required className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-blue-500 placeholder-gray-500 uppercase text-sm" />
                  </div>
                  <div>
                    <input type="text" name="month_income" placeholder="MONTHLY INCOME (₹) *" required className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-blue-500 placeholder-gray-500 uppercase text-sm" />
                  </div>

                  <div className="md:col-span-2 pt-2">
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2 cursor-pointer text-gray-600">
                        <input type="radio" defaultChecked name="gender" value="Male" className="accent-blue-600" />
                        Male
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer text-gray-600">
                        <input type="radio" name="gender" value="Female" className="accent-blue-600" />
                        Female
                      </label>
                    </div>
                  </div>

                  <div className="md:col-span-2 mt-4 text-center">
                    <button type="submit" className="bg-blue-600 text-white font-bold py-3 px-8 rounded hover:bg-blue-700 transition uppercase text-sm tracking-wide">
                      Apply Now
                    </button>
                  </div>

                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
