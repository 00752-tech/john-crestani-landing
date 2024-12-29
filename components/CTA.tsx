import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#C19B6C]">
          Ready to Transform Your Financial Future?
        </h2>
        <p className="text-xl mb-10 text-gray-300 max-w-3xl mx-auto">
          Join John Crestani's Super Affiliate System and learn the secrets to generating $500k+ monthly with affiliate marketing.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
          <Button 
            size="lg" 
            className="gradient-flame cta-width text-white font-bold px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-pulse-gradient flex items-center justify-center"
            asChild
          >
            <Link href="https://johncrestani.me/api/webinar">REGISTER FOR FREE WEBINAR <span className="ml-2">→</span></Link>
          </Button>
          <Button 
            size="lg" 
            className="gradient-flame cta-width text-white font-bold px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-pulse-gradient flex items-center justify-center"
            asChild
          >
            <Link href="https://johncrestani.me/api/sale">GET INSTANT ACCESS <span className="ml-2">→</span></Link>
          </Button>
        </div>
        <p className="text-sm text-gray-400 mt-6">
          Limited Time Offer: 50% OFF - Only $997
        </p>
      </div>
    </section>
  )
}
