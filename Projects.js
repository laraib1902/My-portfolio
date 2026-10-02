import React, { useState } from "react";

const GITHUB = "https://github.com/laraib1902";

const projects = [
  { title: "HR Analytics Dashboard", stack: ["Power BI", "DAX", "Data Visualization"],
    text: "An interactive dashboard on employee data: KPI cards for headcount, attrition count, attrition rate and average monthly income, with attrition broken down by department, job role, salary hike and overtime." },
  { title: "Heart Disease Analysis Dashboard", stack: ["Power BI", "DAX", "Slicers"],
    text: "A dashboard on a synthetic patient dataset: KPIs for total patients, heart disease cases and %, average age, cholesterol and blood pressure, with heart disease rate by gender, age group, smoking status and chest pain type." },
  { title: "Movie Search App", stack: ["HTML", "CSS", "JavaScript"],
    text: "A responsive web app that lets users search for movies by title and view key details in one place." },
  { title: "Survey Form", stack: ["HTML", "CSS"],
    text: "A simple survey form to collect people's opinions and feedback in an easy and organised way." },
  { title: "Technical Documentation Page", stack: ["HTML", "CSS"],
    text: "A documentation page that helps users understand features and project setup." },
  { title: "Data Visualization – Bar Chart", stack: ["Data Visualization"],
    text: "A simple tool that displays information as a bar chart for better understanding." },
];

export default function Projects() {
  const [active, setActive] = useState(0);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-24">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Projects</h2>
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {projects.map((p, i) => (
          <article key={p.title} onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)} tabIndex={0}
            className={`rounded-2xl border p-6 outline-none transition duration-300 ${
              active === i
                ? "-translate-y-1 border-emerald-500/70 bg-white shadow-xl shadow-emerald-500/10 dark:bg-slate-900"
                : "border-slate-200 bg-white/60 dark:border-slate-800 dark:bg-slate-900/40"
            }`}>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{p.title}</h3>
            <p className="mt-2 leading-relaxed">{p.text}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span key={s} className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">{s}</span>
              ))}
            </div>
            <a href={GITHUB} target="_blank" rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-600 dark:bg-slate-800 dark:hover:bg-emerald-600">
              View on GitHub
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
