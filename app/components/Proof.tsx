import Image from 'next/image'

export function Proof() {
  const proofs = [
    {
      name: "Sarah Johnson",
      quote: "John's course completely transformed my online business. I went from struggling to make ends meet to earning a six-figure income in just 6 months!",
      image: "/testimonial-1.jpg"
    },
    {
      name: "Mike Thompson",
      quote: "The strategies I learned from John helped me quit my 9-5 job and build a thriving affiliate marketing business. I'm now living life on my own terms!",
      image: "/testimonial-2.jpg"
    }
  ]

  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          Success Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {proofs.map((proof, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <Image
                src={proof.image}
                alt={proof.name}
                width={80}
                height={80}
                className="rounded-full mb-4"
              />
              <p className="mb-2 italic">"{proof.quote}"</p>
              <p className="font-bold">{proof.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
