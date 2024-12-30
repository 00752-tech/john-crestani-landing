import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">John Crestani Affiliate Marketing</h1>
      <p className="text-xl mb-8">Learn how to earn $10,000+ monthly with affiliate marketing</p>
      <Link href="#" className="bg-primary text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-opacity">
        Get Started Now
      </Link>
    </main>
  )
}

