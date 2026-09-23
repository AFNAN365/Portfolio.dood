'use client'

import { useState } from 'react'
import { ArrowUpRight, Bot, BrainCircuit, Code2, Github, Globe2, Layers3, Mail, Menu, Sparkles, X, Zap } from 'lucide-react'

const projects = [
  { title: 'AI Quiz Master', description: 'AI-focused learning and assessment platform with chapter exams, timers, scoring, progress tracking and certificate-oriented flows.', tags: ['Next.js', 'TypeScript', 'AI', 'Education'], icon: BrainCircuit },
  { title: 'Dood / dood.ai', description: 'AI assistant and agent concepts focused on useful automation, intelligent responses and production-ready AI workflows.', tags: ['AI Agents', 'Python', 'APIs', 'Automation'], icon: Bot },
  { title: 'PCAO-F Roadmap', description: 'Structured learning and career roadmap experience built around milestones, shared foundations and student progression.', tags: ['Web App', 'UX', 'Roadmap', 'Learning'], icon: Layers3 },
  { title: 'Student Utility Platform', description: 'Student-focused platform concept combining learning resources, authentication, utilities and an admin analytics experience.', tags: ['Full Stack', 'Dashboard', 'Auth', 'Education'], icon: Globe2 },
  { title: 'Hand Jutsu Studio', description: 'Interactive browser experience for gesture-inspired visual effects, controls and customizable visual modes.', tags: ['JavaScript', 'Interactive UI', 'Effects'], icon: Sparkles },
  { title: 'AI Model Router', description: 'Smart routing concept designed to evaluate a request and select the most suitable AI capability instead of using one model for everything.', tags: ['AI Routing', 'Agents', 'LLM Systems'], icon: Zap },
]

const skills = ['Python', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'HTML', 'CSS', 'FastAPI', 'Git', 'AI/ML', 'AI Agents', 'Automation']

export default function Home() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return (
    <main>
      <nav className="nav"><a href="#top" className="brand" onClick={close}><span>MA</span> Muhammad Afnan</a><div className={`navLinks ${open ? 'show' : ''}`}><a href="#about" onClick={close}>About</a><a href="#skills" onClick={close}>Skills</a><a href="#projects" onClick={close}>Projects</a><a href="#contact" onClick={close}>Contact</a></div><a className="navCta" href="https://github.com/AFNAN365" target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a><button className="menu" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X/> : <Menu/>}</button></nav>

      <section id="top" className="hero wrap"><div className="heroCopy"><div className="eyebrow"><span className="pulse"/> Available for internships & freelance work</div><h1>Hi, I&apos;m <span>Muhammad Afnan.</span><br/><em>Full Stack & AI Developer.</em></h1><p className="lead">I build modern web products, AI-powered tools, intelligent agents and automation systems that turn ideas into useful, real-world experiences.</p><div className="actions"><a className="primary" href="#projects">View my work <ArrowUpRight size={18}/></a><a className="secondary" href="https://github.com/AFNAN365" target="_blank" rel="noreferrer"><Github size={18}/> GitHub</a></div><div className="stats"><div><strong>Full Stack</strong><span>Development</span></div><div><strong>AI + Agents</strong><span>Intelligent systems</span></div><div><strong>GIAIC</strong><span>Student / Developer</span></div></div></div><div className="heroVisual" aria-label="Developer profile visual"><div className="orb orb1"/><div className="orb orb2"/><div className="codeCard"><div className="dots"><i/><i/><i/></div><pre>{`const developer = {
  name: "Muhammad Afnan",
  role: "Full Stack + AI",
  stack: ["Next.js", "Python"],
  focus: "AI Agents",
  mindset: "Build. Learn. Ship."
}`}</pre><div className="codeFooter"><Code2 size={15}/> building useful things</div></div></div></section>

      <section id="about" className="section wrap about"><div className="sectionHead"><span>01 / ABOUT</span><h2>Building with purpose,<br/><span>learning by shipping.</span></h2></div><div className="aboutGrid"><p>I&apos;m Muhammad Afnan, a full stack developer and GIAIC student focused on web development, AI engineering and agentic systems. I enjoy taking a problem from an idea to a working interface, backend and intelligent workflow.</p><p>My projects explore education technology, AI assistants, automation, interactive experiences and product-focused web applications. I care about clean UI, practical functionality and continuous improvement.</p></div></section>

      <section id="skills" className="section wrap"><div className="sectionHead"><span>02 / TOOLKIT</span><h2>Technologies I<br/><span>work with.</span></h2></div><div className="skillGrid">{skills.map(skill => <div className="skill" key={skill}><Code2 size={16}/>{skill}</div>)}</div></section>

      <section id="projects" className="section wrap projects"><div className="sectionHead row"><div><span>03 / SELECTED WORK</span><h2>Projects that<br/><span>show the range.</span></h2></div><p>From AI systems to student platforms and interactive web experiences.</p></div><div className="projectGrid">{projects.map(({ title, description, tags, icon: Icon }, index) => <article className="project" key={title}><div className="projectTop"><span>0{index + 1}</span><Icon size={25}/></div><h3>{title}</h3><p>{description}</p><div className="tags">{tags.map(tag => <span key={tag}>{tag}</span>)}</div></article>)}</div></section>

      <section className="banner wrap"><div><span>LET&apos;S BUILD</span><h2>Have an idea worth<br/><em>shipping?</em></h2></div><a href="#contact" className="primary">Start a conversation <ArrowUpRight size={18}/></a></section>

      <section id="contact" className="section wrap contact"><div className="sectionHead"><span>04 / CONTACT</span><h2>Let&apos;s connect.</h2></div><div className="contactBox"><div><p>For internships, development opportunities, AI projects or collaboration, reach out through GitHub.</p><a className="contactLink" href="https://github.com/AFNAN365" target="_blank" rel="noreferrer"><Github size={20}/> github.com/AFNAN365 <ArrowUpRight size={17}/></a></div><a className="mailBtn" href="https://github.com/AFNAN365" target="_blank" rel="noreferrer"><Mail size={19}/> Contact on GitHub</a></div></section>
      <footer className="footer wrap"><span>© 2026 Muhammad Afnan</span><span>Full Stack · AI · Agentic Systems</span><a href="#top">Back to top ↑</a></footer>
    </main>
  )
}
