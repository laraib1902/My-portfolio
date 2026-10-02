import React, { useState } from "react";

const links = ["Home", "About", "Certifications", "Projects", "Contact"];

export default function Navbar({ dark, toggle }) {
  const [open, setOpen] = useState(false);
  const link = "rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400";

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/60 bg-white/70 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/60">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#home" className="text-lg font-bold text-slate-900 dark:text-white">
          Laraib<span className="text-emerald-500">.</span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l}><a href={`#${l.toLowerCase()}`} className={link}>{l}</a></li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <button onClick={toggle} aria-label="Toggle theme"
            className="rounded-full border border-slate-300 p-2 text-sm transition hover:border-emerald-500 dark:border-slate-700">
            {dark ? "☀️" : "🌙"}
          </button>
          <button onClick={() => setOpen(!open)} aria-label="Menu"
            className="rounded-md border border-slate-300 px-3 py-1.5 md:hidden dark:border-slate-700">
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>
      {open && (
        <ul className="border-t border-slate-200/60 px-5 py-2 md:hidden dark:border-white/10">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className={`block ${link}`}>{l}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
