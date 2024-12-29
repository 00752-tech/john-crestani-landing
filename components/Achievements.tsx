import { Trophy } from 'lucide-react'

export default function Achievements() {
  const achievements = [
    {
      title: "$500k+ Monthly Income",
      description: "Consistently generating over half a million dollars per month through affiliate marketing.",
    },
    {
      title: "Featured in Forbes",
      description: "Recognized by Forbes as a leading figure in the affiliate marketing industry.",
    },
    {
      title: "10,000+ Successful Students",
      description: "Helped over 10,000 students start and grow their own online businesses through his courses.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center text-blue-900">
          John Crestani's Remarkable Achievements
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-200">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-blue-900 p-3 rounded-full">
                  <Trophy className="w-8 h-8 text-yellow-400" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-center text-blue-900">{achievement.title}</h3>
              <p className="text-gray-600 text-center">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
