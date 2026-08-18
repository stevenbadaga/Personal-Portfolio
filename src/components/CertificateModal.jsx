import React, { useEffect } from "react";

export default function CertificateModal({ cert, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!cert) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-modal">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-stone-300 dark:border-neutral-800 bg-[#FAF9F6] dark:bg-[#0C0C0C] p-6 sm:p-8 text-slate-900 dark:text-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-stone-200 dark:border-neutral-800 pb-3 mb-4">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-500">
              {cert.category}
            </span>
            <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
              {cert.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="h-8 w-8 rounded-full border border-stone-300 dark:border-neutral-700 bg-stone-100 dark:bg-neutral-900 text-slate-600 dark:text-neutral-400 hover:text-white flex items-center justify-center transition"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        <div className="space-y-4 text-xs text-slate-600 dark:text-neutral-300">
          <p className="leading-relaxed">{cert.description}</p>
          <div className="rounded-xl border border-stone-200 dark:border-neutral-800 bg-stone-100 dark:bg-black p-3 font-mono text-[11px] text-slate-700 dark:text-neutral-400">
            Issued by: {cert.issuer} ({cert.date})
          </div>

          {cert.type === "image" && cert.fileUrl && (
            <div className="overflow-hidden rounded-xl border border-stone-200 dark:border-neutral-800 mt-3">
              <img src={cert.fileUrl} alt={cert.title} className="w-full object-contain max-h-96" />
            </div>
          )}
        </div>

        <div className="mt-6 flex items-center justify-between gap-3">
          {cert.fileUrl ? (
            <a
              href={cert.fileUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-full bg-emerald-500 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-950 hover:bg-emerald-400 transition"
            >
              Open Full Document ↗
            </a>
          ) : (
            <div />
          )}
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-stone-300 dark:border-neutral-700 bg-stone-100 dark:bg-neutral-900 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-neutral-300 hover:border-amber-500"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
