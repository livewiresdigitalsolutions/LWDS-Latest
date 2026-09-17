"use client";

import Link from "next/link";
import { useRef } from "react";
import PageWrapper, { useScrollReveal } from "@/components/PageWrapper";

const logoLight = "/Logos/logo - light(with text).png";
const logoDark = "/Logos/logo - dark(with text).png";

const projects = [
  { name: "TradeNova", category: "Trading Platform", country: "USA", img: "/images/tradenova.png", href: null, comingSoon: true, desc: "Low-latency multi-broker copy trading with real-time execution under 3 seconds." },
  { name: "Neurolonic", category: "Mobile App", country: "Germany", img: "/images/neurolonic.jpeg", href: null },
  { name: "TXG", category: "Digital Infrastructure & BIM Consultancy", country: "Saudi Arabia", img: "/images/txg-landingpage.png", href: null },
  { name: "Loyola College Kerala", category: "University Website", country: "India", img: "/images/loyola.png", href: null },
  { name: "Agam Alangaram", category: "Interior Design Website", country: "India", img: "/images/agamalangaram.png", href: "https://agamalangaram.in" },
  { name: "Netspextech", category: "Technology Solutions", country: "Dubai", img: "/images/Netspextech.png", href: "https://netspextech.com" },
  { name: "Raja Driving School", category: "Business Website", country: "India", img: "/images/RDS.png", href: "https://www.rajadrivingschool.com" },
  { name: "SS Technical Services", category: "Property Maintenance & Fit-out", country: "Dubai", img: "/images/sstech.png", href: null },
  { name: "ANSS Crafters & Co", category: "UI/UX Design", country: "India", img: "/images/ANSS.png", href: null },
  { name: "Kalista Fabrics", category: "UI/UX Design", country: "India", img: "/images/kalista.png", href: null },
  { name: "Thanwin", category: "E-Commerce Website", country: "India", img: "/images/thanwin.png", href: null },
  { name: "Sportify Nellai", category: "Turf Booking Portal", country: "India", img: "/images/sportifynellai.png", href: null },
  { name: "QBit", category: "Human Resource Management System", country: "Saudi Arabia", img: "/images/qbit.png", href: null },
];

function NavBar() {
  return (
    <div className="border-[#ececec] border-b border-solid content-stretch flex items-center pb-[20px] pt-[17px] px-[50px] relative shrink-0 w-full bg-white" data-name="HorizontalBorder">
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
        <Link href="/contact" className="bg-[#c9f31d] content-stretch flex items-center justify-center px-[24px] py-[10px] relative rounded-[3px] shrink-0">
          <div className="[word-break:break-word] flex flex-col font-['Kanit:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#121212] text-[14px] uppercase whitespace-nowrap">
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
          <div className="[word-break:break-word] font-['Kanit:Regular',sans-serif] text-[#999] text-[16px] leading-[26px]"><p>We are a team of passionate developers, designers, and problem-solvers focused on building technology that creates real value.</p></div>
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

function ProjectsContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  useScrollReveal(containerRef as React.RefObject<HTMLDivElement>);

  return (
    <div ref={containerRef} className="bg-white content-stretch flex flex-col items-start relative size-full">
      <NavBar />

      {/* ── HERO ── */}
      <div className="relative shrink-0 w-full px-[76px] pt-[120px] pb-[100px]" style={{ background: "linear-gradient(135deg,#f8fce8 0%,#f0f5d6 40%,#eef7c2 60%,#f5f9e0 100%)" }}>
        <div className="sr-target">
          <div className="bg-[#c9f31d] inline-flex items-center justify-center px-[24px] py-[10px] rounded-[48px] mb-[24px]">
            <div className="[word-break:break-word] font-['Kanit:Medium',sans-serif] text-[#121212] text-[14px] uppercase tracking-widest"><p>Our Portfolio</p></div>
          </div>
          <div className="[word-break:break-word] font-['Teko:Bold',sans-serif] font-bold leading-[0] text-[190px] text-black uppercase">
            <p className="leading-[144.4px]">Crafted</p>
            <p className="leading-[144.4px]">Projects</p>
          </div>
          <div className="[word-break:break-word] font-['Kanit:Regular',sans-serif] text-[#555] text-[24px] leading-[36px] max-w-[700px] mt-[32px]">
            <p>From startups to established brands, we create impactful digital solutions that tell stories and drive results. <span className="font-['Kanit:Bold',sans-serif] text-[#121212]">13 projects</span> delivered across <span className="bg-[#c9f31d] px-[6px]">5 countries</span>.</p>
          </div>
        </div>
      </div>

      {/* ── GLOBAL REACH STRIP ── */}
      <div className="bg-[#c9f31d] content-stretch flex items-center justify-center py-[24px] px-[76px] relative shrink-0 w-full">
        <div className="flex items-center gap-[60px]">
          {[["🇮🇳", "India"], ["🇩🇪", "Germany"], ["🇺🇸", "USA"], ["🇸🇦", "Saudi Arabia"], ["🇦🇪", "Dubai"]].map(([flag, name]) => (
            <div key={name} className="flex items-center gap-[10px]">
              <span className="text-[28px]">{flag}</span>
              <div className="[word-break:break-word] font-['Teko:SemiBold',sans-serif] text-[#121212] text-[22px] uppercase"><p>{name}</p></div>
            </div>
          ))}
        </div>
      </div>

      {/* ── PROJECTS GRID ── */}
      <div className="content-stretch flex flex-col items-start px-[76px] py-[100px] relative shrink-0 w-full bg-[#f9f9f9]">
        <div className="sr-target mb-[60px]">
          <div className="[word-break:break-word] font-['Teko:Bold',sans-serif] font-bold leading-[0] text-[60px] text-black uppercase">
            <p className="leading-[54px]">All Projects <span className="text-[#999] text-[40px]">({projects.length})</span></p>
          </div>
        </div>
        <div className="grid w-full gap-[24px]" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
          {projects.map((p) => {
            const card = (
              <div className={`sr-target group relative h-[320px] overflow-hidden rounded-[4px] cursor-pointer ${p.comingSoon ? "ring-2 ring-[#c9f31d] ring-offset-2" : ""}`}>
                {p.comingSoon && (
                  <div className="absolute top-[16px] left-[16px] z-20 bg-[#c9f31d] text-[#121212] text-[12px] font-['Kanit:Bold',sans-serif] px-[12px] py-[6px] rounded-[3px] flex items-center gap-[8px] shadow-lg">
                    <span className="inline-flex h-[8px] w-[8px] rounded-full bg-[#121212] animate-ping opacity-75"></span>
                    COMING SOON
                  </div>
                )}
                <div className="absolute top-[16px] right-[16px] z-20 bg-black/50 backdrop-blur-sm text-white text-[12px] font-['Kanit:Medium',sans-serif] px-[12px] py-[6px] rounded-[3px] flex items-center gap-[6px] uppercase">
                  📍 {p.country}
                </div>
                <img src={p.img} className="w-full h-full object-cover object-left-top transition-transform duration-700 group-hover:scale-110" alt={p.name} />
                <div className="absolute bottom-0 left-0 right-0 bg-[#121212]/90 backdrop-blur-sm text-white p-[20px] flex justify-between items-center">
                  <div>
                    <div className="[word-break:break-word] font-['Teko:SemiBold',sans-serif] text-white text-[24px] uppercase leading-[1]"><p>{p.name}</p></div>
                    <div className="[word-break:break-word] font-['Kanit:Regular',sans-serif] text-[#c9f31d] text-[14px] mt-[4px]"><p>{p.category}</p></div>
                  </div>
                  <div className="w-[40px] h-[40px] bg-[#c9f31d] rounded-full flex items-center justify-center text-[#121212] shrink-0 group-hover:rotate-45 transition-transform duration-300">
                    <span className="text-[18px]">↗</span>
                  </div>
                </div>
              </div>
            );
            return p.href ? (
              <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer">{card}</a>
            ) : (
              <div key={p.name}>{card}</div>
            );
          })}
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="bg-[#121212] content-stretch flex flex-col items-center justify-center px-[76px] py-[120px] relative shrink-0 w-full">
        <div className="sr-target flex flex-col items-center gap-[24px] text-center">
          <div className="[word-break:break-word] font-['Teko:Bold',sans-serif] font-bold leading-[0] text-[120px] text-white uppercase">
            <p className="leading-[100px]">Start Your</p>
            <p className="leading-[100px]"><span className="bg-[#c9f31d] text-black px-[8px]">Project</span> Today</p>
          </div>
          <div className="[word-break:break-word] font-['Kanit:Regular',sans-serif] text-[#999] text-[22px] leading-[36px] max-w-[600px] mt-[16px]">
            <p>Have a project in mind? Let&apos;s discuss how we can bring your vision to life.</p>
          </div>
          <Link href="/contact" className="bg-[#c9f31d] content-stretch flex items-center gap-[10px] mt-[20px] px-[48px] py-[18px] relative rounded-[3px] shrink-0" data-name="Button">
            <div className="[word-break:break-word] font-['Kanit:Medium',sans-serif] text-[#121212] text-[16px] uppercase tracking-widest"><p>Get In Touch →</p></div>
          </Link>
        </div>
      </div>

      <FooterSection />
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <PageWrapper>
      <ProjectsContent />
    </PageWrapper>
  );
}
