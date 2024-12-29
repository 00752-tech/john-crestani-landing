import { ArrowRight } from 'lucide-react'

export default function CourseEvolution() {
  const milestones = [
    {
      year: 2017,
      title: "Super Affiliate System Launch",
      description: "John introduces groundbreaking affiliate marketing strategies."
    },
    {
      year: 2020,
      title: "Pandemic-Proof Strategies",
      description: "Course updated with tactics for the new digital-first economy."
    },
    {
      year: 2022,
      title: "AI Integration",
      description: "Incorporation of AI tools for campaign optimization and analysis."
    },
    {
      year: 2025,
      title: "Cutting-Edge Innovations",
      description: "Latest updates including emerging platform strategies and Web3 opportunities."
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="text-[#C19B6C]">Evolving Excellence:</span> Super Affiliate System Through the Years
        </h2>
        <div className="max-w-4xl mx-auto">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex items-start mb-8">
              <div className="mr-4 bg-[#C19B6C] text-black font-bold px-3 py-1 rounded">
                {milestone.year}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                <p className="text-gray-300">{milestone.description}</p>
              </div>
              {index < milestones.length - 1 && (
                <ArrowRight className="text-[#C19B6C] ml-4 mt-2" />
              )}
            </div>
          ))}
        </div>
        <p className="text-center mt-12 text-xl">
          Stay ahead of the curve with John Crestani's continuously updated Super Affiliate System
        </p>
      </div>
    </section>
  )
}
