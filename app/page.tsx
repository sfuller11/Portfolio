"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen text-slate-950 dark:text-slate-100 scroll-smooth">

      {/* Background Image */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-40 blur-sm"
        style={{ backgroundImage: "url('/Images/marsha.jpg')" }}
      />

      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/70 dark:bg-slate-900/70 shadow-sm z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-tight">Sean Fuller</h1>

          <div className="flex gap-6 text-sm font-medium">
            <a href="#summary" className="hover:text-blue-600 transition">Summary</a>
            <a href="#skills" className="hover:text-blue-600 transition">Skills</a>
            <a href="#experience" className="hover:text-blue-600 transition">Experience</a>
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-28 px-6 pb-20">
        <div className="max-w-4xl mx-auto bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-xl rounded-xl p-10">

          {/* Header */}
          <header className="text-center mb-10">
            <h2 className="text-4xl font-bold tracking-tight">Full‑Stack Software Engineer</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              King of Prussia, Pennsylvania
            </p>

            <div className="flex justify-center gap-4 mt-4 text-blue-600">
              <a href="https://www.linkedin.com" target="_blank" className="hover:underline">LinkedIn</a>
              <a href="https://sfuller11.github.io" target="_blank" className="hover:underline">Portfolio</a>
              <a href="mailto:seanf1018@yahoo.com" className="hover:underline">Email</a>
              <a href="tel:2672747857" className="hover:underline">Phone</a>
            </div>

            {/* Download Button */}
            <div className="mt-6">
              <Link
                href="/Sean Fuller.pdf"
                download
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
              >
                Download Resume
              </Link>
            </div>
          </header>

          {/* Summary */}
          <section id="summary" className="mb-14 scroll-mt-24">
            <h3 className="text-2xl font-semibold mb-3">Professional Summary</h3>
            <p className="leading-relaxed text-gray-700 dark:text-gray-300">
              Full‑stack Software Engineer experienced in developing, supporting, and securing
              enterprise-level web applications using C#, JavaScript, SQL Server, and modern AI tools
              such as Microsoft Copilot and Claude Code. Strong foundation in object‑oriented
              programming, UI/UX design, Agile/DevOps workflows, and cybersecurity. Proven ability to
              refactor legacy systems, eliminate technical debt, and deliver scalable improvements.
            </p>
          </section>

          {/* Skills */}
          <section id="skills" className="mb-14 scroll-mt-24">
            <h3 className="text-2xl font-semibold mb-3">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 dark:text-gray-300">
              <div>
                <h4 className="font-medium">Languages</h4>
                <p>C#, JavaScript (ES6+), HTML5, CSS3, SQL, Ruby on Rails</p>
              </div>
              <div>
                <h4 className="font-medium">Frameworks</h4>
                <p>.NET (3–9), ASP.NET, React, Vue, jQuery, Spring</p>
              </div>
              <div>
                <h4 className="font-medium">Databases</h4>
                <p>SQL Server, MongoDB</p>
              </div>
              <div>
                <h4 className="font-medium">Cloud & DevOps</h4>
                <p>Azure AD/MFA, AWS, Docker, Kubernetes, CI/CD</p>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section id="experience" className="mb-14 scroll-mt-24">
            <h3 className="text-2xl font-semibold mb-3">Professional Experience</h3>

            <div className="mb-8">
              <h4 className="text-xl font-bold">Software Engineer — UHS</h4>
              <p className="text-gray-600 dark:text-gray-400">June 2022 – Present</p>
              <ul className="list-disc ml-6 mt-2 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Modernized Item Request platform from .NET Framework 4.7 to .NET 9.</li>
                <li>Enhanced SQL structures for multi‑user request handling.</li>
                <li>Automated supply chain reporting using SQL + SSRS.</li>
                <li>Built CI/CD workflows for IIS deployments.</li>
                <li>Developed delegated access platform using Azure AD + Graph API.</li>
                <li>Implemented MFA and Azure AD authentication across applications.</li>
                <li>Leveraged Copilot + Claude for automation and knowledge agents.</li>
              </ul>
            </div>

            <div className="mb-8">
              <h4 className="text-xl font-bold">Software Engineer Intern — UHS</h4>
              <p className="text-gray-600 dark:text-gray-400">June 2021 – December 2021</p>
              <ul className="list-disc ml-6 mt-2 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Built vendor identification application using .NET Core + SQL.</li>
                <li>Refactored legacy codebases and developed new APIs.</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold">Associate Client Services Representative — Hibbert Group</h4>
              <p className="text-gray-600 dark:text-gray-400">May 2019 – August 2020</p>
              <ul className="list-disc ml-6 mt-2 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Managed pharmaceutical orders with accuracy.</li>
                <li>Validated client requests and documented requirements.</li>
                <li>Maintained product specifications in company databases.</li>
              </ul>
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="scroll-mt-24">
            <h3 className="text-2xl font-semibold mb-3">Contact</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Email: <a href="mailto:seanf1018@yahoo.com" className="text-blue-600">seanf1018@yahoo.com</a><br />
              Phone: <a href="tel:2672747857" className="text-blue-600">267‑274‑7857</a>
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
