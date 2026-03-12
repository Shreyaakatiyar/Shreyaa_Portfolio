import React from "react";
import { PiBuildingOfficeBold } from "react-icons/pi";

const Experience = () => {
  const experiences = [
    {
      title: "Intern",
      company: "SoftHire",
      period: "April 2025 - July 2025",
      icon: "corporate_fare",
      points: [
        "Designed and developed user-friendly interfaces for web applications, focusing on improving usability, visual consistency, and overall user experience.",
        "Collaborated with the development team to implement responsive UI components and optimize frontend performance using modern web technologies.",
      ],
    },
    {
      title: "UI/UX Designer",
      company: "Programming Club",
      period: "2022 - 2023",
      icon: "palette",
      points: [
        "Led design for internal tools and hackathon platforms.",
        "Created high-fidelity prototypes and design systems.",
      ],
    },
    {
      title: "Designer",
      company: "Computer Society of India (CSI)",
      period: "2021 - 2022",
      icon: "groups",
      points: [
        "Designed visual identities for tech workshops and seminars.",
        "Worked closely with developers to implement responsive designs.",
      ],
    },
  ];

  return (
    <>
      <style>{`
        .exp-item:has(.exp-card:hover) .exp-circle {
          transform: scale(1.1);
        }
      `}</style>
      <section className="py-12 md:py-24 px-4 md:px-8 bg-slate-950/50" id="experience">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight text-center pb-8 md:pb-16">
            Work Experience
          </h2>

          {/* Mobile Layout - Simple Cards */}
          <div className="md:hidden space-y-4">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-[rgba(25,16,34,0.7)] backdrop-blur-md border border-[rgba(140,43,238,0.2)] p-5 rounded-xl hover:border-[#8c2bee]/40 transition-all"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-[#8c2bee]/10 flex items-center justify-center">
                    <PiBuildingOfficeBold className="text-[#8c2bee]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-[#8c2bee]">{exp.title}</h3>
                    <p className="text-slate-400 text-sm">{exp.company}</p>
                  </div>
                </div>
                <time className="text-xs text-slate-500 font-mono mb-3 block">
                  {exp.period}
                </time>
                <ul className="text-xs text-slate-500 space-y-1 list-disc list-inside">
                  {exp.points.map((point, idx) => (
                    <li key={idx} className="line-clamp-2">{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Tablet & Desktop Layout - Timeline */}
          <div className="hidden md:block space-y-8 relative before:absolute before:inset-0 before:ml-5 lg:before:mx-auto before:-translate-x-px lg:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-[#8c2bee]/30 before:to-transparent">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="exp-item relative flex items-center justify-between lg:justify-normal lg:odd:flex-row-reverse"
              >
                <div className="exp-circle flex items-center justify-center w-10 h-10 rounded-full border border-[#8c2bee] bg-[#0a0510] text-[#8c2bee] absolute left-0 lg:left-1/2 lg:-translate-x-1/2 z-10 backdrop-blur-md p-6 transition-transform">
                  <span className="material-symbols-outlined text-sm">
                    <PiBuildingOfficeBold />
                  </span>
                </div>
                <div className="exp-card w-[calc(100%-3rem)] lg:w-[calc(50%-2.5rem)] bg-[rgba(25,16,34,0.7)] backdrop-blur-md border-[rgba(140,43,238,0.2)] p-6 rounded-2xl border hover:border-[#8c2bee]/40 transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-lg md:text-xl text-[#8c2bee]">
                      {exp.title}
                    </h3>
                    <time className="text-xs text-slate-500 font-mono">
                      {exp.period}
                    </time>
                  </div>
                  <p className="text-slate-300 font-medium mb-3 text-sm md:text-base">
                    {exp.company}
                  </p>
                  <ul className="text-xs md:text-sm text-slate-500 space-y-2 list-disc list-inside">
                    {exp.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;

