import { useState, useEffect } from "react";

const TRACKS = [
  {
    id: 1,
    label: "Track 1",
    title: "AI & Machine Learning Foundations",
    tagline: "Goal: Build a solid technical base and master the essentials of generative tools.",
    price: 10000,
    duration: "2.5 – 3 Months",
    schedule: "Alternate Classes",
    color: "#00C9A7",
    accent: "#00E5C0",
    icon: "🧠",
    badge: "Beginner Friendly",
    phases: [],
    modules: [
      { title: "AI Fundamentals", desc: "Introduction to the landscape of AI" },
      { title: "Machine Learning (ML)", desc: "Core concepts & algorithms" },
      { title: "Deep Learning (DL)", desc: "Neural networks & data processing" },
      { title: "Natural Language Processing (NLP)", desc: "How machines understand human language" },
      { title: "Generative AI (GenAI)", desc: "Foundations of content generation" },
      { title: "Agentic AI & Prompt Engineering", desc: "Learning to direct AI behavior effectively" },
    ],
    tools: [
      { name: "OpenAI ChatGPT", desc: "Mastering the basics of conversational AI" },
      { name: "GitHub Copilot", desc: "AI-assisted coding and development workflows" },
      { name: "Prompt Lab", desc: "Dedicated sessions for creating high-precision prompts" },
    ],
    gain: ["AI Confidence", "Practical Skills", "Industry-Ready Foundations"],
    outcome: "You will gain a strong AI foundation to step into any AI career path.",
  },
  {
    id: 2,
    label: "Track 1",
    title: "Advanced AI Engineering & Integration",
    tagline: "Goal: Deep-dive into technical architecture and professional-grade implementation.",
    price: 25000,
    duration: "4 – 5 Months",
    schedule: "Weekdays & Weekends",
    color: "#6C63FF",
    accent: "#9B94FF",
    icon: "⚙️",
    badge: "Most Popular",
    phases: [],
    modules: [
      { title: "Advanced AI & ML", desc: "In-depth models & deployment strategies" },
      { title: "Neural Architectures", desc: "Advanced DL & NLP strategies" },
      { title: "Specialized AI", desc: "Agentic AI & Robotics integration" },
      { title: "Expert Prompt Engineering", desc: "Advanced techniques for complex logic & reasoning" },
      { title: "Microsoft 365 Copilot", desc: "Excel, Power BI, Word, Outlook automation" },
      { title: "Multi-Model Mastery", desc: "Claude & ChatGPT combined workflows" },
    ],
    tools: [
      { name: "Microsoft 365 Copilot", desc: "Excel, Power BI, Word, Outlook" },
      { name: "Claude & ChatGPT", desc: "Multi-model AI workflows" },
      { name: "Gamma (Presentations)", desc: "AI-powered slide creation" },
      { name: "Suno AI", desc: "Audio Generation with AI" },
    ],
    projects: [
      "AI-Enhanced Web Design: HTML, CSS, Bootstrap with AI tools",
      "Capstone Project: Real-time industry problem solved using AI",
    ],
    gain: ["Advanced AI Skills", "Tool Mastery", "Real-World Project Experience"],
    outcome: "You will master AI tools used by top professionals and build industry-grade projects.",
  },
  {
    id: 3,
    label: "Track 3",
    title: "Full-Stack AI & Software Engineering",
    tagline: "The Complete Career Transformation Program.",
    price: 7000,
    duration: "7 – 8 Months",
    schedule: "Flexible Batches",
    color: "#FF6B35",
    accent: "#FF9A70",
    icon: "🚀",
    badge: "Career Track",
    phases: [
      {
        name: "Phase 1: Advanced AI & Intelligence Systems",
        color: "#FF6B35",
        items: [
          "The Intelligence Core: AI, ML, DL Deep Coverage",
          "Human-Machine Interaction: NLP & GenAI",
          "Next-Gen Tech: Agentic AI, Robotics & Prompt Engineering",
        ],
      },
      {
        name: "Phase 2: Full-Stack Development (AI-Powered)",
        color: "#FF9A70",
        items: [
          "Modern Frontend: HTML5, CSS3, Bootstrap",
          "Advanced Frameworks: Java Spring Boot, REST APIs, Microservices",
          "Programming Excellence: Java & Python with AI-assisted coding",
          "Python: Flask for rapid deployment",
          "Database Mastery: MySQL",
        ],
      },
      {
        name: "Phase 3: The Future-Ready Lab",
        color: "#FF6B35",
        items: [
          "AI Pair Programming: GitHub Copilot in your dev cycle",
          "Cloud & Infrastructure: AWS Cloud Deployment",
          "Enterprise Productivity: Microsoft 365 Copilot Suite",
          "The GenAI Toolkit: Claude, ChatGPT, Gamma (PPTs), Suno AI",
        ],
      },
      {
        name: "Phase 4: Career Launchpad & Placement Support",
        color: "#FF9A70",
        items: [
          "Resume Preparation: ATS-friendly, high-impact resume",
          "Digital Branding: LinkedIn & Naukri profile optimization",
          "Interview Bootcamp: Mock interviews & crack-code sessions",
          "Capstone: Real-Time Projects for your professional portfolio",
        ],
      },
    ],
    modules: [],
    tools: [
      { name: "AWS Cloud", desc: "Cloud deployment & infrastructure" },
      { name: "Spring Boot & Microservices", desc: "Enterprise backend development" },
      { name: "MySQL", desc: "Database design & mastery" },
      { name: "GitHub Copilot", desc: "AI-assisted full-stack coding" },
    ],
    gain: ["Full-Stack AI Developer", "Job-Ready Professional", "Future-Ready Leader"],
    outcome: "You will become an industry-ready Full-Stack AI Developer with real projects & placement support.",
  },
  {
    id: 4,
    label: "Track 4",
    title: "AI for Social Media Creators & Web Design Using AI",
    tagline: "Goal: Create engaging content & websites using AI tools and grow your online presence.",
    price: 7999,
    duration: "2 – 3 Months",
    schedule: "Flexible Batches",
    color: "#FFB800",
    accent: "#FFD060",
    icon: "🎨",
    badge: "Creative Track",
    phases: [],
    modules: [
      { title: "AI in Video Creation", desc: "CapCut, Descript, Runway, Pika Labs — Script-to-video workflows, Auto-captioning, Background removal, AI avatars. Project: Create a product promo video." },
      { title: "AI in Music & Audio", desc: "Soundraw, AIVA, Beatoven for music generation. Voice cloning & text-to-speech (ElevenLabs, Murf AI). Audio cleanup with AI (noise reduction, auto-leveling). Project: Add AI-generated background music to a demo video." },
      { title: "AI in Scriptwriting & Storyboarding", desc: "Prompt engineering for video scripts. AI-assisted storytelling (ChatGPT, Jasper, Sudowrite). Converting scripts into visual storyboards with AI tools. Project: Write and generate a short AI-powered explainer video." },
      { title: "Practical Editing with AI", desc: "Auto-editing long videos into shorts (Opus Clip, Wisecut). AI color correction & smart reframing (DaVinci Resolve, Adobe Premiere Pro AI). Project: Edit a lecture recording into engaging short clips." },
      { title: "Integration & Branding", desc: "Combining video + music + script for polished content. Using AI for thumbnails, posters, and social media visuals (Canva AI, MidJourney). Project: Create a complete AI campaign (video + poster + script)." },
    ],
    tools: [
      { name: "CapCut & Runway", desc: "AI video creation & editing" },
      { name: "ElevenLabs & Murf AI", desc: "Voice cloning & text-to-speech" },
      { name: "Canva AI & MidJourney", desc: "Thumbnails, posters & social visuals" },
      { name: "ChatGPT & Jasper", desc: "Script writing & AI storytelling" },
    ],
    gain: ["Content Creation Mastery", "Personal Brand Growth", "Monetization Skills", "Web Design Expertise"],
    outcome: "You will be able to create full AI-powered content campaigns and grow your online brand.",
  },
];

const TRAINERS = [
  {
    name: "Amit Kumar",
    role: "AI & Software Architect",
    exp: "10+ Years Corporate Experience",
    phone: "7348803930",
    initials: "AK",
    color: "#00C9A7",
  },
  {
    name: "Sitech Kumar",
    role: "AI & Robotics Expert",
    exp: "15+ Years Experience",
    phone: "93127 51901",
    initials: "SK",
    color: "#6C63FF",
  },
];

const ENQUIRY_EMAIL = "your-email@example.com";
const WHATSAPP_NUMBER = `91${TRAINERS[0].phone.replace(/\D/g, "")}`;

const OFFERS = [
  { icon: "📄", title: "Resume Preparation", desc: "ATS-Friendly, High-Impact Resume" },
  { icon: "💼", title: "LinkedIn / Naukri Profile", desc: "Complete Profile Optimization" },
  { icon: "🎯", title: "Interview Crack Tricks", desc: "Mock Interviews & Code Sessions" },
  {
    icon: "🧩",
    title: "Personal Guidance",
    desc: "Communication, Skill & Personality Development",
  },
];

const REVIEWS = [
  {
    name: "Priya Sharma",
    role: "B.Tech Student",
    track: "AI & Machine Learning Foundations",
    rating: 5,
    initials: "PS",
    color: "#00C9A7",
    text: "The sessions made AI concepts very easy to understand. Prompt engineering and Copilot practice helped me build confidence quickly.",
  },
  {
    name: "Rahul Verma",
    role: "Java Developer",
    track: "Advanced AI Engineering",
    rating: 5,
    initials: "RV",
    color: "#6C63FF",
    text: "I liked the hands-on approach. The trainers connected AI tools with real software projects, which made the course useful for my job.",
  },
  {
    name: "Sneha Patel",
    role: "Content Creator",
    track: "AI for Social Media",
    rating: 4,
    initials: "SP",
    color: "#FFB800",
    text: "The AI video, scriptwriting, and design workflows were very practical. I created my first complete campaign during the course.",
  },
  {
    name: "Arjun Mehta",
    role: "Final Year Student",
    track: "Full-Stack AI & Software Engineering",
    rating: 5,
    initials: "AM",
    color: "#FF6B35",
    text: "This course gave me a clear path from coding basics to AI projects. Resume support and mock interviews were a big bonus.",
  },
];

const TOOLS = [
  "GitHub Copilot", "ChatGPT (OpenAI)", "Claude AI",
  "Microsoft 365 Copilot", "Gamma (PPT)", "Suno AI (Music)",
  "Runway (Video AI)", "AWS Cloud",
];

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    const offset = 70;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

