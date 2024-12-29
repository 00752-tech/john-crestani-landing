import { DollarSign, Users, TrendingUp } from 'lucide-react'

export function Background() {
  const features = [
    {
      title: "Affiliate Marketing Mastery",
      description: "Discover how to earn commissions by promoting other people's products effectively.",
      icon: <DollarSign className="h-10 w-10" />
    },
    {
      title: "Traffic Generation",
      description: "Learn proven techniques to drive targeted traffic to your offers and websites.",
      icon: <Users className="h-10 w-10" />
    },
    {
      title: "Conversion Optimization",
      description: "Maximize your earnings by optimizing your sales funnels and landing pages.",
      icon: <TrendingUp className="h-10 w-10" />
    }
  ]

  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          What You'll Learn
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary p-2 text-primary-foreground">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
              <p className="text-gray-500 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
