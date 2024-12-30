import { Check } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function AffiliateMarketing() {
  const plans = [
    {
      title: "Basic Course",
      price: "$497",
      features: [
        "Full access to online course materials",
        "30-day money-back guarantee",
        "Private Facebook community",
        "Monthly Q&A sessions",
      ]
    },
    {
      title: "VIP Mentorship",
      price: "$1,997",
      features: [
        "Everything in Basic Course",
        "1-on-1 coaching sessions with John",
        "Advanced strategies and tactics",
        "Lifetime updates",
      ],
      highlighted: true
    }
  ]

  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          Invest in Your Future
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-col p-6 rounded-lg ${
                plan.highlighted ? 'bg-primary text-primary-foreground' : 'bg-background'
              }`}
            >
              <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
              <p className="text-4xl font-bold mb-6">{plan.price}</p>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="mr-2 h-4 w-4" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                className={plan.highlighted ? 'bg-background text-foreground hover:bg-secondary' : ''}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

