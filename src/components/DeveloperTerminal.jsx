import React, { useState, useRef, useEffect } from "react";

export default function DeveloperTerminal() {
  const [history, setHistory] = useState([
    { text: "System initialized. Steven Irankunda Badaga Developer Shell v2.4", type: "system" },
    { text: "Type 'help' or click presets below to inspect engineering capabilities.", type: "info" }
  ]);
  const [inputVal, setInputVal] = useState("");
  const terminalEndRef = useRef(null);

  const executeCommand = (cmdStr) => {
    const cmd = cmdStr.trim().toLowerCase();
    let newLogs = [...history, { text: `$ ${cmdStr}`, type: "command" }];

    switch (cmd) {
      case "help":
        newLogs.push({
          text: "Available commands: about | projects | skills | status | contact | certs | clear",
          type: "output"
        });
        break;
      case "about":
        newLogs.push({
          text: "Steven Irankunda Badaga — Software Engineer based in Kigali, Rwanda.\nBuilding full-stack web applications, Spring Boot backend services, GIS systems, and operational business platforms.",
          type: "output"
        });
        break;
      case "skills":
        newLogs.push({
          text: "Core Stack: React, Vite, Java, Spring Boot, Node.js/Express, PostgreSQL, PostGIS, GIS Interfaces, WebSockets (STOMP), REST APIs, Tailwind CSS, Docker Compose.",
          type: "output"
        });
        break;
      case "projects":
        newLogs.push({
          text: "1. Volcano Arts Center — Live Cultural & E-Commerce Platform (volcanoartscenterinc.org.rw)\n2. CODAFRIQA — Live Full-Stack Technology Platform (codafriqa.rw)\n3. GeoSmart Manager — GIS & Land Subdivision Management System\n4. Restaurant POS — Full-Stack Restaurant Operations System\n5. Larita Motel — Hospitality Booking & Management Platform",
          type: "output"
        });
        break;
      case "status":
        newLogs.push({
          text: "STATUS: Open for Full-Stack Software Engineering roles, Backend engineering positions, and technical contracts.",
          type: "success"
        });
        break;
      case "contact":
        newLogs.push({
          text: "Email: badagaclass@gmail.com\nPhone: +250 788 883 986\nGitHub: https://github.com/stevenbadaga\nLinkedIn: https://www.linkedin.com/in/steven-irankunda-badaga-54b7a62b2/",
          type: "output"
        });
        break;
      case "certs":
        newLogs.push({
          text: "Certifications & Credentials:\n• English Proficiency Certificate — AUCA (Certified 2026)\n• Harambe Alliance Tech & Entrepreneurship Certificate (Certified 2026)\n• Software Engineering Capstone Distinction — AUCA (2025-2026)",
          type: "output"
        });
        break;
      case "clear":
        newLogs = [];
        break;
      default:
        if (cmd !== "") {
          newLogs.push({
            text: `Command not recognized: '${cmdStr}'. Type 'help' for available commands.`,
            type: "error"
          });
        }
    }

    setHistory(newLogs);
    setInputVal("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputVal) executeCommand(inputVal);
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  return (
    <div className="rounded-2xl border border-stone-300 dark:border-neutral-800 bg-[#080808] shadow-2xl overflow-hidden font-mono text-xs text-neutral-300">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between bg-[#121212] px-3.5 py-2.5 border-b border-neutral-800">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/80 inline-block" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80 inline-block" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-500/80 inline-block" />
          <span className="ml-1 text-[10px] sm:text-[11px] font-bold text-neutral-400">steven@badaga-shell:~</span>
        </div>
        <span className="text-[9px] sm:text-[10px] text-amber-400 font-semibold uppercase tracking-wider">DEV CLI</span>
      </div>

      {/* Terminal Output Area */}
      <div className="p-3 sm:p-4 h-36 sm:h-44 overflow-y-auto space-y-1.5 scrollbar-thin bg-black">
        {history.map((item, idx) => (
          <div
            key={idx}
            className={`leading-relaxed whitespace-pre-wrap text-[11px] sm:text-xs ${
              item.type === "command"
                ? "text-amber-400 font-bold"
                : item.type === "success"
                ? "text-emerald-400 font-semibold"
                : item.type === "error"
                ? "text-rose-400"
                : item.type === "info"
                ? "text-teal-300"
                : "text-neutral-300"
            }`}
          >
            {item.text}
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Preset Command Chips */}
      <div className="bg-[#121212] px-2.5 py-2 border-t border-neutral-800 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
        <span className="text-[9px] uppercase text-neutral-500 font-bold shrink-0">Presets:</span>
        {["about", "projects", "skills", "status", "certs", "contact", "clear"].map((preset) => (
          <button
            key={preset}
            type="button"
            onClick={() => executeCommand(preset)}
            className="rounded bg-neutral-900 hover:bg-amber-500/20 hover:text-amber-300 border border-neutral-800 px-2 py-1 text-[10px] font-bold uppercase transition text-neutral-300 shrink-0"
          >
            {preset}
          </button>
        ))}
      </div>

      {/* Command Input Form */}
      <form onSubmit={handleSubmit} className="flex items-center px-3 sm:px-4 py-2 bg-black border-t border-neutral-800">
        <span className="text-emerald-400 font-bold mr-2 text-xs">$</span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Type 'help'..."
          className="w-full bg-transparent text-white focus:outline-none placeholder-neutral-600 text-xs"
        />
        <button type="submit" className="sr-only">Submit</button>
      </form>
    </div>
  );
}
