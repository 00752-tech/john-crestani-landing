export default function VideoSection() {
  return (
    <section className="bg-black text-white py-20 border-t border-white/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-[#C19B6C]">Watch How</span> Our System Works
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative pb-[56.25%] h-0 rounded-xl overflow-hidden bg-white/5">
            <iframe
              src="https://drive.google.com/file/d/177mhVxuWNW7ZJEILg58jLq_OiyBqveCO/preview"
              allow="autoplay"
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-xl text-gray-300">
              See exactly how our proven system generates <span className="text-[#C19B6C] font-semibold">$404,441.75 per month</span> in affiliate commissions
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
