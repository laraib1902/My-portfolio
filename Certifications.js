import React from "react";

const certs = [
  { name: "Google Ads Apps Certification", by: "Google", date: "Sep 2026" },
  { name: "AI – Data Engineering Analyst", by: "NASSCOM · Skill India", date: "Jul 2026" },
  { name: "Fundamentals of Meta Advertising", by: "IIDE", date: "Jul 2026" },
  { name: "Claude 101", by: "Anthropic" },
  { name: "Responsive Web Design" },
  { name: "JavaScript Algorithms and Data Structures" },
  { name: "Front End Development Libraries" },
  { name: "Data Visualization" },
  { name: "Scientific Computing with Python" },
  { name: "College Algebra with Python" },
  { name: "Data Science with Python" },
];

export default function Certifications() {
  return (
    <section id="certifications" className="bg-white/60 py-24 dark:bg-slate-900/40">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Certifications</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certs.map((c) => (
            <div key={c.name}
              className="rounded-xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-emerald-500/60 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
              <h3 className="font-semibold text-slate-900 dark:text-white">{c.name}</h3>
              {c.by && <p className="mt-1 text-sm text-emerald-600 dark:text-emerald-400">{c.by}</p>}
              {c.date && <p className="text-sm text-slate-500">{c.date}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
