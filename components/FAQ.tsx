import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQ() {
  const faqs = [
    {
      question: "What is John Crestani's net worth?",
      answer: "While exact figures are not publicly disclosed, John Crestani's estimated net worth is over $7 million, primarily earned through his successful affiliate marketing career and course sales."
    },
    {
      question: "How does John Crestani's affiliate program work?",
      answer: "John Crestani offers an exclusive partnership program for select marketers who demonstrate success with his systems. Partnership details are provided upon completion of the course, ensuring our partners fully understand and can implement our cutting-edge strategies."
    },
    {
      question: "What makes the 2025 version of these courses different?",
      answer: "The 2025 editions feature completely updated content including AI-powered campaign optimization, emerging platform strategies, predictive analytics, and Web3 marketing opportunities. These aren't the same strategies from years ago – they're continuously evolved to match today's dynamic digital landscape."
    },
    {
      question: "Is John Crestani legit according to Reddit?",
      answer: "Many users have reported positive experiences with John Crestani's latest courses. Success stories frequently highlight how the continuously updated strategies help them stay ahead in the ever-changing affiliate marketing landscape."
    },
    {
      question: "What did Forbes say about John Crestani?",
      answer: "Forbes featured John Crestani in an article highlighting his journey from a struggling college dropout to a successful affiliate marketer and course creator, showcasing his innovative approach to digital marketing."
    }
  ]

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
