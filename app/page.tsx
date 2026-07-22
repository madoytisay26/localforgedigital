"use client";

import { FormEvent, useState } from "react";

const services = [
  { number: "01", title: "Search Engine Optimization", copy: "Technical foundations, content strategy, and authority building designed around the searches that turn into revenue.", tags: ["Technical SEO", "On-page SEO", "Content strategy"] },
  { number: "02", title: "Local Search Growth", copy: "Own the map pack and become the obvious choice when customers nearby are ready to call, visit, or book.", tags: ["Local SEO", "Google Business Profile", "Reputation signals"] },
  { number: "03", title: "AI-Generated Websites", copy: "Fast, conversion-focused websites engineered to rank, explain your value, and turn more visitors into qualified leads.", tags: ["High-performance builds", "Conversion UX", "SEO migration"] },
  { number: "04", title: "AI Search Optimization", copy: "Structure your expertise so your business can be discovered and cited across AI answers and modern search experiences.", tags: ["GEO", "AEO", "Schema markup"] },
];

const growthProcess = [
  ["01", "Find the real opportunity", "We audit your search presence, competitors, market, and website to find the clearest path to growth."],
  ["02", "Forge the strategy", "We turn the findings into a focused roadmap across technical SEO, content, local visibility, and conversion."],
  ["03", "Build, measure, improve", "We execute quickly, track what creates qualified leads, and keep refining the work that moves the business."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error" | "unconfigured">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
    const form = event.currentTarget;
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setFormStatus("unconfigured");
      return;
    }
    setFormStatus("sending");
    const formData = new FormData(form);
    formData.append("access_key", accessKey);
    formData.append("subject", "New growth audit request — Local Forge Digital");
    formData.append("from_name", "Local Forge Digital Website");
    try {
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error("Submission failed");
      form.reset();
      setFormStatus("success");
    } catch {
      setFormStatus("error");
    }
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Local Forge Digital home">
          <span className="brand-mark" aria-hidden="true"><i>L</i><i>F</i></span>
          <span>LOCAL FORGE <b>DIGITAL</b></span>
        </a>
        <nav className={menuOpen ? "nav open" : "nav"} aria-label="Main navigation">
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#process" onClick={() => setMenuOpen(false)}>Our approach</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>Why us</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <a className="header-cta" href="#contact">Free growth audit <span>↗</span></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">{menuOpen ? "Close" : "Menu"}</button>
      </header>

      <section className="hero" id="top">
        <div className="hero-glow" aria-hidden="true" />
        <div className="eyebrow"><span /> SEO + AI growth agency</div>
        <h1>Build visibility.<br />Forge <em>growth.</em></h1>
        <p className="hero-copy">We combine modern SEO, artificial intelligence, and high-performance web development to turn more searches into qualified leads.</p>
        <div className="hero-actions">
          <a className="button primary" href="#contact">Get your free growth audit <span>↗</span></a>
          <a className="text-link" href="#services">Explore our services <span>↓</span></a>
        </div>
        <div className="hero-proof">
          <div><strong>SEO-first</strong><span>Every decision tied to search intent</span></div>
          <div><strong>AI-powered</strong><span>Faster execution, sharper insights</span></div>
          <div><strong>Growth-focused</strong><span>Qualified leads over vanity metrics</span></div>
        </div>
      </section>

      <section className="marquee" aria-label="Capabilities"><div>TECHNICAL SEO <b>✦</b> LOCAL SEO <b>✦</b> AI WEBSITES <b>✦</b> CONTENT STRATEGY <b>✦</b> AI SEARCH OPTIMIZATION <b>✦</b></div></section>

      <section className="section services" id="services">
        <div className="section-heading">
          <div><span className="section-index">01 / SERVICES</span><h2>Everything you need<br />to <em>win online.</em></h2></div>
          <p>We bring search strategy, intelligent automation, and modern web development under one roof—so every part of your digital presence works harder.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <span className="card-number">{service.number}</span>
              <span className="card-arrow" aria-hidden="true">↗</span>
              <h3>{service.title}</h3>
