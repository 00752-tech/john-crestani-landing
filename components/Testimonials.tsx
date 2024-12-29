import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Testimonial {
  id: string
  name: string
  text: string
  videoUrl: string
  transcript: string
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah K.',
    text: 'John\'s course changed my life. I went from struggling to make ends meet to earning a full-time income with affiliate marketing!',
    videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_1',
    transcript: `
      <h3>My Journey with John Crestani's Course</h3>
      <p>Hey everyone, I'm Sarah K., and I want to share my experience with John Crestani's affiliate marketing course.</p>
      <h4>Before the Course</h4>
      <p>I was really struggling financially. Bills were piling up, and I felt stuck in a dead-end job.</p>
      <h4>Taking the Leap</h4>
      <p>When I found John's course, I was skeptical but desperate for a change. I decided to give it a shot.</p>
      <h4>The Results</h4>
      <p>I'm amazed at how much my life has changed. Within months, I was earning more from affiliate marketing than from my full-time job.</p>
      <h4>Final Thoughts</h4>
      <p>If you're on the fence, just go for it. John's strategies really work, and the support is incredible.</p>
    `
  },
  {
    id: '2',
    name: 'Mike R.',
    text: 'The strategies in the Super Affiliate System are easy to follow and implement. I\'m seeing real results already!',
    videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_2',
    transcript: `
      <h3>Super Affiliate System: A Game-Changer</h3>
      <p>Hi, I'm Mike R., and I want to talk about my experience with John Crestani's Super Affiliate System.</p>
      <h4>First Impressions</h4>
      <p>When I started the course, I was impressed by how well-organized and easy to follow it was.</p>
      <h4>Implementing the Strategies</h4>
      <p>John's strategies are practical and actionable. I started implementing them right away.</p>
      <h4>Seeing Results</h4>
      <p>Within weeks, I saw my first affiliate sales. It was incredibly motivating to see real results so quickly.</p>
      <h4>Ongoing Success</h4>
      <p>Now, I'm consistently earning from my affiliate marketing efforts, and it's all thanks to John's system.</p>
    `
  },
  {
    id: '3',
    name: 'Emily T.',
    text: 'I was skeptical at first, but after trying John\'s methods, I\'m now earning more than I ever did in my 9-5 job.',
    videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_3',
    transcript: `
      <h3>From Skeptic to Believer: My Affiliate Marketing Journey</h3>
      <p>Hello, I'm Emily T., and I want to share how John Crestani's course transformed my career.</p>
      <h4>Initial Doubts</h4>
      <p>At first, I was very skeptical about affiliate marketing. It seemed too good to be true.</p>
      <h4>Taking the Plunge</h4>
      <p>Despite my doubts, I decided to try John's course. The comprehensive content and step-by-step guidance were impressive.</p>
      <h4>The Turning Point</h4>
      <p>As I applied John's techniques, I started seeing real results. My affiliate income began to grow steadily.</p>
      <h4>Life-Changing Results</h4>
      <p>Now, I'm earning more through affiliate marketing than I ever did in my 9-5 job. It's given me financial freedom and flexibility I never thought possible.</p>
    `
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showTranscript, setShowTranscript] = useState(false)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    setShowTranscript(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    setShowTranscript(false)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#C19B6C]">
          Success Stories from Our Students
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-black p-4 sm:p-8 rounded-lg shadow-lg">
            <div className="aspect-w-16 aspect-h-9 mb-6">
              <iframe
                src={testimonials[currentIndex].videoUrl}
                title={`Testimonial from ${testimonials[currentIndex].name}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg"
              ></iframe>
            </div>
            <p className="text-white text-lg mb-4">"{testimonials[currentIndex].text}"</p>
            <p className="text-[#C19B6C] font-semibold mb-4">- {testimonials[currentIndex].name}</p>
            <Button 
              onClick={() => setShowTranscript(!showTranscript)}
              variant="outline"
              className="mb-4"
            >
              {showTranscript ? 'Hide Transcript' : 'Show Transcript'}
            </Button>
            {showTranscript && (
              <div 
                className="text-white text-sm mt-4 p-4 bg-gray-800 rounded-lg"
                dangerouslySetInnerHTML={{ __html: testimonials[currentIndex].transcript }}
              />
            )}
          </div>
          <div className="flex justify-center mt-6 space-x-4">
            <Button onClick={prevTestimonial} variant="outline" size="icon" className="text-[#C19B6C]">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button onClick={nextTestimonial} variant="outline" size="icon" className="text-[#C19B6C]">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
