'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Footer() {
  const pathname = usePathname()
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <p className="text-sm text-gray-400">
              John Crestani is a renowned affiliate marketing expert, helping thousands achieve financial freedom through his proven strategies.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-gray-400 hover:text-white">Home</Link></li>
              <li><Link href="https://johncrestani.me/api/webinar" className="text-sm text-gray-400 hover:text-white">Free Webinar</Link></li>
              <li><Link href="https://johncrestani.me/api/sale" className="text-sm text-gray-400 hover:text-white">Get Instant Access</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="text-sm text-gray-400 hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-sm text-gray-400 hover:text-white">Terms of Service</Link></li>
              <li><Link href="/affiliate-disclaimer" className="text-sm text-gray-400 hover:text-white">Affiliate Disclaimer</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Share</h3>
            <div className="flex space-x-4">
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://johncrestani.me' + pathname)}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <span className="sr-only">Share on Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://johncrestani.me' + pathname)}&text=${encodeURIComponent('Check out John Crestani\'s Affiliate Marketing Strategies!')}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <span className="sr-only">Share on Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent('https://johncrestani.me' + pathname)}&title=${encodeURIComponent('John Crestani\'s Affiliate Marketing Strategies')}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <span className="sr-only">Share on LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400">
            &copy; 2025 johncrestani.me. All rights reserved.
          </p>
          <div className="max-w-3xl mx-auto mt-4 text-xs text-gray-500 space-y-2">
            <p>
              Affiliate Disclaimer: Some links on this site may be affiliate links. We may earn a commission if you make a purchase through these links, at no additional cost to you.
            </p>
            <p>
              Earnings Disclaimer: The earnings and income statements made by John Crestani and his students are only estimates of what we think you can possibly earn. There is no guarantee that you will make these levels of income and you accept the risk that the earnings and income statements differ by individual. As with any business, your results may vary and will be based on your individual capacity, business experience, expertise, and level of desire. There are no guarantees concerning the level of success you may experience. Each individual's success depends on their background, dedication, desire, and motivation. The use of our information, products, and services should be based on your own due diligence and you agree that we are not liable for any success or failure of your business that is directly or indirectly related to the purchase and use of our information, products, and services.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
