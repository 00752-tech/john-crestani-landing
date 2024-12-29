'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import Image from 'next/image'

interface Story {
  id: string
  videoId: string
  title: string
  quote: string
  name: string
  occupation: string
  earnings: string
  rating: number
}

const stories: Story[] = [
  {
    id: '1',
    videoId: 'u_VIXoi-mmo',
    title: "From Struggling to $10k/Month",
    quote: "John's course changed my life. I went from barely making ends meet to consistently earning five figures monthly.",
    name: "Sarah K.",
    occupation: "Full-time Affiliate Marketer",
    earnings: "$10,000/month",
    rating: 5
  },
  {
    id: '2',
    videoId: 'Su2sSUKzr3A',
    title: "Quit My 9-5 in Just 6 Months",
    quote: "The strategies in the Super Affiliate System are easy to follow and implement. I'm seeing real results already!",
    name: "Mike R.",
    occupation: "Former IT Specialist",
    earnings: "$15,000/month",
    rating: 5
  },
  {
    id: '3',
    videoId: '5IZM3exXxCc',
    title: "From Skeptic to $20k/Month Earner",
    quote: "I was skeptical at first, but after trying John's methods, I'm now earning more than I ever did in my 9-5 job.",
    name: "Emily T.",
    occupation: "E-commerce Entrepreneur",
    earnings: "$20,000/month",
    rating: 5
  },
  {
    id: '4',
    videoId: 'ZNbFQmEVbP8',
    title: "Scaled to 6-Figure Income",
    quote: "John's advanced strategies helped me scale my affiliate business to six figures. It's been life-changing!",
    name: "David L.",
    occupation: "Affiliate Marketing Consultant",
    earnings: "$50,000/month",
    rating: 5
  }
]

export default function SuccessStories() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextStory = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % stories.length)
  }

  const prevStory = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + stories.length) % stories.length)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-[#C19B6C]">
          Success Stories
        </h2>
        <p className="text-white text-center mb-12 text-xl">
          Real results from real students who took action
        </p>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-5">
              <div className="md:col-span-3 relative pb-[100%] md:pb-[75%]">
                <iframe
                  src={`https://www.youtube.com/embed/${stories[currentIndex].videoId}`}
                  title={stories[currentIndex].title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                />
              </div>
              <div className="md:col-span-2 p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">{stories[currentIndex].title}</h3>
                  <p className="text-gray-600 mb-4 italic">"{stories[currentIndex].quote}"</p>
                  <div className="flex items-center mb-2">
                    <Image
                      src={`https://i.pravatar.cc/60?u=${stories[currentIndex].id}`}
                      alt={stories[currentIndex].name}
                      width={60}
                      height={60}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <p className="font-semibold text-gray-800">{stories[currentIndex].name}</p>
                      <p className="text-gray-600 text-sm">{stories[currentIndex].occupation}</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    {[...Array(stories[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <div className="bg-green-100 p-4 rounded-lg">
                  <p className="text-green-800 font-semibold">Current Earnings:</p>
                  <p className="text-3xl font-bold text-green-600">{stories[currentIndex].earnings}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between items-center mt-6">
            <Button 
              onClick={prevStory} 
              variant="outline" 
              size="icon" 
              className="text-[#C19B6C] hover:bg-[#C19B6C]/10"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <div className="flex space-x-2">
              {stories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-[#C19B6C] scale-125' : 'bg-gray-400 hover:bg-[#C19B6C]/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <Button 
              onClick={nextStory} 
              variant="outline" 
              size="icon" 
              className="text-[#C19B6C] hover:bg-[#C19B6C]/10"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-white text-xl mb-6">
            Ready to write your own success story?
          </p>
          <Button 
            className="gradient-flame text-white font-bold px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-pulse-gradient"
            size="lg"
            asChild
          >
            <a href="https://johncrestani.me/api/webinar">Start Your Journey Today</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
