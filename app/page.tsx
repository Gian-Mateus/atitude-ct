import Header from './components/header'
import About from './sections/about'
import AboutTeam from './sections/about-team'
import Slogan from './sections/sloga'
import Solutions from './sections/solutions'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center relative">
      <Header />
      <Slogan />
      <About />
      <AboutTeam />
      <Solutions />
    </main>
  )
}
