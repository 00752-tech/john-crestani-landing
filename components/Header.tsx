'use client'

import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center border-b">
      <Link href="/" className="flex items-center justify-center">
        <Image
          src="/john-crestani-logo.png"
          alt="John Crestani Logo"
          width={150}
          height={40}
          className="object-contain"
        />
        <span className="sr-only">John Crestani</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4">
          Features
        </Link>
        <Link href="#testimonials" className="text-sm font-medium hover:underline underline-offset-4">
          Testimonials
        </Link>
        <Link href="#pricing" className="text-sm font-medium hover:underline underline-offset-4">
          Pricing
        </Link>
      </nav>
    </header>
  )
}
