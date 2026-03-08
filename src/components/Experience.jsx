import React from "react";
import { PiBuildingOfficeBold } from "react-icons/pi";

const Experience = () => {
  return (
    <>
      <section className="py-24 px-6 bg-slate-950/50" id="experience">
        <div className="max-w-4xl mx-auto">
          <h2 class="text-4xl md:text-5xl font-bold text-white leading-tight italic text-center pb-16">
            Work Experience
          </h2>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 md:before:mx-auto before:-translate-x-px md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-primary/30 before:to-transparent">
            <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div class="flex items-center justify-center w-10 h-10 rounded-full border border-[#8c2bee] bg-[#0a0510] text-primary absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10  backdrop-blur-md p-6 group-hover:scale-110 transition-transform">
                <PiBuildingOfficeBold />
              </div>
              <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-2xl border border-primary/10 hover:border-primary/40 transition-all">
                <div class="flex items-center justify-between mb-2">
                  <h3 class="font-bold text-xl text-primary">Intern</h3>
                  <time class="text-xs text-slate-500 font-mono">
                    April 2025 - July 2025
                  </time>
                </div>
                <p class="text-slate-300 font-medium mb-3">SoftHire</p>
                <ul class="text-sm text-slate-500 space-y-2 list-disc list-inside">
                  <li>
                    Designed and developed user-friendly interfaces for web applications, focusing on improving usability, visual consistency, and overall user experience.
                  </li>
                  <li>
                    Collaborated with the development team to implement responsive UI components and optimize frontend performance using modern web technologies.
                  </li>
                </ul>
              </div>
            </div>

            <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div class="flex items-center justify-center w-10 h-10 rounded-full border border-primary/50 bg-background-dark text-primary absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10 glass group-hover:scale-110 transition-transform">
                <span class="material-symbols-outlined text-sm">palette</span>
              </div>
              <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-2xl border border-primary/10 hover:border-primary/40 transition-all">
                <div class="flex items-center justify-between mb-2">
                  <h3 class="font-bold text-xl text-primary">UI/UX Designer</h3>
                  <time class="text-xs text-slate-500 font-mono">
                    2022 - 2023
                  </time>
                </div>
                <p class="text-slate-300 font-medium mb-3">Programming Club</p>
                <ul class="text-sm text-slate-500 space-y-2 list-disc list-inside">
                  <li>
                    Led design for internal tools and hackathon platforms.
                  </li>
                  <li>Created high-fidelity prototypes and design systems.</li>
                </ul>
              </div>
            </div>

            <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div class="flex items-center justify-center w-10 h-10 rounded-full border border-primary/50 bg-background-dark text-primary absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10 glass group-hover:scale-110 transition-transform">
                <span class="material-symbols-outlined text-sm">groups</span>
              </div>
              <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-2xl border border-primary/10 hover:border-primary/40 transition-all">
                <div class="flex items-center justify-between mb-2">
                  <h3 class="font-bold text-xl text-primary">Designer</h3>
                  <time class="text-xs text-slate-500 font-mono">
                    2021 - 2022
                  </time>
                </div>
                <p class="text-slate-300 font-medium mb-3">
                  Computer Society of India (CSI)
                </p>
                <ul class="text-sm text-slate-500 space-y-2 list-disc list-inside">
                  <li>
                    Designed visual identities for tech workshops and seminars.
                  </li>
                  <li>
                    Worked closely with developers to implement responsive
                    designs.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
