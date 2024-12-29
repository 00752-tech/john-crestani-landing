'use client'

import { useState, useEffect } from 'react'

const TIMER_DURATION = 24 * 60 * 60 * 1000 // 24 hours in milliseconds

export default function FomoBanner() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const [spots, setSpots] = useState(0)
  const [isOfferExpired, setIsOfferExpired] = useState(false)

  useEffect(() => {
    // Initialize or retrieve the end time from local storage
    let endTime = localStorage.getItem('offerEndTime')
    if (!endTime) {
      endTime = new Date(new Date().getTime() + TIMER_DURATION).getTime().toString()
      localStorage.setItem('offerEndTime', endTime)
    }

    // Initialize or retrieve the number of spots from local storage
    let remainingSpots = localStorage.getItem('remainingSpots')
    if (!remainingSpots) {
      remainingSpots = (Math.floor(Math.random() * 5) + 3).toString() // Random number between 3-7
      localStorage.setItem('remainingSpots', remainingSpots)
    }
    setSpots(parseInt(remainingSpots, 10))

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const difference = parseInt(endTime, 10) - now

      if (difference <= 0) {
        clearInterval(interval)
        setIsOfferExpired(true)
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 })
      } else {
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)
        setTimeLeft({ hours, minutes, seconds })
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  if (isOfferExpired) {
    return (
      <div className="w-full bg-gray-800 text-white py-3 px-4">
        <div className="container mx-auto text-center">
          <span className="text-xl font-bold">This offer has expired. Check back later for new deals!</span>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full">
      <div className="bg-[#FF6B00] text-white py-3 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-2 md:mb-0">
              <span className="text-xl font-bold mr-4">LIMITED TIME OFFER: 50% OFF</span>
              <div className="flex items-center space-x-3">
                <div className="text-center">
                  <span className="text-2xl font-bold">{timeLeft.hours}</span>
                  <p className="text-xs">Hours</p>
                </div>
                <div className="text-center">
                  <span className="text-2xl font-bold">{timeLeft.minutes}</span>
                  <p className="text-xs">Minutes</p>
                </div>
                <div className="text-center">
                  <span className="text-2xl font-bold">{timeLeft.seconds}</span>
                  <p className="text-xs">Seconds</p>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <span className="mr-2">⚠️</span>
              <span className="font-medium">Only {spots} spots remaining at this special price!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
