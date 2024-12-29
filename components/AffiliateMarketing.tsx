import Image from 'next/image'
import { CheckCircle, TrendingUp, Target, Zap, DollarSign } from 'lucide-react'

export default function AffiliateMarketing() {
  const strategies = [
    {
      icon: <TrendingUp className="h-6 w-6 text-[#C19B6C]" />,
      title: "AI-Powered Optimization",
      description: "Leverage cutting-edge AI to boost your campaign performance by up to 300%"
    },
    {
      icon: <Target className="h-6 w-6 text-[#C19B6C]" />,
      title: "Precision Targeting",
      description: "Reach your ideal audience with laser-focused targeting strategies"
    },
    {
      icon: <Zap className="h-6 w-6 text-[#C19B6C]" />,
      title: "Rapid Implementation",
      description: "Go from zero to profitable campaigns in as little as 30 days"
    },
    {
      icon: <DollarSign className="h-6 w-6 text-[#C19B6C]" />,
      title: "High-Ticket Commissions",
      description: "Access exclusive offers with commissions of $1,000+ per sale"
    }
  ]

  return (
    <section id="affiliate-marketing" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="text-[#C19B6C]">Affiliate Marketing</span> Mastery
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-white/5 p-6 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4 text-[#C19B6C]">The Power of Affiliate Marketing</h3>
              <p className="text-gray-300">
                Harness the potential of performance-based marketing where you earn substantial commissions for promoting products you believe in. With John's system, you'll learn how to:
              </p>
              <ul className="mt-4 space-y-2">
                {strategies.map((strategy, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1">{strategy.icon}</div>
                    <div>
                      <span className="font-semibold text-[#C19B6C]">{strategy.title}:</span>
                      <span className="text-gray-300"> {strategy.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white/5 p-6 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4 text-[#C19B6C]">John Crestani's Proven Techniques</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#C19B6C] flex-shrink-0" />
                  <span>Auto-webinar funnels that convert 24/7</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#C19B6C] flex-shrink-0" />
                  <span>AI-enhanced Facebook and Google ads strategies</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#C19B6C] flex-shrink-0" />
                  <span>High-converting email marketing campaigns</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#C19B6C] flex-shrink-0" />
                  <span>SEO-optimized content creation for passive traffic</span>
                </li>
              </ul>
            </div>
          </div>
        
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#C19B6C]/20 to-purple-500/20 blur-xl"></div>
            <div className="relative">
              <Image
                src="https://www.gojctraining.com/hosted/images/61/90ba29392e464e86c96fdf01744823/johnnewimg32.png"
                alt="Affiliate Marketing Success"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-10 -right-10 bg-black/80 p-6 rounded-2xl border border-[#C19B6C]/30 backdrop-blur-sm shadow-2xl">
                <p className="text-[#C19B6C] font-bold text-4xl md:text-5xl lg:text-6xl">$404,441.75</p>
                <p className="text-xl text-gray-300 mt-2">Monthly Revenue</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
