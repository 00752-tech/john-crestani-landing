import { Button } from '@/components/ui/button'
import { Sparkles, Zap, TrendingUp, Target, Rocket, Brain, CheckCircle } from 'lucide-react'
import Link from 'next/link';

export default function Courses() {
  return (
    <section id="courses" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 text-center text-[#C19B6C]">
          2025 Affiliate Marketing Mastery Program
        </h2>
        <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
          Unlock your potential with cutting-edge strategies designed for the modern digital landscape
        </p>
        
        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
          {/* Super Affiliate System Card */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl p-8 text-black relative group h-full">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FFD700]/20 to-[#FF4500]/20 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 h-full flex flex-col">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Sparkles className="h-6 w-6 text-[#FF4500]" />
                    <h3 className="text-2xl font-bold">Super Affiliate System Pro 2025</h3>
                  </div>
                  <p className="text-gray-500 mb-8">
                    Advanced AI-powered affiliate marketing strategies for exponential growth
                  </p>
                  
                  <ul className="space-y-4 mb-8 text-gray-600">
                    <li className="flex items-start gap-3">
                      <TrendingUp className="h-5 w-5 text-[#FF4500] mt-1 flex-shrink-0" />
                      <span>AI-enhanced campaign optimization: Boost your ROI by up to 300%</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Target className="h-5 w-5 text-[#FF4500] mt-1 flex-shrink-0" />
                      <span>Exclusive access to high-converting offers and networks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Rocket className="h-5 w-5 text-[#FF4500] mt-1 flex-shrink-0" />
                      <span>Weekly live coaching: Stay ahead with emerging market insights</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Brain className="h-5 w-5 text-[#FF4500] mt-1 flex-shrink-0" />
                      <span>Advanced retargeting with AI-powered audience insights</span>
                    </li>
                  </ul>
                </div>
                
                <div className="mt-auto">
                  <p className="text-[#FF4500] font-bold mb-4">Value: $4,997 - Your Price: $997 (80% OFF)</p>
                  <Button 
                    className="w-full gradient-flame text-white font-semibold text-lg py-6 rounded-lg transition-all duration-300 hover:shadow-xl animate-pulse-gradient whitespace-nowrap px-8 flex items-center justify-center"
                    asChild
                  >
                    <Link href="https://johncrestani.me/api/sale">Access 2025 Pro System <span className="ml-2">→</span></Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Internet Jetset Card (now redirecting to Super Affiliate System) */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl p-8 text-black relative group h-full">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FFD700]/20 to-[#FF4500]/20 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 h-full flex flex-col">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Zap className="h-6 w-6 text-[#FF4500]" />
                    <h3 className="text-2xl font-bold">Internet Jetset Evolution</h3>
                  </div>
                  <p className="text-gray-500 mb-8">
                    The foundation of John's affiliate marketing success, now included in the Super Affiliate System Pro 2025
                  </p>
                  
                  <ul className="space-y-4 mb-8 text-gray-600">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#FF4500] mt-1 flex-shrink-0" />
                      <span>Timeless principles of digital entrepreneurship</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#FF4500] mt-1 flex-shrink-0" />
                      <span>Fundamental traffic generation strategies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#FF4500] mt-1 flex-shrink-0" />
                      <span>Essential conversion optimization techniques</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#FF4500] mt-1 flex-shrink-0" />
                      <span>Core personal branding strategies</span>
                    </li>
                  </ul>
                </div>
                
                <div className="mt-auto">
                  <p className="text-[#FF4500] font-bold mb-4">Included in Super Affiliate System Pro 2025</p>
                  <Button 
                    className="w-full gradient-flame text-white font-semibold text-lg py-6 rounded-lg transition-all duration-300 hover:shadow-xl animate-pulse-gradient whitespace-nowrap px-8 flex items-center justify-center"
                    asChild
                  >
                    <Link href="https://johncrestani.me/api/sale">Get Full Access Now <span className="ml-2">→</span></Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4 text-[#C19B6C]">Why Choose John Crestani's Super Affiliate System Pro 2025?</h3>
          <ul className="max-w-3xl mx-auto text-left list-disc list-inside space-y-2 text-gray-300">
            <li>Proven track record: Over 10,000 successful students</li>
            <li>Cutting-edge strategies: Updated for 2025's digital landscape</li>
            <li>Comprehensive support: 24/7 community access and weekly live Q&As</li>
            <li>Real-world application: Learn and earn simultaneously</li>
            <li>30-day money-back guarantee: Risk-free investment in your future</li>
            <li>Internet Jetset principles included: Get the best of both worlds</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
