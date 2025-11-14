// app/page.tsx
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}
