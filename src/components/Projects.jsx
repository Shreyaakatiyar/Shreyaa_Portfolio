import React from 'react'
import { IoMdLink, IoMdCode} from "react-icons/io";
import DevIntelImg from "../assets/DevIntel.png";
import CareerTrackImg from "../assets/CareerTrack.png";
import SoftHireImg from "../assets/SoftHire.png";

const Projects = () => {
  return (
    <section className='py-24 px-6 bg-slate-950/30' id="projects">
        <div className='max-w-6xl mx-auto'>
            <h2 className='text-4xl font-bold mb-16 text-center'>Projects</h2>
            <div className='grid md:grid-cols-2 gap-8'>

                <div className='bg-[rgba(25,16,34,0.7)] backdrop-blur-md border border-[rgba(140,43,238,0.2)] p-6 group overflow-hidden rounded-3xl hover:border-[#8c2bee]/30 transition-all flex flex-col'>
                    <div className='aspect-video overflow-hidden relative'>
                        <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="DevIntel" src={DevIntelImg}/>
                        <div className="absolute inset-0 bg-linear-to-t from-background-[#0a0510]/90 to-transparent"></div>
                        <div className='absolute bottom-4 left-6'>
                            <div className='flex gap-2'>
                                <span className='px-2 py-1 bg-[#8c2bee] text-white text-[10px] font-bold rounded'>React</span>
                                <span className='px-2 py-1 bg-[#0a0510] text-white text-[10px] font-bold rounded'>Tailwind</span>
                                <span className='px-2 py-1 bg-[#8c2bee] text-white text-[10px] font-bold rounded'>GitHub API</span>
                                <span className='px-2 py-1 bg-[#0a0510] text-white text-[10px] font-bold rounded'>AI Insights</span>
                            </div>
                        </div>
                    </div>
                    <div className='p-8 flex flex-col flex-1'>
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-[#8c2bee] transition-colors">DevIntel</h3>
                        <p className="text-slate-400 mb-6 flex-1">DevIntel is a GitHub developer analytics platform that transforms complex GitHub data into clear, visual insights. It allows users to explore developer profiles, analyze language usage, and compare activity through an intuitive dashboard built with React and Tailwind.</p>
                        <div className='flex gap-4'>
                            <a href="https://dev-intel-two.vercel.app/" target='_blank' rel="noopener noreferrer" className='flex items-center gap-2 text-sm font-bold text-[#8c2bee] hover:text-white transition-colors'>
                                <span className="text-lg"><IoMdLink /></span> Live Demo
                            </a>
                            <a href="https://github.com/Shreyaakatiyar/DevIntel" target='_blank' rel="noopener noreferrer" className='flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-white transition-colors'>
                                <span className="text-lg"><IoMdCode /></span> GitHub
                            </a>
                        </div>
                    </div>
                </div>

                <div className='bg-[rgba(25,16,34,0.7)] backdrop-blur-md border border-[rgba(140,43,238,0.2)] p-6 group overflow-hidden rounded-3xl hover:border-[#8c2bee]/30 transition-all flex flex-col'>
                    <div className='aspect-video overflow-hidden relative'>
                        <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="CareerTrack" src={CareerTrackImg}/>
                        <div className="absolute inset-0 bg-linear-to-t from-background-[#0a0510]/90 to-transparent"></div>
                        <div className='absolute bottom-4 left-6'>
                            <div className='flex gap-2'>
                                <span className='px-2 py-1 bg-[#8c2bee] text-white text-[10px] font-bold rounded'>React</span>
                                <span className='px-2 py-1 bg-[#0a0510] text-white text-[10px] font-bold rounded'>Tailwind</span>
                                <span className='px-2 py-1 bg-[#8c2bee] text-white text-[10px] font-bold rounded'>Firebase</span>
                                <span className='px-2 py-1 bg-[#0a0510] text-white text-[10px] font-bold rounded'>AI Insights</span>
                            </div>
                        </div>
                    </div>
                    <div className='p-8 flex flex-col flex-1'>
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-[#8c2bee] transition-colors">CareerTrack</h3>
                        <p className="text-slate-400 mb-6 flex-1">CareerTrack is a job and internship tracking application designed to help users organize applications, monitor progress, and stay on top of opportunities. It includes authentication, dashboard analytics, and real-time data integration using Firebase.</p>
                        <div className='flex gap-4'>
                            <a href="https://career-track-three.vercel.app/" target='_blank' rel="noopener noreferrer" className='flex items-center gap-2 text-sm font-bold text-[#8c2bee] hover:text-white transition-colors'>
                                <span className="text-lg"><IoMdLink /></span> Live Demo
                            </a>
                            <a href="https://github.com/Shreyaakatiyar/CareerTrack" target='_blank' rel='noopener noreferrer' className='flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-white transition-colors'>
                                <span className="text-lg"><IoMdCode /></span> GitHub
                            </a>
                        </div>
                    </div>
                </div>

                <div className='bg-[rgba(25,16,34,0.7)] backdrop-blur-md border border-[rgba(140,43,238,0.2)] p-6 group overflow-hidden rounded-3xl hover:border-[#8c2bee]/30 transition-all flex flex-col'>
                    <div className='aspect-video overflow-hidden relative'>
                        <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="SoftHire" src={SoftHireImg}/>
                        <div className="absolute inset-0 bg-linear-to-t from-background-[#0a0510]/90 to-transparent"></div>
                        <div className='absolute bottom-4 left-6'>
                            <div className='flex gap-2'>
                                <span className='px-2 py-1 bg-[#8c2bee] text-white text-[10px] font-bold rounded'>Figma</span>
                                <span className='px-2 py-1 bg-[#0a0510] text-white text-[10px] font-bold rounded'>UI/UX Design</span>
                            </div>
                        </div>
                    </div>
                    <div className='p-8 flex flex-col flex-1'>
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-[#8c2bee] transition-colors">SoftHire</h3>
                        <p className="text-slate-400 mb-6 flex-1">SoftHire is a UI/UX design project for a hiring platform focused on improving candidate and recruiter experience. It emphasizes intuitive user flows, clean dashboards, and user-centric design to simplify the hiring process.</p>
                        <div className='flex gap-4'>
                            <a href="#" className='flex items-center gap-2 text-sm font-bold text-[#8c2bee] hover:text-white transition-colors'>
                                <span className="text-lg"><IoMdLink /></span> Live Demo
                            </a>
                            <a href="#" className='flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-white transition-colors'>
                                <span className="text-lg"><IoMdCode /></span> GitHub
                            </a>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    </section>
  )
}

export default Projects