import "./globals.css";
import Navbar from "./components/Navbar"; // Assuming you make a Navbar

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code&family=Rubik:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#121212] text-[#e0e0e0] font-sans tracking-tight leading-relaxed">
        <Navbar />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
