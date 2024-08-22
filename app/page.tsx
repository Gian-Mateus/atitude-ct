import Header from "./components/header";
import About from "./sections/about";
import AboutTeam from "./sections/about-team";
import Palestras from "./sections/lectures";
import Slogan from "./sections/sloga";
import Solutions from "./sections/solutions";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center">
      <Header />
      <Slogan />
      <About />
      <AboutTeam />
      <Solutions />
      <Palestras />
      <Footer />
    </main>
  );
}
