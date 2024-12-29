import Header from './components/Header'
import Hero from './components/Hero'
import Proof from './components/Proof'
import Background from './components/Background'
import AffiliateMarketing from './components/AffiliateMarketing'
import Courses from './components/Courses'
import SuccessStories from './components/SuccessStories'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'
import CourseEvolution from './components/CourseEvolution'
import FomoBanner from './components/FomoBanner'

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <FomoBanner />
      <Header />
      <main>
        <Hero />
        <CourseEvolution />
        <Proof />
        <Background />
        <AffiliateMarketing />
        <Courses />
        <SuccessStories />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
