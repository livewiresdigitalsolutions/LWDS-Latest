"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import PageWrapper, { useScrollReveal } from "@/components/PageWrapper";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";

const logoLight = "/Logos/logo - light(with text).png";
const logoDark = "/Logos/logo - dark(with text).png";

const faqs = [
  { q: "How long does a typical web project take?", a: "A typical website project takes 2–6 weeks depending on complexity. Custom web applications may take 2–4 months. We provide a detailed timeline after our discovery call." },
  { q: "What technologies do you work with?", a: "We specialize in React, Next.js, Node.js, Flutter for mobile apps, and various AI/ML frameworks. We also offer IoT development, UI/UX design, graphic design, and digital marketing." },
  { q: "Do you work with international clients?", a: "Yes! We have delivered projects for clients across India, Germany, USA, Saudi Arabia, and Dubai. We communicate seamlessly across time zones." },
  { q: "What is your development process?", a: "We follow a 3-step process: Problem Analysis → Find Solutions → Build & Develop. This ensures every project is well-understood, creatively solved, and technically sound before launch." },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#ececec] py-[24px] cursor-pointer sr-target" onClick={() => setOpen(!open)}>
      <div className="flex items-center justify-between">
        <div className="[word-break:break-word] font-['Teko:SemiBold',sans-serif] text-black text-[32px] uppercase leading-[1.2] max-w-[80%]"><p>{q}</p></div>
        <div className={`w-[40px] h-[40px] rounded-full border border-[#ececec] flex items-center justify-center shrink-0 transition-transform duration-300 ${open ? "rotate-180 bg-[#c9f31d] border-[#c9f31d]" : "bg-white"}`}>
          <span className="text-[20px] font-bold text-[#121212]">{open ? "−" : "+"}</span>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="[word-break:break-word] font-['Kanit:Regular',sans-serif] text-[#555] text-[18px] leading-[30px] pt-[16px]"><p>{a}</p></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function NavBar() {
  return (
    <div className="border-[#ececec] border-b border-solid content-stretch flex items-center pb-[20px] pt-[17px] px-[50px] relative shrink-0 w-full bg-white z-[100]" data-name="HorizontalBorder">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[260px]">
        <Link href="/" className="content-stretch flex items-start relative shrink-0">
          <img alt="LiveWires Digital Solutions" className="h-[50px] w-auto" src={logoDark} />
        </Link>
      </div>
      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[1300px]">
        <div className="content-start flex flex-wrap gap-0 items-start justify-center relative shrink-0 w-full">
          {[["Home", "/"], ["About Us", "/about"], ["Projects", "/projects"], ["Team", "/team"], ["Contact", "/contact"]].map(([label, href]) => (
            <div key={label} className="h-[49.25px] min-w-[140px] relative shrink-0" data-name="Item">
              <Link href={href} className="content-stretch flex items-center pb-[9.75px] pt-[9.5px] px-[15px] relative size-full">
                <div className="[word-break:break-word] flex flex-col font-['Teko:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#121212] text-[22px] uppercase whitespace-nowrap">
                  <p className="leading-[29.26px]">{label}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="content-stretch flex flex-col items-end relative shrink-0 w-[260px]">
        <Link href="/contact" className="bg-[#c9f31d] content-stretch flex items-center justify-center px-[24px] py-[10px] relative rounded-[3px] shrink-0 hover:bg-[#121212] hover:text-white transition-colors">
          <div className="[word-break:break-word] flex flex-col font-['Kanit:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-inherit text-[14px] uppercase whitespace-nowrap">
            <p className="leading-[14px]">Get In Touch</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

function FooterSection() {
  return (
    <div className="bg-[#171717] content-stretch flex flex-col items-center justify-center px-[200px] relative shrink-0 w-full">
      <div className="content-stretch flex items-start max-w-[1520px] pb-[60px] pt-[80px] relative shrink-0 w-full gap-[80px]">
        <div className="flex flex-col items-start gap-[24px] shrink-0 w-[360px]">
          <img alt="LiveWires Digital Solutions" src={logoLight} className="h-[60px] w-auto" />
          <div className="[word-break:break-word] font-['Kanit:Regular',sans-serif] text-[#999] text-[16px] leading-[26px]"><p>We are a team of passionate developers, designers, and problem-solvers building technology that creates real value.</p></div>
          <div className="flex gap-[12px]">
            <a href="https://www.linkedin.com/company/livewires-digital-solutions" target="_blank" rel="noopener noreferrer" className="bg-[#c9f31d] w-[40px] h-[40px] flex items-center justify-center rounded-[3px] text-[#121212] text-[13px] hover:bg-white transition-colors">in</a>
            <a href="https://github.com/livewiresdigitalsolutions" target="_blank" rel="noopener noreferrer" className="bg-[#c9f31d] w-[40px] h-[40px] flex items-center justify-center rounded-[3px] text-[#121212] text-[13px] hover:bg-white transition-colors">gh</a>
            <a href="mailto:contact@livewiresdigitalsolutions.com" className="bg-[#c9f31d] w-[40px] h-[40px] flex items-center justify-center rounded-[3px] text-[#121212] text-[13px] hover:bg-white transition-colors">@</a>
          </div>
        </div>
        <div className="flex flex-col items-start gap-[16px] shrink-0 w-[200px]">
          <div className="[word-break:break-word] font-['Teko:SemiBold',sans-serif] text-white text-[28px] uppercase leading-[1]"><p>Quick Links</p></div>
          {[["Home", "/"], ["About Us", "/about"], ["Projects", "/projects"], ["Team", "/team"], ["Contact", "/contact"]].map(([label, href]) => (
            <Link key={label} href={href} className="[word-break:break-word] font-['Kanit:Regular',sans-serif] text-[#999] text-[16px] leading-[26px] hover:text-[#c9f31d] transition-colors"><p>{label}</p></Link>
          ))}
        </div>
        <div className="flex flex-col items-start gap-[16px] shrink-0 w-[280px]">
          <div className="[word-break:break-word] font-['Teko:SemiBold',sans-serif] text-white text-[28px] uppercase leading-[1]"><p>Contact</p></div>
          {[["📍", "Chennai, Tamil Nadu, India"], ["📞", "+91 8925476709"], ["✉️", "contact@livewiresdigitalsolutions.com"]].map(([icon, text]) => (
            <div key={text} className="flex items-start gap-[12px]">
              <span className="text-[18px] mt-[2px]">{icon}</span>
              <div className="[word-break:break-word] font-['Kanit:Regular',sans-serif] text-[#999] text-[16px] leading-[26px]"><p>{text}</p></div>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-[#ffffff18] w-full max-w-[1520px] py-[30px]">
        <div className="[word-break:break-word] font-['Teko:Regular',sans-serif] text-[#666] text-[22px] uppercase text-center leading-[22px]"><p>© 2026 LiveWires Digital Solutions. All Rights Reserved.</p></div>
      </div>
    </div>
  );
}

function ContactContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  useScrollReveal(containerRef as React.RefObject<HTMLDivElement>);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const xTrans1 = useTransform(smoothX, [0, 1], [-20, 20]);
  const yTrans1 = useTransform(smoothY, [0, 1], [-20, 20]);
  const xTrans2 = useTransform(smoothX, [0, 1], [20, -20]);
  const yTrans2 = useTransform(smoothY, [0, 1], [20, -20]);

  function handleMouseMove(e: React.MouseEvent) {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width;
    const y = (clientY - top) / height;
    mouseX.set(x);
    mouseY.set(y);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div ref={containerRef} className="bg-white content-stretch flex flex-col items-start relative size-full">
      <NavBar />

      {/* ── HERO (KINETIC TYPOGRAPHY) ── */}
      <div 
        className="relative shrink-0 w-full px-[76px] pt-[120px] pb-[80px] overflow-hidden" 
        style={{ background: "linear-gradient(135deg,#f8fce8 0%,#f0f5d6 40%,#eef7c2 60%,#f5f9e0 100%)" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => { mouseX.set(0.5); mouseY.set(0.5); }}
      >
        <div className="absolute top-[60px] right-[120px]" data-name="scroll.png">
          <div className="w-[60px] h-[90px] border-2 border-[#121212] rounded-full flex items-start justify-center pt-[14px]">
            <div className="w-[8px] h-[16px] bg-[#121212] rounded-full animate-bounce"></div>
          </div>
        </div>
        
        <div className="sr-target relative z-10">
          <div className="bg-[#c9f31d] inline-flex items-center justify-center px-[24px] py-[10px] rounded-[48px] mb-[24px]">
            <div className="[word-break:break-word] font-['Kanit:Medium',sans-serif] text-[#121212] text-[14px] uppercase tracking-widest"><p>Get In Touch</p></div>
          </div>
          
          <div className="[word-break:break-word] font-['Teko:Bold',sans-serif] font-bold leading-[0] text-[190px] text-black uppercase flex flex-col items-start">
            <motion.p style={{ x: xTrans1, y: yTrans1 }} className="leading-[144.4px]">Let&apos;s</motion.p>
            <motion.p style={{ WebkitTextStroke: "4px black", x: xTrans2, y: yTrans2 }} className="leading-[144.4px] text-transparent">Talk</motion.p>
          </div>
          
          <div className="[word-break:break-word] font-['Kanit:Regular',sans-serif] text-[#555] text-[24px] leading-[36px] max-w-[700px] mt-[32px]">
            <p>We are here to transform your digital presence. Let&apos;s collaborate and build something extraordinary together.</p>
          </div>
        </div>
      </div>

      {/* ── CONTACT SPLIT ── */}
      <div className="bg-[#121212] content-stretch flex items-start px-[76px] py-[100px] relative shrink-0 w-full gap-[80px]">
        {/* Left info */}
        <div className="sr-target flex flex-col items-start gap-[48px] flex-1">
          <div>
            <div className="border border-[#c9f31d30] px-[16px] py-[8px] rounded-[3px] mb-[24px] inline-block">
              <div className="[word-break:break-word] font-['Kanit:Medium',sans-serif] text-[#c9f31d] text-[14px] uppercase tracking-widest"><p>Get To Know About Us</p></div>
            </div>
            <div className="[word-break:break-word] font-['Teko:Bold',sans-serif] font-bold leading-[0] text-[70px] text-white uppercase">
              <p className="leading-[60px]">Let&apos;s Get To</p>
              <p className="leading-[60px]">Work <span className="bg-[#c9f31d] text-black px-[8px]">Together</span></p>
            </div>
            <div className="[word-break:break-word] font-['Kanit:Regular',sans-serif] text-[#999] text-[18px] leading-[30px] max-w-[500px] mt-[20px]">
              <p>We are here to transform your digital presence. Let&apos;s collaborate and build something extraordinary together.</p>
            </div>
          </div>

          {/* Contact cards */}
          <div className="flex flex-col gap-[20px] w-full">
            {[
              { icon: "📍", label: "Office", value: "Chennai, Tamil Nadu, India" },
              { icon: "📞", label: "Phone", value: "+91 8925476709" },
              { icon: "✉️", label: "Email", value: "contact@livewiresdigitalsolutions.com" },
            ].map((c) => (
              <div key={c.label} className="flex items-center gap-[20px] border border-[#ffffff10] p-[20px] rounded-[4px] bg-white/5 hover:bg-white/10 transition-colors">
                <div className="w-[56px] h-[56px] bg-[#c9f31d] rounded-full flex items-center justify-center shrink-0">
                  <span className="text-[24px]">{c.icon}</span>
                </div>
                <div>
                  <div className="[word-break:break-word] font-['Kanit:Medium',sans-serif] text-[#999] text-[14px] uppercase tracking-widest"><p>{c.label}</p></div>
                  <div className="[word-break:break-word] font-['Teko:SemiBold',sans-serif] text-white text-[22px] uppercase leading-[1.2]"><p>{c.value}</p></div>
                </div>
              </div>
            ))}
          </div>

          {/* Spinning badge */}
          <div className="relative w-[160px] h-[160px] flex items-center justify-center group cursor-pointer">
            <svg className="absolute w-full h-full" style={{ animation: "spinSlow 12s linear infinite" }} viewBox="0 0 100 100">
              <path id="circlePath2" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
              <text fontSize="11.5" fontWeight="bold" fill="white" letterSpacing="1">
                <textPath href="#circlePath2" startOffset="0%">LIVEWIRES DIGITAL SOLUTIONS •</textPath>
              </text>
            </svg>
            <div className="w-[64px] h-[64px] bg-[#c9f31d] rounded-full flex items-center justify-center text-[#121212] text-[28px] group-hover:scale-110 transition-transform" style={{ boxShadow: "0 0 30px rgba(201,243,29,0.5)" }}>
              ↗
            </div>
          </div>
        </div>

        {/* Right form */}
        <div className="sr-target shrink-0 w-[560px] bg-white/10 backdrop-blur-sm border border-white/10 p-[48px] rounded-[4px]">
          <div className="[word-break:break-word] font-['Teko:Bold',sans-serif] text-white text-[42px] uppercase leading-[1] mb-[8px]"><p>Get In Touch</p></div>
          <div className="[word-break:break-word] font-['Kanit:Regular',sans-serif] text-[#999] text-[16px] mb-[32px]"><p>We&apos;ll get back to you within 24 hours.</p></div>
          {submitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-[60px]">
              <div className="text-[60px] mb-[16px]">✅</div>
              <div className="[word-break:break-word] font-['Teko:Bold',sans-serif] text-[#c9f31d] text-[40px] uppercase leading-[1]"><p>Message Sent!</p></div>
              <div className="[word-break:break-word] font-['Kanit:Regular',sans-serif] text-[#999] text-[18px] mt-[12px]"><p>We&apos;ll get back to you within 24 hours.</p></div>
            </motion.div>
          ) : (
            <form className="flex flex-col gap-[16px]" onSubmit={handleSubmit} noValidate>
              {(["name", "email", "phone"] as const).map((field) => (
                <input
                  key={field}
                  type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                  placeholder={field === "name" ? "Your Name" : field === "email" ? "Email Address" : "Phone Number"}
                  value={form[field]}
                  onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                  required={field !== "phone"}
                  className="w-full bg-white/5 border border-white/10 px-[16px] py-[14px] text-white placeholder:text-[#666] font-['Kanit:Regular',sans-serif] text-[16px] focus:border-[#c9f31d] focus:outline-none transition-colors rounded-[2px]"
                />
              ))}
              <textarea
                placeholder="Your Message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                className="w-full bg-white/5 border border-white/10 px-[16px] py-[14px] text-white placeholder:text-[#666] font-['Kanit:Regular',sans-serif] text-[16px] focus:border-[#c9f31d] focus:outline-none transition-colors resize-none rounded-[2px]"
              />
              <button
                type="submit"
                className="w-full bg-[#c9f31d] text-[#121212] px-[32px] py-[18px] font-['Kanit:Bold',sans-serif] text-[16px] uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-[10px] rounded-[2px]"
                data-name="Button"
              >
                Send Message →
              </button>
            </form>
          )}
        </div>
      </div>

      {/* ── FAQ ── */}
      <div className="content-stretch flex flex-col items-start px-[76px] py-[100px] relative shrink-0 w-full bg-white">
        <div className="sr-target flex flex-col items-start gap-[16px] mb-[60px]">
          <div className="border border-[#ececec] px-[16px] py-[8px] rounded-[3px]">
            <div className="[word-break:break-word] font-['Kanit:Medium',sans-serif] text-[#555] text-[14px] uppercase tracking-widest"><p>FAQ</p></div>
          </div>
          <div className="[word-break:break-word] font-['Teko:Bold',sans-serif] font-bold leading-[0] text-[70px] text-black uppercase">
            <p className="leading-[60px]">Frequently Asked <span className="bg-[#c9f31d] px-[8px]">Questions</span></p>
          </div>
        </div>
        <div className="w-full max-w-[1200px]">
          {faqs.map((faq) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>

      {/* ── CLIENT LOGOS STRIP ── */}
      <div className="bg-[#f9f9f9] content-stretch flex flex-col items-center justify-center px-[76px] py-[60px] relative shrink-0 w-full">
        <div className="sr-target mb-[40px]">
          <div className="[word-break:break-word] font-['Teko:SemiBold',sans-serif] text-[#999] text-[28px] uppercase text-center"><p>Trusted By</p></div>
        </div>
        <div className="flex items-center justify-center gap-[60px] flex-wrap">
          {["/images/agamlogo.png", "/images/rdslogo.svg", "/images/ansslogo.png", "/images/netspextechlogo.svg"].map((logo, i) => (
            <div key={i} className="w-[120px] h-[60px] flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
              <img src={logo} alt="Client logo" className="max-w-full max-h-full object-contain" />
            </div>
          ))}
        </div>
      </div>

      <FooterSection />
    </div>
  );
}

export default function ContactPage() {
  return (
    <PageWrapper>
      <ContactContent />
    </PageWrapper>
  );
}