function NavBar({ activeSection, setActiveSection }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      // Update active section based on scroll position
      const sections = ["home", "tracks", "trainers", "tools", "offers", "reviews", "contact"];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [setActiveSection]);

  const links = ["Home", "Tracks", "Trainers", "Tools", "Offers", "Reviews", "Contact"];

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? "rgba(6,10,20,0.97)" : "transparent",
      backdropFilter: scrolled ? "blur(18px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(0,201,167,0.15)" : "none",
      transition: "all 0.3s ease",
      padding: "0 2rem",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 70 }}>
        {/* Logo */}
        <div
          onClick={() => scrollToSection("home")}
          style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}
        >
          <div style={{
            width: 40, height: 40, borderRadius: 10,
            background: "linear-gradient(135deg, #00C9A7, #6C63FF)",
            display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20,
          }}>🤖</div>
          <div>
            <div style={{ color: "#fff", fontWeight: 800, fontSize: 16, letterSpacing: "0.02em", lineHeight: 1.1 }}>AI Robotic</div>
            <div style={{ color: "#00C9A7", fontSize: 10, letterSpacing: "0.15em", fontWeight: 600 }}>WITH CODING</div>
          </div>
        </div>

        {/* Nav Links */}
        <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
          {links.map((l) => {
            const id = l.toLowerCase();
            const isActive = activeSection === id;
            return (
              <button
                key={l}
                onClick={() => { scrollToSection(id); setActiveSection(id); }}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  color: isActive ? "#00C9A7" : "rgba(255,255,255,0.75)",
                  fontSize: 14, fontWeight: isActive ? 700 : 500,
                  letterSpacing: "0.03em", padding: "4px 0",
                  borderBottom: isActive ? "2px solid #00C9A7" : "2px solid transparent",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#00C9A7"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = isActive ? "#00C9A7" : "rgba(255,255,255,0.75)"; }}
              >
                {l}
              </button>
            );
          })}
          <button
            onClick={() => scrollToSection("contact")}
            style={{
              background: "linear-gradient(90deg, #00C9A7, #6C63FF)",
              color: "#fff", padding: "8px 20px", borderRadius: 8,
              border: "none", cursor: "pointer",
              fontSize: 13, fontWeight: 700, letterSpacing: "0.05em",
            }}
          >
            Enroll Now
          </button>
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    const animate = (setter, target, duration) => {
      let start = null;
      const step = (ts) => {
        if (!start) start = ts;
        const progress = Math.min((ts - start) / duration, 1);
        setter(Math.floor(progress * target));
        if (progress < 1) requestAnimationFrame(step);
      };
      setTimeout(() => requestAnimationFrame(step), 400);
    };
    animate(setCount1, 500, 1800);
    animate(setCount2, 10, 1200);
    animate(setCount3, 4, 900);
  }, []);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #060A14 0%, #0D1830 50%, #0A1628 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "100px 2rem 60px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background grid */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,201,167,0.07) 1px, transparent 0)",
        backgroundSize: "40px 40px",
        pointerEvents: "none",
      }} />

      {/* Glow blobs */}
      <div style={{
        position: "absolute", top: "10%", left: "5%", width: 500, height: 500,
        background: "radial-gradient(circle, rgba(0,201,167,0.12) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "10%", right: "5%", width: 400, height: 400,
        background: "radial-gradient(circle, rgba(108,99,255,0.15) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ position: "relative", zIndex: 2, textAlign: "center", maxWidth: 900 }}>
        {/* Badge */}
        <div style={{
          display: "inline-block",
          background: "rgba(0,201,167,0.1)",
          border: "1px solid rgba(0,201,167,0.3)",
          borderRadius: 100,
          padding: "6px 20px",
          marginBottom: 28,
        }}>
          <span style={{ color: "#00C9A7", fontSize: 13, fontWeight: 600, letterSpacing: "0.1em" }}>
            🤖 4 POWERFUL TRACKS · 1 TRANSFORMATIVE JOURNEY
          </span>
        </div>

        <h1 style={{
          fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
          fontWeight: 900,
          lineHeight: 1.1,
          margin: "0 0 24px",
          letterSpacing: "-0.02em",
        }}>
          <span style={{ color: "#fff" }}>Master AI. </span>
          <span style={{
            background: "linear-gradient(90deg, #00C9A7, #6C63FF)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>Build Future.</span>
          <br />
          <span style={{ color: "#fff" }}>Launch Your </span>
          <span style={{
            background: "linear-gradient(90deg, #FF6B35, #FF9A70)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>Career.</span>
        </h1>

        <p style={{
          color: "rgba(255,255,255,0.65)",
          fontSize: "clamp(1rem, 2vw, 1.2rem)",
          maxWidth: 640,
          margin: "0 auto 40px",
          lineHeight: 1.7,
        }}>
          Industry-focused AI courses with hands-on projects, real tools, and placement support.
          Trained by corporate experts with <strong style={{ color: "#00C9A7" }}>10–15+ years of experience</strong>.
        </p>

        <div className="d-flex gap-3 justify-content-center flex-wrap" style={{ marginBottom: 60 }}>
          <button className="btn shadow-lg" onClick={() => scrollToSection("tracks")} style={{
            background: "linear-gradient(90deg, #00C9A7, #00A88C)",
            color: "#060A14", padding: "14px 36px", borderRadius: 10,
            border: "none", cursor: "pointer", fontWeight: 800, fontSize: 16, letterSpacing: "0.03em",
          }}>
            Explore Courses →
          </button>
          <button className="btn" onClick={() => scrollToSection("contact")} style={{
            background: "transparent",
            border: "1.5px solid rgba(108,99,255,0.5)",
            color: "#fff", padding: "14px 36px", borderRadius: 10,
            cursor: "pointer", fontWeight: 600, fontSize: 16,
          }}>
            Talk to an Advisor
          </button>
        </div>

        {/* Stats */}
        <div style={{
          display: "flex", gap: 40, justifyContent: "center", flexWrap: "wrap",
        }}>
          {[
            { val: `${count1}+`, label: "Students Trained" },
            { val: `${count2}+`, label: "Years of Expertise" },
            { val: `${count3}`, label: "Expert Tracks" },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{
                fontSize: "2.2rem", fontWeight: 900,
                background: "linear-gradient(90deg, #00C9A7, #6C63FF)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>{s.val}</div>
              <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Section */}
      <div id="video" style={{
        position: "relative", zIndex: 2, marginTop: 80, width: "100%", maxWidth: 860,
      }}>
        <div style={{ textAlign: "center", marginBottom: 20 }}>
          <span style={{
            background: "rgba(0,201,167,0.1)", border: "1px solid rgba(0,201,167,0.25)",
            borderRadius: 100, padding: "6px 18px",
            color: "#00C9A7", fontSize: 13, fontWeight: 600, letterSpacing: "0.08em",
          }}>🎬 COURSE OVERVIEW VIDEO</span>
        </div>
        <div style={{
          border: "1.5px solid rgba(0,201,167,0.25)",
          borderRadius: 20,
          overflow: "hidden",
          boxShadow: "0 0 80px rgba(0,201,167,0.12), 0 0 40px rgba(108,99,255,0.1)",
          position: "relative",
        }}>
          {/* Glowing top border */}
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: 3, zIndex: 2,
            background: "linear-gradient(90deg, #00C9A7, #6C63FF, #FF6B35)",
          }} />
          <div style={{ position: "relative", paddingTop: "56.25%" }}>
            <video
              src="/videos/intro.mp4"
              controls
              poster="/videos/thumbnail.jpg"
              style={{
                position: "absolute", top: 0, left: 0,
                width: "100%", height: "100%",
                display: "block", background: "#000",
              }}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        {/* Tags below video */}
        <div style={{
          display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginTop: 20,
        }}>
          {["🧠 AI & ML Foundations", "⚙️ Advanced Engineering", "🚀 Full-Stack AI", "🎨 Social Media & Web Design"].map((t) => (
            <span key={t} style={{
              background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.65)", borderRadius: 100, padding: "6px 16px", fontSize: 13, fontWeight: 500,
            }}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ color, children }) {
  return (
    <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, letterSpacing: "0.12em", fontWeight: 700, marginBottom: 12, display: "flex", alignItems: "center", gap: 8 }}>
      <span style={{ width: 20, height: 2, background: color, display: "inline-block", borderRadius: 2 }} />
      {children}
    </div>
  );
}

function TrackCard({ track }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      style={{
        background: expanded ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.03)",
        border: `1.5px solid ${expanded ? track.color + "88" : "rgba(255,255,255,0.08)"}`,
        borderRadius: 20,
        padding: "2rem",
        cursor: "pointer",
        transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
        position: "relative",
        overflow: "hidden",
      }}
      onClick={() => setExpanded(!expanded)}
    >
      {/* Gradient top bar */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 4,
        background: `linear-gradient(90deg, ${track.color}, ${track.accent})`,
        opacity: expanded ? 1 : 0.6,
        transition: "opacity 0.3s",
      }} />

      {/* Header Row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12, flexWrap: "wrap" }}>
            <span style={{
              background: `${track.color}22`, border: `1px solid ${track.color}55`,
              color: track.color, borderRadius: 8, padding: "4px 12px",
              fontSize: 11, fontWeight: 800, letterSpacing: "0.1em",
            }}>{track.label}</span>
            <span style={{
              background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.6)", borderRadius: 8, padding: "4px 10px",
              fontSize: 11, fontWeight: 600,
            }}>🏷️ {track.badge}</span>
            <span style={{ fontSize: 26 }}>{track.icon}</span>
          </div>

          <h3 style={{ color: "#fff", fontSize: "clamp(1.05rem, 2vw, 1.35rem)", fontWeight: 800, margin: "0 0 6px", lineHeight: 1.25 }}>
            {track.title}
          </h3>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, margin: "0 0 18px", lineHeight: 1.55, fontStyle: "italic" }}>
            {track.tagline}
          </p>

          {/* Stats chips */}
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            {[
              { label: "⏱ Duration", val: track.duration },
              { label: "📅 Schedule", val: track.schedule },
            ].map(({ label, val }) => (
              <div key={label} style={{ background: "rgba(255,255,255,0.05)", borderRadius: 10, padding: "8px 14px" }}>
                <div style={{ color: "rgba(255,255,255,0.35)", fontSize: 10, letterSpacing: "0.08em", marginBottom: 3 }}>{label}</div>
                <div style={{ color: "#fff", fontWeight: 700, fontSize: 13 }}>{val}</div>
              </div>
            ))}
            <div style={{ background: `${track.color}18`, border: `1px solid ${track.color}44`, borderRadius: 10, padding: "8px 14px" }}>
              <div style={{ color: "rgba(255,255,255,0.35)", fontSize: 10, letterSpacing: "0.08em", marginBottom: 3 }}>💰 Investment</div>
              <div style={{ color: track.color, fontWeight: 900, fontSize: 20 }}>₹{track.price.toLocaleString("en-IN")}</div>
            </div>
          </div>
        </div>

        {/* Expand arrow */}
        <div style={{
          width: 36, height: 36, borderRadius: "50%",
          border: `1.5px solid ${track.color}55`,
          display: "flex", alignItems: "center", justifyContent: "center",
          color: track.color, fontSize: 16,
          transition: "transform 0.3s",
          transform: expanded ? "rotate(180deg)" : "none",
          flexShrink: 0, marginLeft: 20, marginTop: 4,
        }}>▾</div>
      </div>

      {/* ── Expanded Detail Panel ── */}
      <div style={{
        maxHeight: expanded ? 2400 : 0,
        overflow: "hidden",
        transition: "max-height 0.5s cubic-bezier(0.4,0,0.2,1)",
      }}>
        <div style={{ borderTop: `1px solid ${track.color}33`, marginTop: 24, paddingTop: 24 }}>

          {/* PHASES (Track 3 only) */}
          {track.phases && track.phases.length > 0 && (
            <div style={{ marginBottom: 28 }}>
              <SectionLabel color={track.color}>COURSE PHASES</SectionLabel>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {track.phases.map((phase, pi) => (
                  <div key={pi} style={{
                    background: "rgba(255,255,255,0.03)",
                    border: `1px solid ${phase.color}33`,
                    borderLeft: `3px solid ${phase.color}`,
                    borderRadius: 12, padding: "14px 18px",
                  }}>
                    <div style={{ color: phase.color, fontWeight: 800, fontSize: 13, marginBottom: 10, letterSpacing: "0.02em" }}>
                      {phase.name}
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px 16px" }}>
                      {phase.items.map((item, ii) => (
                        <div key={ii} style={{ display: "flex", gap: 8, alignItems: "flex-start", fontSize: 12, color: "rgba(255,255,255,0.72)" }}>
                          <span style={{ color: phase.color, flexShrink: 0, marginTop: 2 }}>▸</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* MODULES (Track 1, 2, 4) */}
          {track.modules && track.modules.length > 0 && (
            <div style={{ marginBottom: 28 }}>
              <SectionLabel color={track.color}>
                {track.id === 4 ? "WHAT YOU WILL LEARN" : "CORE CURRICULUM"}
              </SectionLabel>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {track.modules.map((m, mi) => (
                  <div key={mi} style={{
                    background: "rgba(255,255,255,0.03)",
                    border: `1px solid rgba(255,255,255,0.07)`,
                    borderLeft: `3px solid ${track.color}`,
                    borderRadius: 10, padding: "12px 16px",
                    display: "flex", gap: 12, alignItems: "flex-start",
                  }}>
                    <span style={{
                      background: `${track.color}22`, color: track.color,
                      borderRadius: 6, padding: "2px 8px", fontSize: 11, fontWeight: 800,
                      flexShrink: 0, marginTop: 1,
                    }}>{String(mi + 1).padStart(2, "0")}</span>
                    <div>
                      <div style={{ color: "#fff", fontWeight: 700, fontSize: 13, marginBottom: 3 }}>{m.title}</div>
                      <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, lineHeight: 1.5 }}>{m.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TOOLS */}
          {track.tools && track.tools.length > 0 && (
            <div style={{ marginBottom: 28 }}>
              <SectionLabel color={track.color}>HANDS-ON TOOLS & LAB</SectionLabel>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                {track.tools.map((t, ti) => (
                  <div key={ti} style={{
                    background: `${track.color}0D`,
                    border: `1px solid ${track.color}2A`,
                    borderRadius: 10, padding: "10px 14px",
                    display: "flex", gap: 10, alignItems: "flex-start",
                  }}>
                    <span style={{ color: track.color, fontSize: 16, flexShrink: 0 }}>⚡</span>
                    <div>
                      <div style={{ color: track.color, fontWeight: 700, fontSize: 12 }}>{t.name}</div>
                      <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 11, lineHeight: 1.4, marginTop: 2 }}>{t.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* PROJECTS (Track 2) */}
          {track.projects && track.projects.length > 0 && (
            <div style={{ marginBottom: 28 }}>
              <SectionLabel color={track.color}>PRACTICAL LABS & REAL-WORLD PROJECTS</SectionLabel>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {track.projects.map((p, pi) => (
                  <div key={pi} style={{
                    display: "flex", gap: 10, alignItems: "flex-start",
                    background: "rgba(255,255,255,0.03)", borderRadius: 10, padding: "10px 14px",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}>
                    <span style={{ color: track.color, fontSize: 16, flexShrink: 0 }}>🏗️</span>
                    <span style={{ color: "rgba(255,255,255,0.72)", fontSize: 13 }}>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* YOU WILL GAIN */}
          <div style={{ marginBottom: 24 }}>
            <SectionLabel color={track.color}>YOU WILL GAIN</SectionLabel>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {track.gain.map((g) => (
                <span key={g} style={{
                  background: `${track.color}18`, border: `1px solid ${track.color}35`,
                  color: track.color, borderRadius: 8, padding: "7px 14px", fontSize: 12, fontWeight: 700,
                }}>🏆 {g}</span>
              ))}
            </div>
          </div>

          {/* OUTCOME box */}
          {track.outcome && (
            <div style={{
              background: `${track.color}0F`, border: `1px solid ${track.color}33`,
              borderRadius: 12, padding: "14px 18px", marginBottom: 24,
              display: "flex", gap: 12, alignItems: "flex-start",
            }}>
              <span style={{ fontSize: 20, flexShrink: 0 }}>🎯</span>
              <div>
                <div style={{ color: track.color, fontWeight: 800, fontSize: 12, marginBottom: 4, letterSpacing: "0.06em" }}>OUTCOME</div>
                <div style={{ color: "rgba(255,255,255,0.75)", fontSize: 13, lineHeight: 1.55 }}>{track.outcome}</div>
              </div>
            </div>
          )}

          {/* CTA */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <button
              onClick={(e) => { e.stopPropagation(); scrollToSection("contact"); }}
              style={{
                background: `linear-gradient(90deg, ${track.color}, ${track.accent})`,
                color: "#060A14", padding: "13px 32px", borderRadius: 10,
                border: "none", cursor: "pointer", fontWeight: 800, fontSize: 14,
                letterSpacing: "0.03em",
              }}
            >
              Enroll in {track.label} →
            </button>
            <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 13 }}>
              Limited seats · Batch starting soon
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function TracksSection() {
  return (
    <section id="tracks" style={{
      background: "#060A14",
      padding: "100px 2rem",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div style={{
            display: "inline-block",
            background: "rgba(108,99,255,0.12)",
            border: "1px solid rgba(108,99,255,0.3)",
            borderRadius: 100, padding: "6px 20px", marginBottom: 20,
          }}>
            <span style={{ color: "#9B94FF", fontSize: 13, fontWeight: 600, letterSpacing: "0.08em" }}>
              ⚡ CHOOSE YOUR TRACK
            </span>
          </div>
          <h2 style={{
            color: "#fff", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900,
            margin: "0 0 16px", letterSpacing: "-0.02em",
          }}>
            4 Tracks. <span style={{
              background: "linear-gradient(90deg, #00C9A7, #6C63FF)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>Infinite Possibilities.</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 17, maxWidth: 560, margin: "0 auto" }}>
            Click on any track to explore detailed modules, tools, phases & outcomes. All tracks include placement support.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {TRACKS.map((track, i) => (
            <TrackCard key={track.id} track={track} index={i} />
          ))}
        </div>

        {/* Comparison table */}
        <div style={{
          marginTop: 60,
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 20, overflow: "hidden",
        }}>
          <div style={{ padding: "20px 24px 12px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
            <span style={{ color: "#fff", fontWeight: 800, fontSize: 16 }}>📊 Quick Track Comparison</span>
          </div>
          <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 600 }}>
            <thead>
              <tr style={{ background: "rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <th style={{ padding: "14px 18px", textAlign: "left", color: "rgba(255,255,255,0.45)", fontSize: 12, fontWeight: 700, letterSpacing: "0.08em" }}>FEATURE</th>
                {TRACKS.map((t) => (
                  <th key={t.id} style={{ padding: "14px 12px", textAlign: "center", fontSize: 12, fontWeight: 800 }}>
                    <span style={{ color: t.color }}>{t.icon} {t.label}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["Duration", "2.5–3 Months", "4–5 Months", "7–8 Months", "2–3 Months"],
                ["Price", "₹10,000", "₹25,000", "₹7,000", "₹7,999"],
                ["Level", "Beginner", "Intermediate", "Advanced", "Creative"],
                ["Placement Support", "✓", "✓", "✓", "✓"],
                ["Live Projects", "✓", "✓", "✓", "✓"],
                ["AI Tools Training", "✓", "✓", "✓", "✓"],
                ["Full-Stack Dev", "—", "—", "✓", "—"],
                ["Cloud (AWS)", "—", "✓", "✓", "—"],
                ["Career Bootcamp", "—", "—", "✓", "—"],
                ["Content Creation", "—", "—", "—", "✓"],
                ["Video & Audio AI", "—", "—", "—", "✓"],
                ["MS 365 Copilot", "—", "✓", "✓", "—"],
              ].map(([feat, ...vals], ri) => (
                <tr key={feat} style={{ borderBottom: "1px solid rgba(255,255,255,0.04)", background: ri % 2 === 0 ? "transparent" : "rgba(255,255,255,0.015)" }}>
                  <td style={{ padding: "11px 18px", color: "rgba(255,255,255,0.65)", fontSize: 13 }}>{feat}</td>
                  {vals.map((v, vi) => (
                    <td key={vi} style={{ padding: "11px 12px", textAlign: "center", color: v === "—" ? "rgba(255,255,255,0.2)" : v === "✓" ? TRACKS[vi].color : "#fff", fontSize: v === "✓" || v === "—" ? 16 : 13, fontWeight: v === "✓" ? 700 : 500 }}>
                      {v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrainersSection() {
  return (
    <section id="trainers" style={{
      background: "linear-gradient(180deg, #060A14, #0A1020)",
      padding: "100px 2rem",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div style={{
            display: "inline-block",
            background: "rgba(255,107,53,0.12)",
            border: "1px solid rgba(255,107,53,0.3)",
            borderRadius: 100, padding: "6px 20px", marginBottom: 20,
          }}>
            <span style={{ color: "#FF6B35", fontSize: 13, fontWeight: 600, letterSpacing: "0.08em" }}>
              👨‍🏫 MEET YOUR TRAINERS
            </span>
          </div>
          <h2 style={{
            color: "#fff", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900,
            margin: "0 0 16px", letterSpacing: "-0.02em",
          }}>
            Learn from <span style={{
              background: "linear-gradient(90deg, #FF6B35, #FF9A70)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>Industry Experts</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 32 }}>
          {TRAINERS.map((t) => (
            <div key={t.name} style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 24, padding: "2.5rem",
              display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
              position: "relative", overflow: "hidden",
            }}>
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 4,
                background: `linear-gradient(90deg, ${t.color}, transparent)`,
              }} />
              <div style={{
                width: 88, height: 88, borderRadius: "50%",
                background: `linear-gradient(135deg, ${t.color}33, ${t.color}11)`,
                border: `2px solid ${t.color}55`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 30, fontWeight: 800, color: t.color, marginBottom: 20,
              }}>
                {t.initials}
              </div>
              <h3 style={{ color: "#fff", fontSize: 22, fontWeight: 800, margin: "0 0 6px" }}>{t.name}</h3>
              <p style={{ color: t.color, fontSize: 14, fontWeight: 600, margin: "0 0 12px" }}>{t.role}</p>
              <div style={{
                background: `${t.color}15`, border: `1px solid ${t.color}30`,
                borderRadius: 8, padding: "8px 18px", marginBottom: 20,
                color: t.color, fontSize: 13, fontWeight: 700,
              }}>
                🏆 {t.exp}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.6)", fontSize: 14 }}>
                <span>📞</span>
                <span>+91 {t.phone}</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 50 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 16,
            background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 16, padding: "20px 40px",
          }}>
            <span style={{ fontSize: 40 }}>⭐</span>
            <div style={{ textAlign: "left" }}>
              <div style={{
                fontSize: "2rem", fontWeight: 900,
                background: "linear-gradient(90deg, #00C9A7, #6C63FF)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>10+ Years</div>
              <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 14 }}>Combined Experience in AI & Robotics</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ToolsSection() {
  return (
    <section id="tools" style={{
      background: "#0A1020",
      padding: "100px 2rem",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div style={{
            display: "inline-block",
            background: "rgba(0,201,167,0.1)",
            border: "1px solid rgba(0,201,167,0.25)",
            borderRadius: 100, padding: "6px 20px", marginBottom: 20,
          }}>
            <span style={{ color: "#00C9A7", fontSize: 13, fontWeight: 600, letterSpacing: "0.08em" }}>
              🛠️ AI TOOLS YOU'LL MASTER
            </span>
          </div>
          <h2 style={{
            color: "#fff", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900,
            margin: "0 0 16px", letterSpacing: "-0.02em",
          }}>
            Industry-Grade <span style={{
              background: "linear-gradient(90deg, #00C9A7, #6C63FF)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>AI Toolkit</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 17, maxWidth: 520, margin: "0 auto" }}>
            Master the tools that top companies actually use — from AI coding assistants to cloud platforms.
          </p>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
          {TOOLS.map((tool, i) => {
            const colors = ["#00C9A7", "#6C63FF", "#FF6B35", "#FFB800", "#00D4FF", "#FF4DA6", "#7CFF6B", "#FF8C00"];
            const c = colors[i % colors.length];
            return (
              <div key={tool} style={{
                background: `${c}0F`,
                border: `1px solid ${c}33`,
                borderRadius: 12, padding: "12px 20px",
                color: c, fontWeight: 600, fontSize: 14,
                display: "flex", alignItems: "center", gap: 8,
                transition: "all 0.2s",
                cursor: "default",
              }}>
                <span style={{ fontSize: 18 }}>⚡</span>
                {tool}
              </div>
            );
          })}
        </div>

        {/* Tech stack */}
        <div style={{
          marginTop: 60,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 20,
        }}>
          {[
            { cat: "Backend", items: ["Java Spring Boot", "Microservices", "REST APIs"], color: "#00C9A7", icon: "⚡" },
            { cat: "Database", items: ["MySQL", "Database Design", "Query Optimization"], color: "#6C63FF", icon: "🗄️" },
            { cat: "Cloud & DevOps", items: ["AWS Cloud", "CI/CD Pipelines", "Deployment"], color: "#FF6B35", icon: "☁️" },
            { cat: "Frontend", items: ["HTML5, CSS3", "Bootstrap", "Modern Frameworks"], color: "#FFB800", icon: "🎨" },
          ].map((s) => (
            <div key={s.cat} style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 16, padding: "1.5rem",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                <span style={{ fontSize: 20 }}>{s.icon}</span>
                <span style={{ color: s.color, fontWeight: 700, fontSize: 14, letterSpacing: "0.05em" }}>{s.cat.toUpperCase()}</span>
              </div>
              {s.items.map((item) => (
                <div key={item} style={{
                  color: "rgba(255,255,255,0.65)", fontSize: 13,
                  padding: "5px 0", borderBottom: "1px solid rgba(255,255,255,0.04)",
                  display: "flex", alignItems: "center", gap: 8,
                }}>
                  <span style={{ color: s.color, fontSize: 10 }}>●</span>
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OffersSection() {
  return (
    <section id="offers" style={{
      background: "linear-gradient(180deg, #0A1020, #060A14)",
      padding: "100px 2rem",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div style={{
            display: "inline-block",
            background: "rgba(255,184,0,0.12)",
            border: "1px solid rgba(255,184,0,0.3)",
            borderRadius: 100, padding: "6px 20px", marginBottom: 20,
          }}>
            <span style={{ color: "#FFB800", fontSize: 13, fontWeight: 600, letterSpacing: "0.08em" }}>
              🎁 INCLUDED IN ALL TRACKS
            </span>
          </div>
          <h2 style={{
            color: "#fff", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900,
            margin: "0 0 16px", letterSpacing: "-0.02em",
          }}>
            Everything You Need to <span style={{
              background: "linear-gradient(90deg, #FFB800, #FF6B35)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>Succeed</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
          {OFFERS.map((o) => (
            <div key={o.title} style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 20, padding: "2rem",
              textAlign: "center",
            }}>
              <div style={{ fontSize: 44, marginBottom: 16 }}>{o.icon}</div>
              <h4 style={{ color: "#fff", fontSize: 18, fontWeight: 700, margin: "0 0 8px" }}>{o.title}</h4>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, margin: 0, lineHeight: 1.5 }}>{o.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  const averageRating = (REVIEWS.reduce((total, review) => total + review.rating, 0) / REVIEWS.length).toFixed(1);

  return (
    <section id="reviews" style={{
      background: "linear-gradient(180deg, #060A14, #0A1020)",
      padding: "100px 2rem",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 54 }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            background: "rgba(0,201,167,0.1)",
            border: "1px solid rgba(0,201,167,0.28)",
            borderRadius: 100,
            padding: "8px 22px",
            marginBottom: 20,
          }}>
            <span style={{ color: "#FFB800", letterSpacing: 2 }}>★★★★★</span>
            <span style={{ color: "#00C9A7", fontSize: 13, fontWeight: 700, letterSpacing: "0.08em" }}>
              STUDENT REVIEWS
            </span>
          </div>
          <h2 style={{
            color: "#fff",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 900,
            margin: "0 0 16px",
            letterSpacing: "-0.02em",
          }}>
            Loved by <span style={{
              background: "linear-gradient(90deg, #00C9A7, #6C63FF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>Future-Ready Learners</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.52)", fontSize: 17, maxWidth: 620, margin: "0 auto" }}>
            Sample feedback from learners who joined different AI, coding, and creator tracks.
          </p>
        </div>

        <div className="row g-4 align-items-stretch">
          <div className="col-lg-4">
            <div style={{
              height: "100%",
              background: "linear-gradient(145deg, rgba(0,201,167,0.13), rgba(108,99,255,0.12))",
              border: "1px solid rgba(0,201,167,0.24)",
              borderRadius: 20,
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
            }}>
              <div style={{ color: "#fff", fontSize: "4rem", fontWeight: 900, lineHeight: 1 }}>{averageRating}</div>
              <div style={{ color: "#FFB800", fontSize: 24, letterSpacing: 3, margin: "12px 0" }}>★★★★★</div>
              <p style={{ color: "rgba(255,255,255,0.62)", margin: "0 0 18px", fontSize: 15 }}>
                Average learner rating from sample course reviews.
              </p>
              <div className="d-flex justify-content-center gap-2 flex-wrap">
                {["Practical", "Supportive", "Project-Based"].map((item) => (
                  <span key={item} className="badge rounded-pill" style={{
                    background: "rgba(255,255,255,0.08)",
                    color: "rgba(255,255,255,0.78)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    padding: "8px 12px",
                  }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="row g-4">
              {REVIEWS.map((review) => (
                <div key={review.name} className="col-md-6">
                  <div style={{
                    height: "100%",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 18,
                    padding: "1.5rem",
                    position: "relative",
                    overflow: "hidden",
                  }}>
                    <div style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 3,
                      background: `linear-gradient(90deg, ${review.color}, transparent)`,
                    }} />
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div style={{
                        width: 48,
                        height: 48,
                        borderRadius: "50%",
                        background: `${review.color}22`,
                        border: `1px solid ${review.color}55`,
                        color: review.color,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 800,
                      }}>
                        {review.initials}
                      </div>
                      <div>
                        <h4 style={{ color: "#fff", fontSize: 16, fontWeight: 800, margin: "0 0 2px" }}>{review.name}</h4>
                        <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 13, margin: 0 }}>{review.role}</p>
                      </div>
                    </div>
                    <div style={{ color: "#FFB800", letterSpacing: 2, marginBottom: 10 }}>
                      {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
                    </div>
                    <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, lineHeight: 1.65, margin: "0 0 16px" }}>
                      "{review.text}"
                    </p>
                    <span style={{
                      color: review.color,
                      fontSize: 12,
                      fontWeight: 700,
                      letterSpacing: "0.05em",
                    }}>
                      {review.track}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", track: "" });
  const [submitted, setSubmitted] = useState(false);

  const selectedTrack = TRACKS.find((track) => String(track.id) === form.track);
  const enquiryMessage = [
    "New AI Robotic course enquiry",
    "",
    `Name: ${form.name || "-"}`,
    `Phone: ${form.phone || "-"}`,
    `Email: ${form.email || "-"}`,
    `Interested Track: ${selectedTrack ? `${selectedTrack.label}: ${selectedTrack.title}` : "-"}`,
  ].join("\n");
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(enquiryMessage)}`;
  const emailUrl = `mailto:${ENQUIRY_EMAIL}?subject=${encodeURIComponent("New Course Enquiry")}&body=${encodeURIComponent(enquiryMessage)}`;

  const handleSubmit = () => {
    if (!form.name || !form.phone) return;
    setSubmitted(true);
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setTimeout(() => {
      window.location.href = emailUrl;
    }, 300);
  };

  return (
    <section id="contact" style={{
      background: "#060A14",
      padding: "100px 2rem",
    }}>
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <h2 style={{
            color: "#fff", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900,
            margin: "0 0 16px", letterSpacing: "-0.02em",
          }}>
            Enroll Today &{" "}
            <span style={{
              background: "linear-gradient(90deg, #00C9A7, #6C63FF)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>Transform Your Future</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 17 }}>
            Fill in your details and our team will reach out within 24 hours.
          </p>
        </div>

        {submitted ? (
          <div style={{
            background: "rgba(0,201,167,0.1)",
            border: "1px solid rgba(0,201,167,0.3)",
            borderRadius: 20, padding: "3rem",
            textAlign: "center",
          }}>
            <div style={{ fontSize: 60, marginBottom: 20 }}>🎉</div>
            <h3 style={{ color: "#00C9A7", fontSize: 24, fontWeight: 800, margin: "0 0 10px" }}>
              Application Received!
            </h3>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 16 }}>
              Thank you {form.name}! Our team will contact you on {form.phone} shortly.
            </p>
            <div className="d-flex gap-3 justify-content-center flex-wrap mt-4">
              <a
                className="btn shadow"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "#25D366",
                  color: "#06120A",
                  padding: "12px 22px",
                  borderRadius: 10,
                  textDecoration: "none",
                  fontSize: 14,
                  fontWeight: 800,
                }}
              >
                Send on WhatsApp
              </a>
              <a
                className="btn shadow"
                href={emailUrl}
                style={{
                  background: "linear-gradient(90deg, #00C9A7, #6C63FF)",
                  color: "#060A14",
                  padding: "12px 22px",
                  borderRadius: 10,
                  textDecoration: "none",
                  fontSize: 14,
                  fontWeight: 800,
                }}
              >
                Send Email
              </a>
            </div>
          </div>
        ) : (
          <div style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 24, padding: "2.5rem",
          }}>
            <div className="row g-3">
            {[
              { key: "name", label: "Full Name *", placeholder: "Your full name", type: "text" },
              { key: "phone", label: "Phone Number *", placeholder: "+91 XXXXXXXXXX", type: "tel" },
              { key: "email", label: "Email Address", placeholder: "your@email.com", type: "email" },
            ].map((f) => (
              <div key={f.key} className={f.key === "email" ? "col-12" : "col-md-6"}>
                <label className="form-label mb-2" style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, fontWeight: 600, letterSpacing: "0.05em" }}>
                  {f.label.toUpperCase()}
                </label>
                <input
                  className="form-control form-control-lg"
                  type={f.type}
                  placeholder={f.placeholder}
                  value={form[f.key]}
                  onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                  style={{
                    width: "100%", padding: "14px 16px", borderRadius: 10,
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "#fff", fontSize: 15,
                    outline: "none", boxSizing: "border-box",
                  }}
                />
              </div>
            ))}
            </div>
            <div className="mt-3" style={{ marginBottom: 28 }}>
              <label className="form-label mb-2" style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, fontWeight: 600, letterSpacing: "0.05em" }}>
                INTERESTED TRACK
              </label>
              <select
                className="form-select form-select-lg"
                value={form.track}
                onChange={(e) => setForm({ ...form, track: e.target.value })}
                style={{
                  width: "100%", padding: "14px 16px", borderRadius: 10,
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: form.track ? "#fff" : "rgba(255,255,255,0.4)", fontSize: 15,
                  outline: "none",
                }}
              >
                <option value="">Select a track...</option>
                {TRACKS.map((t) => (
                  <option key={t.id} value={t.id} style={{ background: "#0A1020", color: "#fff" }}>
                    {t.label}: {t.title} — ₹{t.price.toLocaleString("en-IN")}
                  </option>
                ))}
              </select>
            </div>

            <button
              className="btn btn-lg shadow-lg"
              onClick={handleSubmit}
              style={{
                width: "100%", padding: "16px",
                background: "linear-gradient(90deg, #00C9A7, #6C63FF)",
                border: "none", borderRadius: 12,
                color: "#060A14", fontSize: 17, fontWeight: 800,
                cursor: "pointer", letterSpacing: "0.03em",
              }}
            >
              🚀 Submit Application
            </button>

            <div style={{ marginTop: 24, display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap" }}>
              {TRAINERS.map((t) => (
                <a
                  key={t.name}
                  href={`tel:+91${t.phone.replace(/\s/g, "")}`}
                  style={{
                    display: "flex", alignItems: "center", gap: 8,
                    color: t.color, fontSize: 14, textDecoration: "none", fontWeight: 600,
                  }}
                >
                  📞 {t.name}: +91 {t.phone}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{
      background: "#030509",
      borderTop: "1px solid rgba(0,201,167,0.1)",
      padding: "40px 2rem",
      textAlign: "center",
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 16 }}>
        <div style={{
          width: 36, height: 36, borderRadius: 8,
          background: "linear-gradient(135deg, #00C9A7, #6C63FF)",
          display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18,
        }}>🤖</div>
        <div style={{ color: "#fff", fontWeight: 800, fontSize: 18 }}>
          AI Robotic with Coding
        </div>
      </div>
      <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 14, margin: "0 0 12px" }}>
        Master AI. Build Future. Launch Your Career.
      </p>
      <p style={{ color: "rgba(255,255,255,0.2)", fontSize: 12 }}>
        © 2025 AI Robotic with Coding. All rights reserved.
      </p>
    </footer>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div style={{
      fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif",
      background: "#060A14",
      minHeight: "100vh",
      color: "#fff",
    }}>
      <NavBar activeSection={activeSection} setActiveSection={setActiveSection} />
      <HeroSection />
      <TracksSection />
      <TrainersSection />
      <ToolsSection />
      <OffersSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
