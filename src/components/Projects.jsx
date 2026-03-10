import React from 'react'
import { IoMdLink, IoMdCode} from "react-icons/io";

const Projects = () => {
  return (
    <section className='py-24 px-6 bg-slate-950/30' id="projects">
        <div className='max-w-6xl mx-auto'>
            <h2 className='text-4xl font-bold mb-16 text-center'>Projects</h2>
            <div className='grid md:grid-cols-2 gap-8'>

                <div className='bg-[rgba(25,16,34,0.7)] backdrop-blur-md border border-[rgba(140,43,238,0.2)] p-6 group overflow-hidden rounded-3xl hover:border-[#8c2bee]/30 transition-all flex flex-col'>
                    <div className='aspect-video overflow-hidden relative'>
                        <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Screenshot of an AI Resume Analyzer interface with data visualizations" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIJ8-jGQMmEjXMSxZ7r1FEQcriYln1Iy73F5ZXkYFZRYld_xSPQO8xec9pT7f_dNKVGK3IZ3W9oN9H0ok9SF13qLN_S8J0VNxH-5J-oIUNM8Tmt0bYvVEHRUPidTfiazHh5i2UkLErjSeF4MRLMg6bSBbcnEugMkXBwfEdIrg0YCyob1a1tkxLk3TDvVFrxr7_1H_vrKlEKhaufL460Ai5eMw3M-W0u_8AmT-Kzbzs5mopp7nE4AB_SeK2vCqgwMyY2hzU3Pxo1q4"/>
                        <div class="absolute inset-0 bg-linear-to-t from-background-[#0a0510]/90 to-transparent"></div>
                        <div className='absolute bottom-4 left-6'>
                            <div className='flex gap-2'>
                                <span className='px-2 py-1 bg-[#8c2bee] text-white text-[10px] font-bold rounded'>Python</span>
                                <span className='px-2 py-1 bg-[#0a0510] text-white text-[10px] font-bold rounded'>NLP</span>
                            </div>
                        </div>
                    </div>
                    <div className='p-8 flex flex-col flex-1'>
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-[#8c2bee] transition-colors">AI Resume Analyzer</h3>
                        <p class="text-slate-400 mb-6 flex-1">An intelligent system that leverages NLP to parse resumes and match them against job descriptions with percentage accuracy scores.</p>
                        <div className='flex gap-4'>
                            <a href="#" className='flex items-center gap-2 text-sm font-bold text-[#8c2bee] hover:text-white transition-colors'>
                                <span class="text-lg"><IoMdLink /></span> Live Demo
                            </a>
                            <a href="#" className='flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-white transition-colors'>
                                <span class="text-lg"><IoMdCode /></span> GitHub
                            </a>
                        </div>
                    </div>
                </div>

                <div className='bg-[rgba(25,16,34,0.7)] backdrop-blur-md border border-[rgba(140,43,238,0.2)] p-6 group overflow-hidden rounded-3xl hover:border-[#8c2bee]/30 transition-all flex flex-col'>
                    <div className='aspect-video overflow-hidden relative'>
                        <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Screenshot of an AI Resume Analyzer interface with data visualizations" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIJ8-jGQMmEjXMSxZ7r1FEQcriYln1Iy73F5ZXkYFZRYld_xSPQO8xec9pT7f_dNKVGK3IZ3W9oN9H0ok9SF13qLN_S8J0VNxH-5J-oIUNM8Tmt0bYvVEHRUPidTfiazHh5i2UkLErjSeF4MRLMg6bSBbcnEugMkXBwfEdIrg0YCyob1a1tkxLk3TDvVFrxr7_1H_vrKlEKhaufL460Ai5eMw3M-W0u_8AmT-Kzbzs5mopp7nE4AB_SeK2vCqgwMyY2hzU3Pxo1q4"/>
                        <div class="absolute inset-0 bg-linear-to-t from-background-[#0a0510]/90 to-transparent"></div>
                        <div className='absolute bottom-4 left-6'>
                            <div className='flex gap-2'>
                                <span className='px-2 py-1 bg-[#8c2bee] text-white text-[10px] font-bold rounded'>Python</span>
                                <span className='px-2 py-1 bg-[#0a0510] text-white text-[10px] font-bold rounded'>NLP</span>
                            </div>
                        </div>
                    </div>
                    <div className='p-8 flex flex-col flex-1'>
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-[#8c2bee] transition-colors">AI Resume Analyzer</h3>
                        <p class="text-slate-400 mb-6 flex-1">An intelligent system that leverages NLP to parse resumes and match them against job descriptions with percentage accuracy scores.</p>
                        <div className='flex gap-4'>
                            <a href="#" className='flex items-center gap-2 text-sm font-bold text-[#8c2bee] hover:text-white transition-colors'>
                                <span class="text-lg"><IoMdLink /></span> Live Demo
                            </a>
                            <a href="#" className='flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-white transition-colors'>
                                <span class="text-lg"><IoMdCode /></span> GitHub
                            </a>
                        </div>
                    </div>
                </div>

                <div className='bg-[rgba(25,16,34,0.7)] backdrop-blur-md border border-[rgba(140,43,238,0.2)] p-6 group overflow-hidden rounded-3xl hover:border-[#8c2bee]/30 transition-all flex flex-col'>
                    <div className='aspect-video overflow-hidden relative'>
                        <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Screenshot of an AI Resume Analyzer interface with data visualizations" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIJ8-jGQMmEjXMSxZ7r1FEQcriYln1Iy73F5ZXkYFZRYld_xSPQO8xec9pT7f_dNKVGK3IZ3W9oN9H0ok9SF13qLN_S8J0VNxH-5J-oIUNM8Tmt0bYvVEHRUPidTfiazHh5i2UkLErjSeF4MRLMg6bSBbcnEugMkXBwfEdIrg0YCyob1a1tkxLk3TDvVFrxr7_1H_vrKlEKhaufL460Ai5eMw3M-W0u_8AmT-Kzbzs5mopp7nE4AB_SeK2vCqgwMyY2hzU3Pxo1q4"/>
                        <div class="absolute inset-0 bg-linear-to-t from-background-[#0a0510]/90 to-transparent"></div>
                        <div className='absolute bottom-4 left-6'>
                            <div className='flex gap-2'>
                                <span className='px-2 py-1 bg-[#8c2bee] text-white text-[10px] font-bold rounded'>Python</span>
                                <span className='px-2 py-1 bg-[#0a0510] text-white text-[10px] font-bold rounded'>NLP</span>
                            </div>
                        </div>
                    </div>
                    <div className='p-8 flex flex-col flex-1'>
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-[#8c2bee] transition-colors">AI Resume Analyzer</h3>
                        <p class="text-slate-400 mb-6 flex-1">An intelligent system that leverages NLP to parse resumes and match them against job descriptions with percentage accuracy scores.</p>
                        <div className='flex gap-4'>
                            <a href="#" className='flex items-center gap-2 text-sm font-bold text-[#8c2bee] hover:text-white transition-colors'>
                                <span class="text-lg"><IoMdLink /></span> Live Demo
                            </a>
                            <a href="#" className='flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-white transition-colors'>
                                <span class="text-lg"><IoMdCode /></span> GitHub
                            </a>
                        </div>
                    </div>
                </div>

                <div className='bg-[rgba(25,16,34,0.7)] backdrop-blur-md border border-[rgba(140,43,238,0.2)] p-6 group overflow-hidden rounded-3xl hover:border-[#8c2bee]/30 transition-all flex flex-col'>
                    <div className='aspect-video overflow-hidden relative'>
                        <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Screenshot of an AI Resume Analyzer interface with data visualizations" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIJ8-jGQMmEjXMSxZ7r1FEQcriYln1Iy73F5ZXkYFZRYld_xSPQO8xec9pT7f_dNKVGK3IZ3W9oN9H0ok9SF13qLN_S8J0VNxH-5J-oIUNM8Tmt0bYvVEHRUPidTfiazHh5i2UkLErjSeF4MRLMg6bSBbcnEugMkXBwfEdIrg0YCyob1a1tkxLk3TDvVFrxr7_1H_vrKlEKhaufL460Ai5eMw3M-W0u_8AmT-Kzbzs5mopp7nE4AB_SeK2vCqgwMyY2hzU3Pxo1q4"/>
                        <div class="absolute inset-0 bg-linear-to-t from-background-[#0a0510]/90 to-transparent"></div>
                        <div className='absolute bottom-4 left-6'>
                            <div className='flex gap-2'>
                                <span className='px-2 py-1 bg-[#8c2bee] text-white text-[10px] font-bold rounded'>Python</span>
                                <span className='px-2 py-1 bg-[#0a0510] text-white text-[10px] font-bold rounded'>NLP</span>
                            </div>
                        </div>
                    </div>
                    <div className='p-8 flex flex-col flex-1'>
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-[#8c2bee] transition-colors">AI Resume Analyzer</h3>
                        <p class="text-slate-400 mb-6 flex-1">An intelligent system that leverages NLP to parse resumes and match them against job descriptions with percentage accuracy scores.</p>
                        <div className='flex gap-4'>
                            <a href="#" className='flex items-center gap-2 text-sm font-bold text-[#8c2bee] hover:text-white transition-colors'>
                                <span class="text-lg"><IoMdLink /></span> Live Demo
                            </a>
                            <a href="#" className='flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-white transition-colors'>
                                <span class="text-lg"><IoMdCode /></span> GitHub
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