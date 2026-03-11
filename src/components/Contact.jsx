import { color } from 'motion';
import React, { useState, useRef } from 'react'
import { MdMailOutline } from "react-icons/md";
import { IoMdLink} from "react-icons/io";
import { FaGithub,FaLinkedinIn } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import emailjs from "@emailjs/browser";

//using emailjs to receive mails
const Contact = () => {
    const form = useRef();
    const [lastSent, setLastSent] = useState(0);
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
      e.preventDefault();

      const now = Date.now();

      if (now - lastSent < 30000) {
        alert("Please wait before sending another message.");
        return;
      }

      setLastSent(now);

      setLoading(true);

      emailjs
        .sendForm(
          "service_gricvyg",
          "template_xkhf9sq",
          form.current,
          "OL4a9k7bGZmL_7gy-",
        )
        .then(
          () => {
            setLoading(false);
            alert("Message sent successfully!");
          },
          (error) => {
            setLoading(false);
            alert("Failed to send message.");
          },
        );
      e.target.reset();
    };


  return (
    <section className="py-24 px-6 max-w-6xl mx-auto" id="contact">
      <div className="bg-[rgba(25,16,34,0.7)] backdrop-blur-m border border-[rgba(140,43,238,0.2)] p-6 rounded-[40px] overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="p-12 md:p-16 flex flex-col justify-center gap-8 bg-[#8c2bee]/5">
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              Let's build something{" "}
              <span className="text-[#8c2bee]">together</span>
            </h2>
            <p className="text-slate-400">
              Open for collaborations, freelance projects, or just a coffee chat
              about AI and Design.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="size-12 rounded-full bg-[rgba(25,16,34,0.7)] backdrop-blur-md border border-[rgba(140,43,238,0.2)] p-6 flex items-center justify-center group-hover:bg-[#8c2bee] transition-colors">
                  <span>
                    <MdMailOutline style={{ fontSize: "22px" }} />
                  </span>
                </div>
                <a href="mailto:yourgmail@gmail.com">
                  <span className="font-medium text-slate-300 group-hover:text-[#8c2bee] transition-colors">
                    shreyaakatiyar@gmail.com
                  </span>
                </a>
              </div>

              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="size-12 rounded-full bg-[rgba(25,16,34,0.7)] backdrop-blur-md border border-[rgba(140,43,238,0.2)] p-6 flex items-center justify-center group-hover:bg-[#8c2bee] transition-colors">
                  <span>
                    <FaLinkedinIn style={{ fontSize: "20px" }} />
                  </span>
                </div>
                <a
                  href="https://www.linkedin.com/in/shreyaakatiyar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="font-medium text-slate-300 group-hover:text-[#8c2bee] transition-colors">
                    Connect on LinkedIn
                  </span>
                </a>
              </div>

              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="size-12 rounded-full bg-[rgba(25,16,34,0.7)] backdrop-blur-md border border-[rgba(140,43,238,0.2)] p-6 flex items-center justify-center group-hover:bg-[#8c2bee] transition-colors">
                  <span>
                    <FaGithub style={{ fontSize: "22px" }} />
                  </span>
                </div>
                <a href="https://github.com/Shreyaakatiyar" target="_blank" rel="noopener noreferrer">
                  <span className="font-medium text-slate-300 group-hover:text-[#8c2bee] transition-colors">
                    View my GitHub
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="p-12 md:p-16">
            <form className="space-y-6" ref={form} onSubmit={sendEmail}>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500 uppercase tracking-widest ml-1">
                  Name
                </label>
                <input
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-[#8c2bee] focus:ring-0 transition-all text-white"
                  placeholder="John Doe"
                  type="text"
                  name="name"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500 uppercase tracking-widest ml-1">
                  Email
                </label>
                <input
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-[#8c2bee] focus:ring-0 transition-all text-white"
                  placeholder="john@example.com"
                  type="email"
                  name="email"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500 uppercase tracking-widest ml-1">
                  Message
                </label>
                <textarea
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-[#8c2bee] focus:ring-0 transition-all text-white"
                  placeholder="What's on your mind?"
                  rows="4"
                  name="message"
                  required
                ></textarea>
              </div>
              <button
                disabled={loading}
                type="submit"
                className="w-full py-4 bg-[#8c2bee] text-white font-bold rounded-xl hover:shadow-[0_0_20px_rgba(140,43,238,0.4)] transition-all flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <IoSend />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact