import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { CheckCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function WebinarRegistration() {
  const features = [
    "Zero Experience Needed",
    "Works For Every Type Of Business",
    "Market, Sell, And Deliver Like A Pro"
  ]

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
      {/* Top Banner */}
      <div className="bg-blue-500 text-white py-2 text-center">
        <p className="text-sm md:text-base">
          February 12th - 16th, 2025 | Claim Your Ticket To The LAST DANCE Of Affiliate Marketing Live Here &gt;&gt;
        </p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <header className="flex justify-between items-center mb-12">
          <Image
            src="/logo.png"
            alt="John Crestani Logo"
            width={150}
            height={50}
            className="h-12 w-auto"
          />
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">What's Included</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a>
            <Button variant="outline">Log In</Button>
          </nav>
        </header>

        <main className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Struggling To Get A Constant Flow Of Customers?
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-6">
            Meet John Crestani's Affiliate Marketing System.
          </h2>
          <p className="text-xl mb-8">
            Getting People To Your Website And Turning Them Into
            Happy Paying Customers Is What We Do Best
          </p>

          <Button 
            size="lg"
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-xl mb-8"
            asChild
          >
            <Link href="https://johncrestani.me/api/webinar">Register For The Free Webinar Now &gt;&gt;</Link>
          </Button>

          <p className="text-gray-600 mb-8">
            Get Started In Less Than 60 Seconds • Limited Spots Available
          </p>

          <div className="flex justify-center space-x-8 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="text-green-500 mr-2" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div className="bg-gray-100 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">
              Learn More In The Video Below And Sign Up For Free Today!
            </h3>
            <div className="aspect-w-16 aspect-h-9 mb-8">
              <iframe 
                src="https://www.youtube.com/embed/your-video-id" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <form className="flex flex-col md:flex-row gap-4" action="https://johncrestani.me/api/webinar" method="get">
              <Input type="email" placeholder="Enter your email" className="flex-grow" name="email" required />
              <Button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white">
                Register Now
              </Button>
            </form>
          </div>
        </main>
      </div>
    </section>
  )
}
