// components/About.tsx
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-12 bg-black text-white"
    >
      <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold">
          <span className="text-teal-400">Harith Madani</span>
        </h1>
        <p className="text-lg text-gray-300">
          Computer Science & Engineering @ The Ohio State University
        </p>
        <p className="text-sm text-gray-400">
          Class of 2027 • GPA:{" "}
          <span className="text-white font-semibold">3.93</span>
        </p>
        <p className="text-base text-gray-300 max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          scelerisque libero eget placerat porta. Nulla facilisi. Duis et justo
          non risus aliquam laoreet.
        </p>

        <div className="mt-4">
          <a
            href="#experience"
            className="px-6 py-2 border border-teal-400 text-teal-400 rounded hover:bg-teal-400 hover:text-black transition"
          >
            View My Experience
          </a>
        </div>
      </div>

      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-teal-400 shadow-lg hover:scale-105 transition">
          <Image
            src="/headshot.JPG"
            alt="Harith Madani"
            width={192}
            height={192}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
