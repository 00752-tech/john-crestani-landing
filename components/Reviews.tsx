import Image from 'next/image'
import { Star } from 'lucide-react'

export default function Reviews() {
  const reviews = [
    {
      name: "David",
      review: "I'm writing only bc I'm seriously in shock how well small tweaks have produced change and after being on today's call. Big thanks for putting together such a concise course...",
      rating: 5,
    },
    {
      name: "Alfonso",
      review: "If you have doubts: why do the best pro sports players in the world have coaches? In my opinion, John is the best coach in the world when it comes to affiliate marketing. He's like Moses coming down the mountain...",
      rating: 5,
    },
    {
      name: "Haik",
      review: "Just signed up and already seeing amazing results. The strategies are clear, actionable, and most importantly - they work!",
      rating: 5,
    }
  ]

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-[#C19B6C]">
          Success Stories
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-900 rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-700 rounded-full mr-4 flex items-center justify-center text-xl font-bold text-white">
                  {review.name[0]}
                </div>
                <div>
                  <h3 className="text-[#C19B6C] font-semibold">{review.name}</h3>
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C19B6C] text-[#C19B6C]" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300 text-sm">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
