import React from "react";

const d = (ms) => ({ animationDelay: `${ms}ms` });

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-5 pt-20">
      <div className="pointer-events-none absolute -left-32 top-24 h-96 w-96 rounded-full bg-emerald-500/15 blur-3xl" />
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="fade-up mb-3 font-medium text-emerald-600 dark:text-emerald-400" style={d(100)}>
            Hi, I'm
          </p>
          <h1 className="fade-up text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl dark:text-white" style={d(250)}>
            Mohammad Laraib
          </h1>
          <h2 className="fade-up mt-3 text-2xl font-semibold text-slate-600 sm:text-3xl dark:text-slate-300" style={d(400)}>
            Frontend Developer &amp; Data Analyst
          </h2>
          <p className="fade-up mt-5 max-w-xl leading-relaxed" style={d(550)}>
            I build responsive interfaces with React and TypeScript, and turn data into clear answers with SQL, Power BI, and Python.
          </p>
          <div className="fade-up mt-8 flex flex-wrap gap-3" style={d(700)}>
            <a href="/resume.pdf" download="Mohammad_Laraib_Resume.pdf"
              className="rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:-translate-y-0.5 hover:bg-emerald-600">
              Download Resume
            </a>
            <a href="#projects"
              className="rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-800 transition hover:border-emerald-500 hover:text-emerald-600 dark:border-slate-700 dark:text-slate-200 dark:hover:text-emerald-400">
              View Projects
            </a>
          </div>
        </div>

        <div className="fade-up flex justify-center" style={d(500)}>
          <div className="float relative h-72 w-72 sm:h-80 sm:w-80">
            <div className="spin-slow absolute -inset-2 rounded-full bg-[conic-gradient(from_0deg,#10b981,#6366f1,#10b981)] opacity-80 blur-sm" />
            <img src="/profile.jpg" alt="Mohammad Laraib"
              className="relative h-full w-full rounded-full border-4 border-slate-50 object-cover object-top dark:border-slate-950" />
          </div>
        </div>
      </div>
    </section>
  );
}
