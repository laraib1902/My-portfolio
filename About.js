import React from "react";

const skills = {
  Programming: ["Python", "SQL", "C", "JavaScript", "TypeScript", "HTML", "CSS"],
  Frontend: ["React", "Tailwind CSS", "Bootstrap", "Responsive Design"],
  "Data & Analytics": ["SQL", "Power BI", "DAX", "Data Analysis", "Data Visualization", "Data Science with Python"],
  Tools: ["GitHub", "REST APIs", "Canva", "LeetCode", "Claude"],
};

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white">About me</h2>
      <div className="mt-8 grid gap-10 md:grid-cols-2">
        <div className="space-y-4 leading-relaxed">
          <p>
            Computer Science undergraduate skilled in front-end development with React, TypeScript, and Tailwind CSS, and in data analysis using SQL, Power BI, and Python. Built responsive web projects and data visualizations, and completed certifications in AI, data engineering, and digital advertising. Trained through IIT Kanpur programs, with strong problem-solving, teamwork, and public speaking skills.
          </p>
          <p>
            <span className="font-semibold text-slate-900 dark:text-white">Education: </span>
            B.Tech in Computer Science, Krishna Institute of Technology, Kanpur (71%).
          </p>
          <p>
            <span className="font-semibold text-slate-900 dark:text-white">Achievements: </span>
            1st rank in Speak to Peak (public speaking) and 2nd rank in War of Words (debate).
          </p>
        </div>
        <div className="space-y-5">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group}>
              <h3 className="mb-2 text-sm font-semibold text-slate-900 dark:text-white">{group}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <span key={s} className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-700 dark:text-emerald-300">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
