"use client";

import { FormEvent, useState } from "react";

const services = [
  {
    number: "01",
    title: "Search Engine Optimization",
    copy: "Technical foundations, content strategy, and authority building designed around the searches that turn into revenue.",
    tags: ["Technical SEO", "On-page SEO", "Content strategy"],
  },
  {
    number: "02",
    title: "Local Search Growth",
    copy: "Own the map pack and become the obvious choice when customers nearby are ready to call, visit, or book.",
    tags: [
      "Local SEO",
      "Google Business Profile",
      "Reputation signals",
    ],
  },
  {
    number: "03",
    title: "AI-Generated Websites",
    copy: "Fast, conversion-focused websites engineered to rank, explain your value, and turn more visitors into qualified leads.",
    tags: ["High-performance builds", "Conversion UX", "SEO migration"],
  },
  {
    number: "04",
    title: "AI Search Optimization",
    copy: "Structure your expertise so your business can be discovered and cited across AI answers and modern search experiences.",
    tags: ["GEO", "AEO", "Schema markup"],
  },
];

const processSteps = [
  [
    "01",
    "Find the real opportunity",
    "We audit your search presence, competitors, market, and website to find the clearest path to growth.",
  ],
  [
    "02",
    "Forge the strategy",
    "We turn the findings into a focused roadmap across technical SEO, content, local visibility, and conversion.",
  ],
  [
    "03",
    "Build, measure, improve",
    "We execute quickly, track what creates qualified leads, and keep refining the work that moves the business.",
  ],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<
    "idle" | "sending" | "success" | "error" | "unconfigured"
  >("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const accessKey =
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setFormStatus("unconfigured");
      return;
    }

    setFormStatus("sending");

    const formData = new FormData(form);
    formData.append("access_key", accessKey);
    formData.append(
      "subject",
      "New growth audit request — Local Forge Digital",
    );
    formData.append(
      "from_name",
      "Local Forge Digital Website",
    );

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        },
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error("Submission failed");
      }

      form.reset();
      setFormStatus("success");
    } catch {
      setFormStatus("error");
    }
  }

  return (
    <main>
      <header className="site-header">
        <a
          className="brand"
          href="#top"
          aria-label="Local Forge Digital home"
        >
          <span className="brand-mark" aria-hidden="true">
            <i>L</i>
            <i>F</i>
          </span>

          <span>
            LOCAL FORGE <b>DIGITAL</b>
          </span>
        </a>

        <nav
          className={menuOpen ? "nav open" : "nav"}
          aria-label="Main navigation"
        >
          <a
            href="#services"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </a>

          <a
            href="#process"
            onClick={() => setMenuOpen(false)}
          >
            Our approach
          </a>

          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
          >
            Why us
          </a>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </nav>

        <a className="header-cta" href="#contact">
          Free growth audit <span>↗</span>
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </header>

      <section className="hero" id="top">
        <div className="hero-glow" aria-hidden="true" />

        <div className="eyebrow">
          <span /> SEO + AI growth agency
        </div>

        <h1>
          Build visibility.
          <br />
          Forge <em>growth.</em>
        </h1>

        <p className="hero-copy">
          We combine modern SEO, artificial intelligence,
          and high-performance web development to turn more
          searches into qualified leads.
        </p>

        <div className="hero-actions">
          <a className="button primary" href="#contact">
            Get your free growth audit <span>↗</span>
          </a>

          <a className="text-link" href="#services">
            Explore our services <span>↓</span>
          </a>
        </div>

        <div className="hero-proof">
          <div>
            <strong>SEO-first</strong>
            <span>Every decision tied to search intent</span>
          </div>

          <div>
            <strong>AI-powered</strong>
            <span>Faster execution, sharper insights</span>
          </div>

          <div>
            <strong>Growth-focused</strong>
            <span>Qualified leads over vanity metrics</span>
          </div>
        </div>
      </section>

      <section
        className="marquee"
        aria-label="Capabilities"
      >
        <div>
          TECHNICAL SEO <b>✦</b> LOCAL SEO <b>✦</b> AI
          WEBSITES <b>✦</b> CONTENT STRATEGY <b>✦</b> AI
          SEARCH OPTIMIZATION <b>✦</b>
        </div>
      </section>

      <section className="section services" id="services">
        <div className="section-heading">
          <div>
            <span className="section-index">
              01 / SERVICES
            </span>

            <h2>
              Everything you need
              <br />
              to <em>win online.</em>
            </h2>
          </div>

          <p>
            We bring search strategy, intelligent
            automation, and modern web development under
            one roof—so every part of your digital presence
            works harder.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article
              className="service-card"
              key={service.number}
            >
              <span className="card-number">
                {service.number}
              </span>

              <span
                className="card-arrow"
                aria-hidden="true"
              >
                ↗
              </span>

              <h3>{service.title}</h3>
              <p>{service.copy}</p>

              <div className="tags">
                {service.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <p className="all-services">
          Also available: keyword research · competitor
          analysis · SEO audits · national SEO · website
          migration SEO
        </p>
      </section>

      <section className="section thesis" id="about">
        <div className="thesis-copy">
          <span className="section-index light">
            02 / WHY LOCAL FORGE
          </span>

          <h2>
            Traditional agencies
            <br />
            move slowly.
            <br />
            <em>We don&apos;t.</em>
          </h2>

          <p>
            Search is changing faster than ever. We built
            Local Forge Digital for this moment—combining
            proven SEO fundamentals with AI-enabled speed
            and smarter execution.
          </p>

          <a
            className="button outline"
            href="#contact"
          >
            Start a conversation <span>↗</span>
          </a>
        </div>

        <div className="thesis-panel">
          <div className="signal">
            <span>OLD WAY</span>
            <b>Long timelines</b>
            <b>Disconnected vendors</b>
            <b>Reports without outcomes</b>
          </div>

          <div className="signal active">
            <span>THE LOCAL FORGE WAY</span>
            <b>Faster execution</b>
            <b>One integrated strategy</b>
            <b>Growth you can measure</b>
          </div>

          <div
            className="forge-core"
            aria-hidden="true"
          >
            <span>SEO</span>
            <span>AI</span>
            <span>WEB</span>
            <strong>GROWTH</strong>
          </div>
        </div>
      </section>

      <section className="section process" id="process">
        <div className="section-heading compact">
          <div>
            <span className="section-index">
              03 / OUR APPROACH
            </span>

            <h2>
              Clarity first.
              <br />
              <em>Momentum next.</em>
            </h2>
          </div>

          <p>
            No bloated retainers or mystery work. Just a
            clear plan, decisive execution, and a shared
            focus on the opportunities that matter.
          </p>
        </div>

        <div className="process-list">
          {processSteps.map(([number, title, copy]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section contact" id="contact">
        <div className="contact-copy">
          <span className="section-index light">
            04 / LET&apos;S GROW
          </span>

          <h2>
            Your next lead
            <br />
            is already <em>searching.</em>
          </h2>

          <p>
            Tell us where you want to grow. We&apos;ll show
            you where the strongest opportunities are
            hiding—with a free, no-pressure growth audit.
          </p>

          <div className="contact-note">
            <span>✓</span> No generic sales deck. Just
            practical opportunities for your business.
          </div>
        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <input
            className="botcheck"
            type="checkbox"
            name="botcheck"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          <label>
            Name
            <input
              required
              name="name"
              placeholder="Your name"
            />
          </label>

          <label>
            Work email
            <input
              required
              type="email"
              name="email"
              placeholder="you@company.com"
            />
          </label>

          <label>
            Website
            <input
              type="url"
              name="website"
              placeholder="https://yourwebsite.com"
            />
          </label>

          <label>
            What do you want to improve?
            <select name="goal" defaultValue="">
              <option value="" disabled>
                Select your biggest priority
              </option>
              <option>Generate more local leads</option>
              <option>Improve organic rankings</option>
              <option>Build a new website</option>
              <option>Optimize for AI search</option>
              <option>Not sure yet</option>
            </select>
          </label>

          <button
            className="button primary submit"
            type="submit"
            disabled={formStatus === "sending"}
          >
            {formStatus === "sending"
              ? "Sending…"
              : "Request my free audit"}
            <span>↗</span>
          </button>

          {formStatus === "success" && (
            <p className="form-success" role="status">
              Thanks—your growth audit request has been
              sent. We&apos;ll be in touch soon.
            </p>
          )}

          {formStatus === "error" && (
            <p className="form-error" role="alert">
              Something went wrong. Please try again in a
              moment.
            </p>
          )}

          {formStatus === "unconfigured" && (
            <p className="form-error" role="alert">
              The form needs its Web3Forms access key before
              it can send.
            </p>
          )}
        </form>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark" aria-hidden="true">
            <i>L</i>
            <i>F</i>
          </span>

          <span>
            LOCAL FORGE <b>DIGITAL</b>
          </span>
        </a>

        <p>
          SEO, AI, and websites built for business growth.
        </p>

        <div>
          <a href="#services">Services</a>
          <a href="#process">Approach</a>
          <a href="#contact">Contact</a>
        </div>

        <small>
          © 2026 Local Forge Digital. Built for what&apos;s
          next.
        </small>
      </footer>
    </main>
  );
}
