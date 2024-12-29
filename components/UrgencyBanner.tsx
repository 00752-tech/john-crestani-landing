'use client'

import { useState, useEffect } from 'react'

export default function UrgencyBanner() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date('2025-03-31T23:59:59').getTime()

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })

      if (difference < 0) {
        clearInterval(interval)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-red-600 text-white py-4 px-4 text-center">
      <h2 className="text-2xl font-bold mb-2">Limited Time Offer: 50% OFF</h2>
      <p className="text-lg mb-2">Don't miss out on this exclusive deal! Offer ends in:</p>
      <div className="flex justify-center items-center space-x-4">
        <div className="text-center">
          <span className="text-3xl font-bold">{timeLeft.days}</span>
          <p className="text-sm">Days</p>
        </div>
        <div className="text-center">
          <span className="text-3xl font-bold">{timeLeft.hours}</span>
          <p className="text-sm">Hours</p>
        </div>
        <div className="text-center">
          <span className="text-3xl font-bold">{timeLeft.minutes}</span>
          <p className="text-sm">Minutes</p>
        </div>
        <div className="text-center">
          <span className="text-3xl font-bold">{timeLeft.seconds}</span>
          <p className="text-sm">Seconds</p>
        </div>
      </div>
    </div>
  )
}
