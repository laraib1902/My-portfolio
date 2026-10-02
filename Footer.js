import React from "react";

const EMAIL = "laraibsiddiqui81@gmail.com";
const icon = "h-6 w-6 fill-current";

export default function Footer() {
  const btn = "rounded-full border border-slate-300 p-3 text-slate-600 transition hover:-translate-y-0.5 hover:border-emerald-500 hover:text-emerald-600 dark:border-slate-700 dark:text-slate-300 dark:hover:text-emerald-400";
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white/60 py-16 dark:border-slate-800 dark:bg-slate-900/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 text-center">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Let's work together</h2>
        <p>Have a role or project in mind? Send me an email.</p>
        <a href={`mailto:${EMAIL}`} className="text-lg font-semibold text-emerald-600 hover:underline dark:text-emerald-400">{EMAIL}</a>
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/laraib-siddiqui1902" target="_blank" rel="noreferrer" aria-label="LinkedIn" className={btn}>
            <svg viewBox="0 0 24 24" className={icon}><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4V21H3V9.75zM10 9.75h3.8v1.6h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.2c0-1.24-.02-2.84-1.73-2.84-1.73 0-2 1.35-2 2.75V21h-4V9.75z"/></svg>
          </a>
          <a href="https://github.com/laraib1902" target="_blank" rel="noreferrer" aria-label="GitHub" className={btn}>
            <svg viewBox="0 0 24 24" className={icon}><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z"/></svg>
          </a>
        </div>
        <p className="text-sm text-slate-500">© {new Date().getFullYear()} Mohammad Laraib</p>
      </div>
    </footer>
  );
}
