import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  const benefits = [
    "Master AI-powered affiliate strategies for 300% ROI boost",
    "Access exclusive high-converting offers and networks",
    "Get weekly live coaching on emerging market trends",
    "Learn advanced retargeting with AI audience insights",
    "Build automated systems adapting to market changes"
  ]

  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold mb-8">
              <span className="text-[#C19B6C] block mb-4">Earn $10,000+ Monthly</span>
              <span className="text-white block">With Affiliate Marketing:</span>
              <span className="text-[#C19B6C] block">John Crestani's Proven System</span>
            </h1>
            
            <p className="text-gray-300 text-xl mb-8">
              Join over 10,000 successful students who have transformed their lives using John's <span className="text-[#C19B6C] font-semibold">Super Affiliate System Pro 2025</span>. Start your journey to financial freedom today!
            </p>
          </div>
          <div className="lg:w-1/2">
            <Image
              src="https://www.gojctraining.com/hosted/images/7b/7ead4926f84ad2b0871b70aeecc2ef/johnnewimg93.png"
              alt="John Crestani - Affiliate Marketing Expert"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#C19B6C] to-[#8B4513] p-1 rounded-lg mb-8">
            <div className="bg-black p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-[#C19B6C]">Why Learn from John Crestani?</h2>
              <ul className="space-y-2 text-white">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-[#C19B6C] mr-2" />
                  <span>Experienced marketer generating $500,000+ monthly</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-[#C19B6C] mr-2" />
                  <span>Featured in Forbes, Entrepreneur, and Business Insider</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-[#C19B6C] mr-2" />
                  <span>Creator of industry-leading courses with thousands of successful students</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-[#C19B6C] mr-2" />
                  <span>Continuously updated strategies for the ever-changing digital landscape</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-4 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 bg-gradient-to-r from-[#C19B6C]/10 to-[#8B4513]/10 p-4 rounded-lg">
                <CheckCircle className="h-6 w-6 flex-shrink-0 text-[#C19B6C] mt-1" />
                <p className="text-lg text-gray-200">{benefit}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center space-y-6">
            <div className="flex justify-center">
              <Button 
                className="gradient-flame cta-width text-white font-bold px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-pulse-gradient flex items-center justify-center"
                size="lg"
                asChild
              >
                <Link href="https://johncrestani.me/api/webinar">JOIN 2025 UPDATED WEBINAR NOW <span className="ml-2">→</span></Link>
              </Button>
            </div>
            <p className="text-[#C19B6C] text-lg font-semibold">
              Discover How to Build a Successful Affiliate Marketing Business in 2025
            </p>
            <div className="flex justify-center">
              <Button 
                className="gradient-outline cta-width font-bold px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
                asChild
              >
                <Link href="https://johncrestani.me/api/sale">GET INSTANT ACCESS TO 2025 COURSE <span className="ml-2">→</span></Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
