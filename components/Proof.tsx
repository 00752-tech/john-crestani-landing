import Image from 'next/image'

export default function Proof() {
  return (
    <section className="bg-black text-white py-20 border-t border-white/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-[#C19B6C]">REAL RESULTS</span> FROM OUR SYSTEM
        </h2>
        
        <div className="max-w-4xl mx-auto bg-white/5 rounded-xl p-8">
          <Image
            src="https://www.gojctraining.com/hosted/images/61/90ba29392e464e86c96fdf01744823/johnnewimg32.png"
            alt="Earnings Proof"
            width={800}
            height={400}
            className="rounded-lg shadow-xl mb-8"
          />
          
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-[#C19B6C]">$404,441.75</span> in Just One Month
            </h3>
            <p className="text-gray-300">
              These are real results from implementing our proven affiliate marketing strategies. 
              While results may vary, this demonstrates the potential of our system.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
