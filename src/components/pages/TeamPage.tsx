"use client";

import Link from "next/link";
import { useRef } from "react";
import PageWrapper, { useScrollReveal } from "@/components/PageWrapper";

const logoLight = "/Logos/logo - light(with text).png";
const logoDark = "/Logos/logo - dark(with text).png";

const leadership = [
  { name: "Ramla M", role: "Founder & CEO", img: "/images/ramla.jpeg", desc: "Leading innovation and strategy at LiveWires Digital Solutions." },
  { name: "Kamal Mohan", role: "Chief Technology Officer", img: "/images/kamal.jpeg", desc: "Architecting robust systems and driving technical excellence." },
  { name: "Mohamed Sami", role: "Software Architect", img: "/images/sami.jpeg", desc: "Designing scalable software architecture and engineering solutions." },
];

const team = [
  { name: "Chanthini", role: "QA Engineer", img: "/images/chanthini.jpeg" },
  { name: "Ramesh M", role: "Finance Manager", img: "/images/ramesh.png" },
  { name: "Prasath", role: "DevOps Engineer", img: "/images/prasath.png" },
  { name: "Mohammed Vaseem", role: "Full Stack Developer", img: "/images/vaseem.jpeg" },
  { name: "Manavalan", role: "Full Stack Developer", img: "/images/mano.jpeg" },
  { name: "Athisiva", role: "Full Stack Developer", img: "/images/athi.jpeg" },
  { name: "Mohammed Yasar", role: "UI / UX Designer", img: "/images/yasar.jpeg" },
  { name: "Milana", role: "Digital Marketing Executive", img: "/images/milana.jpeg" },
  { name: "Kishore Krishnan", role: "IoT Developer", img: "/images/kishore.png" },
  { name: "Gururaj", role: "IoT Developer", img: "/images/guru.jpeg" },
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

function TeamContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  useScrollReveal(containerRef as React.RefObject<HTMLDivElement>);

  return (
    <div ref={containerRef} className="bg-white content-stretch flex flex-col items-start relative size-full">
      <NavBar />

      {/* ── HERO ── */}
      <div className="relative shrink-0 w-full px-[76px] pt-[120px] pb-[100px]" style={{ background: "linear-gradient(135deg,#f8fce8 0%,#f0f5d6 40%,#eef7c2 60%,#f5f9e0 100%)" }}>
        <div className="sr-target">
          <div className="bg-[#c9f31d] inline-flex items-center justify-center px-[24px] py-[10px] rounded-[48px] mb-[24px]">
            <div className="[word-break:break-word] font-['Kanit:Medium',sans-serif] text-[#121212] text-[14px] uppercase tracking-widest"><p>Team Members</p></div>
          </div>
          <div className="[word-break:break-word] font-['Teko:Bold',sans-serif] font-bold leading-[0] text-[190px] text-black uppercase">
            <p className="leading-[144.4px]">Our</p>
            <p className="leading-[144.4px]">Team</p>
          </div>
          <div className="[word-break:break-word] font-['Kanit:Regular',sans-serif] text-[#555] text-[24px] leading-[36px] max-w-[700px] mt-[32px]">
            <p>A diverse team united by creativity, technology, and execution. We bring together the best minds to deliver exceptional results.</p>
          </div>
        </div>
      </div>

      {/* ── STATS STRIP ── */}
      <div className="bg-[#c9f31d] content-stretch flex items-center justify-center py-[32px] px-[76px] relative shrink-0 w-full">
        <div className="flex items-center gap-[80px]">
          {[["13", "Team Members"], ["13+", "Projects"], ["10+", "Clients"], ["2+", "Years"]].map(([num, label], i) => (
            <div key={label} className={`flex flex-col items-center ${i < 3 ? "pr-[80px] border-r border-[#121212]/20" : ""}`}>
              <div className="[word-break:break-word] font-['Teko:Bold',sans-serif] text-[60px] text-[#121212] leading-[1]"><p>{num}</p></div>
              <div className="[word-break:break-word] font-['Kanit:Regular',sans-serif] text-[#121212] text-[16px] uppercase"><p>{label}</p></div>
            </div>
          ))}
        </div>
      </div>

      {/* ── LEADERSHIP ── */}
      <div className="content-stretch flex flex-col items-start px-[76px] py-[100px] relative shrink-0 w-full bg-white">
        <div className="sr-target flex flex-col items-start gap-[16px] mb-[60px]">
          <div className="border border-[#ececec] px-[16px] py-[8px] rounded-[3px]">
            <div className="[word-break:break-word] font-['Kanit:Medium',sans-serif] text-[#555] text-[14px] uppercase tracking-widest"><p>Leadership</p></div>
          </div>
          <div className="[word-break:break-word] font-['Teko:Bold',sans-serif] font-bold leading-[0] text-[70px] text-black uppercase">
            <p className="leading-[60px]">Meet the <span className="bg-[#c9f31d] px-[8px]">Founders</span></p>
          </div>
        </div>
        <div className="grid w-full gap-[40px]" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
          {leadership.map((m) => (
            <div key={m.name} className="sr-target group relative overflow-hidden rounded-[8px] shadow-lg">
              <div className="relative h-[520px] overflow-hidden">
                <img src={m.img} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" alt={m.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-[32px]">
                  <div className="[word-break:break-word] font-['Teko:Bold',sans-serif] text-white text-[36px] uppercase leading-[1]"><p>{m.name}</p></div>
                  <div className="[word-break:break-word] font-['Kanit:Medium',sans-serif] text-[#c9f31d] text-[16px] mt-[6px]"><p>{m.role}</p></div>
                  <div className="[word-break:break-word] font-['Kanit:Regular',sans-serif] text-[#ccc] text-[15px] mt-[10px] leading-[22px]"><p>{m.desc}</p></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── FULL TEAM GRID ── */}
      <div className="content-stretch flex flex-col items-start px-[76px] py-[100px] relative shrink-0 w-full bg-[#f9f9f9]">
        <div className="sr-target flex flex-col items-start gap-[16px] mb-[60px]">
          <div className="border border-[#ececec] px-[16px] py-[8px] rounded-[3px]">
            <div className="[word-break:break-word] font-['Kanit:Medium',sans-serif] text-[#555] text-[14px] uppercase tracking-widest"><p>Our Full Team</p></div>
          </div>
          <div className="[word-break:break-word] font-['Teko:Bold',sans-serif] font-bold leading-[0] text-[70px] text-black uppercase">
            <p className="leading-[60px]">The <span className="bg-[#c9f31d] px-[8px]">Crew</span> Behind</p>
            <p className="leading-[60px]">Every Project</p>
          </div>
        </div>
        <div className="grid w-full gap-[24px]" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)" }}>
          {team.map((m) => (
            <div key={m.name} className="sr-target group relative overflow-hidden rounded-[4px]">
              <img src={m.img} className="w-full h-[280px] object-cover object-top group-hover:scale-105 transition-transform duration-500" alt={m.name} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-[16px]">
                <div className="[word-break:break-word] font-['Teko:SemiBold',sans-serif] text-white text-[22px] uppercase leading-[1]"><p>{m.name}</p></div>
                <div className="[word-break:break-word] font-['Kanit:Regular',sans-serif] text-[#c9f31d] text-[12px] mt-[4px]"><p>{m.role}</p></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── CULTURE SECTION ── */}
      <div className="bg-[#121212] content-stretch flex items-center px-[76px] py-[100px] relative shrink-0 w-full gap-[80px]">
        <div className="sr-target shrink-0 w-[600px] h-[500px] relative overflow-hidden rounded-[259px]">
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover" alt="Team culture" />
        </div>
        <div className="sr-target flex flex-col items-start gap-[32px] flex-1">
          <div className="border border-[#c9f31d30] px-[16px] py-[8px] rounded-[3px]">
            <div className="[word-break:break-word] font-['Kanit:Medium',sans-serif] text-[#c9f31d] text-[14px] uppercase tracking-widest"><p>Work Culture</p></div>
          </div>
          <div className="[word-break:break-word] font-['Teko:Bold',sans-serif] font-bold leading-[0] text-[70px] text-white uppercase">
            <p className="leading-[60px]">How We</p>
            <p className="leading-[60px]"><span className="bg-[#c9f31d] text-black px-[8px]">Build</span> Things</p>
          </div>
          <div className="flex flex-col gap-[24px] w-full">
            {[
              ["🚀", "Move Fast", "We ship quickly, iterate constantly, and never stop improving."],
              ["🤝", "Collaborate", "Every project is a team effort — transparent, open, and inclusive."],
              ["🎯", "Client-Centric", "Your success is our success. We build solutions that solve real problems."],
              ["💡", "Always Learning", "We stay ahead with the latest tech, tools, and methodologies."],
            ].map(([icon, title, desc]) => (
              <div key={title} className="flex items-start gap-[20px] pb-[24px] border-b border-[#ffffff10]">
                <span className="text-[32px] shrink-0">{icon}</span>
                <div>
                  <div className="[word-break:break-word] font-['Teko:SemiBold',sans-serif] text-white text-[26px] uppercase leading-[1]"><p>{title}</p></div>
                  <div className="[word-break:break-word] font-['Kanit:Regular',sans-serif] text-[#999] text-[16px] leading-[26px] mt-[6px]"><p>{desc}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── JOIN CTA ── */}
      <div className="content-stretch flex flex-col items-center justify-center px-[76px] py-[100px] relative shrink-0 w-full bg-white">
        <div className="sr-target flex flex-col items-center gap-[24px] text-center">
          <div className="border border-[#ececec] px-[16px] py-[8px] rounded-[3px]">
            <div className="[word-break:break-word] font-['Kanit:Medium',sans-serif] text-[#555] text-[14px] uppercase tracking-widest"><p>Join Our Team</p></div>
          </div>
          <div className="[word-break:break-word] font-['Teko:Bold',sans-serif] font-bold leading-[0] text-[100px] text-black uppercase text-center">
            <p className="leading-[84px]">We&apos;re Always</p>
            <p className="leading-[84px]">Looking for <span className="bg-[#c9f31d] px-[8px]">Talent</span></p>
          </div>
          <div className="[word-break:break-word] font-['Kanit:Regular',sans-serif] text-[#555] text-[22px] leading-[36px] max-w-[600px] mt-[16px]">
            <p>Think you&apos;d be a great fit? Drop us a message and let&apos;s talk about what you can bring to the team.</p>
          </div>
          <a href="mailto:contact@livewiresdigitalsolutions.com" className="bg-[#121212] content-stretch flex items-center gap-[10px] mt-[20px] px-[48px] py-[18px] relative rounded-[3px] shrink-0" data-name="Button">
            <div className="[word-break:break-word] font-['Kanit:Medium',sans-serif] text-white text-[16px] uppercase tracking-widest"><p>contact@livewiresdigitalsolutions.com →</p></div>
          </a>
        </div>
      </div>

      <FooterSection />
    </div>
  );
}

export default function TeamPage() {
  return (
    <PageWrapper>
      <TeamContent />
    </PageWrapper>
  );
}
