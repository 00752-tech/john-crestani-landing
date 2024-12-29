export default function Background() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-[#C19B6C]">
          John Crestani's Journey to Success
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* From Fired to Financial Freedom */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4">From Fired to Financial Freedom</h3>
            <p className="text-gray-400 leading-relaxed">
              John Crestani's journey began with a setback: being fired from his corporate job. This pivotal moment led him to discover the world of affiliate marketing and online business.
            </p>
          </div>

          {/* The Turning Point */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4">The Turning Point</h3>
            <p className="text-gray-400 leading-relaxed">
              Inspired by "The 4-Hour Work Week," John dove deep into affiliate marketing, developing strategies that would eventually lead to his remarkable success.
            </p>
          </div>

          {/* Building an Empire */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4">Building an Empire</h3>
            <p className="text-gray-400 leading-relaxed">
              John's unique approach allowed him to build his business while traveling the world, proving that with the right strategies, location independence is achievable.
            </p>
          </div>

          {/* Scaling to $500,000+ Per Month */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4">Scaling to $500,000+ Per Month</h3>
            <p className="text-gray-400 leading-relaxed">
              Through persistence and innovation, John developed strategies that propelled him to earn over $500,000 per month, catching the attention of major publications like Forbes.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
