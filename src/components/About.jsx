import React from 'react'
import { MdDataObject } from "react-icons/md";
import { FaCode } from "react-icons/fa6";

const About = () => {
    return (
        <>
            <style>{`
                @keyframes orbit {
                    0% { transform: rotate(0deg) translateX(80px) rotate(0deg); }
                    100% { transform: rotate(360deg) translateX(80px) rotate(-360deg); }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                @keyframes pulse-ring {
                    0% { transform: scale(0.8); opacity: 0.5; }
                    50% { transform: scale(1.1); opacity: 0.2; }
                    100% { transform: scale(0.8); opacity: 0.5; }
                }
                .sphere-container {
                    perspective: 1000px;
                    position: relative;
                }
                .sphere {
                    position: relative;
                    width: 200px;
                    height: 200px;
                    background: radial-gradient(circle at 30% 30%, rgba(140, 43, 238, 0.4), rgba(10, 5, 16, 0.8));
                    border-radius: 50%;
                    box-shadow: inset -10px -10px 50px rgba(0,0,0,0.5), inset 10px 10px 50px rgba(140, 43, 238, 0.2), 0 0 50px rgba(140, 43, 238, 0.3);
                    backdrop-filter: blur(8px);
                }
                .ring {
                    position: absolute;
                    border: 1px solid rgba(140, 43, 238, 0.3);
                    border-radius: 50%;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    animation: pulse-ring 4s ease-in-out infinite;
                }
                .glass {
                    background: rgba(15, 23, 42, 0.6);
                    backdrop-filter: blur(8px);
                    border: 1px solid rgba(140, 43, 238, 0.4);
                }
                .text-gradient {
                    background: linear-gradient(135deg, #8c2bee, #d946ef);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
                .delay-700 {
                    animation-delay: 700ms;
                }
            `}</style>
            
            <section className="py-24 px-6 max-w-6xl mx-auto" id="about">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="relative min-h-100 flex items-center justify-center overflow-hidden rounded-3xl  bg-slate-950/20 group">
                        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#8c2bee_1px,transparent_1px)] The class `bg-[size:20px_20px]` can be written as `bg-size-[20px_20px]`[mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
                        
                        {/* Floating Glows */}
                        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-purple-600/30 rounded-full blur-[80px] animate-pulse"></div>
                        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-violet-600/20 rounded-full blur-[60px] animate-pulse" style={{animationDelay: '2s'}}></div>
                        
                        {/* Holographic Illustration Core */}
                        <div className="relative z-10 flex flex-col items-center justify-center">
                            <div className="sphere-container transform hover:scale-110 transition-transform duration-700">
                                <div className="sphere relative flex items-center justify-center">
                                    {/* Inner Neural Network Lines */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-60">
                                        <svg className="w-32 h-32 animate-spin" viewBox="0 0 100 100" style={{animationDuration: '10s'}}>
                                            <circle cx="50" cy="50" fill="none" r="45" stroke="#8c2bee" strokeDasharray="4 8" strokeWidth="0.5"></circle>
                                            <circle cx="50" cy="50" fill="none" r="35" stroke="#8c2bee" strokeDasharray="1 4" strokeWidth="0.5"></circle>
                                            <path d="M50 5 L50 95 M5 50 L95 50 M18 18 L82 82 M18 82 L82 18" stroke="#8c2bee" strokeWidth="0.2"></path>
                                        </svg>
                                    </div>
                                    
                                    {/* Glowing Center */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full" style={{boxShadow: '0 0 20px #fff, 0 0 40px #8c2bee'}}></div>
                                </div>
                                
                                {/* Rings */}
                                <div className="ring" style={{ width: '240px', height: '240px' }}></div>
                                <div className="ring opacity-20" style={{ width: '300px', height: '300px', animationDelay: '-1s' }}></div>
                            </div>
                            
                            {/* Isometric Floating Cards */}
                            <div className="absolute -top-10 -right-10 glass p-3 rounded-xl border-purple-600/40 animate-[float_5s_ease-in-out_infinite]" style={{animationDelay: '700ms'}}>
                                <MdDataObject />
                            </div>
                            <div className="absolute bottom-0 -left-12 glass p-3 rounded-xl border-purple-600/40 animate-[float_7s_ease-in-out_infinite]">
                                <FaCode />
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex flex-col gap-6">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h3 className="text-4xl md:text-5xl font-extrabold text-white leading-tight italic">
                                    About Me 
                                </h3>
                            </div>
                            
                            <div className="space-y-6 max-w-lg text-lg">
                                <p className="text-slate-200 font-light leading-relaxed">
                                    I’m Shreyaa Katiyar, a passionate Fullstack Developer and UI/UX Designer who enjoys building modern, user-focused digital experiences. I love transforming ideas into functional and visually engaging applications by combining clean code with thoughtful design. 
                                </p>
                                <p className="text-slate-400 font-light leading-relaxed">
                                    My interests lie in creating intuitive interfaces, developing scalable web applications, and exploring AI-powered solutions that enhance how people interact with technology. I’m always excited to learn new tools, take on challenging projects, and build products that make a meaningful impact.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;

   
