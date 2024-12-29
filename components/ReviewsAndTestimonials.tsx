import { Star } from 'lucide-react'

export default function ReviewsAndTestimonials() {
  const reviews = [
    {
      name: "Sarah K.",
      platform: "Super Affiliate System",
      rating: 5,
      review: "John Crestani's course changed my life. I went from struggling to make ends meet to earning $10k/month in just 6 months!"
    },
    {
      name: "Mike R.",
      platform: "Internet Jetset",
      rating: 4,
      review: "Internet Jetset provided me with a solid foundation in affiliate marketing. The strategies are easy to follow and implement."
    },
    {
      name: "Emily T.",
      platform: "Reddit",
      rating: 5,
      review: "I was skeptical at first, but after trying John's methods, I'm now earning a full-time income from affiliate marketing."
    }
  ]

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Reviews and Testimonials
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 flex items-center justify-center text-xl font-bold">
                  {review.name[0]}
                </div>
                <div>
                  <h3 className="font-semibold">{review.name}</h3>
                  <p className="text-sm text-gray-600">{review.platform}</p>
                </div>
              </div>
              <div className="flex mb-2">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
