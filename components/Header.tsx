import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-white font-bold text-xl md:text-2xl lg:text-3xl animate-pulse-slow text-shadow-strong">
              "TRANSFORM YOUR FINANCIAL FUTURE"
            </h2>
            <p className="text-yellow-300 font-semibold text-lg md:text-xl mt-2 text-shadow-light">
              $997 (50% OFF LIMITED TIME)
            </p>
          </div>
          <Button 
            className="gradient-flame text-white font-semibold px-6 py-3 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-base animate-pulse-gradient flex items-center justify-center"
            size="lg"
            asChild
          >
            <Link href="https://johncrestani.me/api/sale">GET INSTANT ACCESS NOW <span className="ml-2">→</span></Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
