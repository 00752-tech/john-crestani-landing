import { Shield, CheckCircle } from 'lucide-react'

export default function GuaranteeSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Shield className="w-12 h-12 sm:w-16 sm:h-16 text-[#C19B6C] mx-auto mb-4 sm:mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-[#C19B6C]">
            30-Day Money-Back Guarantee
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
            We're so confident in the power of the Super Affiliate System Pro 2025 that we offer a full 30-day money-back guarantee. If you're not completely satisfied with the course, simply reach out to our support team within 30 days of your purchase for a full refund.
          </p>
          <div className="bg-white/5 p-4 sm:p-6 rounded-xl">
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-[#C19B6C]">Our Promise to You</h3>
            <ul className="text-left text-gray-300 space-y-3 sm:space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#C19B6C] mr-2 mt-1" />
                <span>No questions asked refund policy</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#C19B6C] mr-2 mt-1" />
                <span>Full access to all course materials during the 30-day period</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#C19B6C] mr-2 mt-1" />
                <span>Risk-free opportunity to experience the potential of affiliate marketing</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
