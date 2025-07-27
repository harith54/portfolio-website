// app/page.tsx
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <About />
      <Experience />
      <Skills />
      <Contact />
    </>
  );
}
