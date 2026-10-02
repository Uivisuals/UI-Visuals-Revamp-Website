"use client";

import { useState } from "react";
import { Fraunces, Montserrat, Instrument_Serif } from "next/font/google";
import styles from "./blog.module.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "WONK"], // loads the full variable font so we can pick the display cut
  variable: "--font-fraunces",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-montserrat",
});
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument",
});

const CATEGORIES = ["All posts", "Community", "Design", "Events", "Alumni"];

const POSTS = [
  {
    id: 1,
    category: "Community",
    date: "August 10, 2026",
    title: "Five years of leading through visuals, what we've learnt and where we're going",
    excerpt: "From a small circle of design-curious students in 2019 to a multi-disciplinary creative community.",
    href: "/blog/five-years-of-leading-through-visuals",
  },
  {
    id: 2,
    category: "Events",
    date: "July 28, 2026",
    title: "What it was actually like to run a hackathon at 5,000 metres",
    excerpt: "The logistics, the altitude sickness, and why we'd do it again.",
    href: "/blog/hackathon-at-5000-metres",
  },
  {
    id: 3,
    category: "Design",
    date: "July 12, 2026",
    title: "Friday Blueprint: one design lesson per week",
    excerpt: "12 posts. 12 concepts. What the series taught us about consistent creative practice.",
    href: "/blog/friday-blueprint",
  },
  {
    id: 4,
    category: "Alumni",
    date: "June 30, 2026",
    title: "Where the founding class ended up, five years on",
    excerpt: "We asked the students who started UI Visuals in 2019 what they carried with them.",
    href: "/blog/where-the-founding-class-ended-up",
  },
  {
    id: 5,
    category: "Community",
    date: "June 14, 2026",
    title: "Inside कलाक्रम: building a festival around Nepali visual culture",
    excerpt: "How a small working group turned a two-day showcase into our biggest annual gathering.",
    href: "/blog/inside-kalakram",
  },
  {
    id: 6,
    category: "Design",
    date: "May 29, 2026",
    title: "Four circles, one community: rethinking how we organise creative work",
    excerpt: "Creative, Communications, Development and Operations — why we split into four teams.",
    href: "/blog/four-circles-one-community",
  },
];

const NAV_LINKS = [
  { label: "Story", href: "/story" },
  { label: "Initiatives", href: "/initiatives" },
  { label: "People", href: "/people" },
  { label: "Blog", href: "/blog", active: true },
];

const FOOTER_COLUMNS = [
  {
    title: "Explore",
    links: [
      { label: "Story", href: "/story" },
      { label: "Initiatives", href: "/initiatives" },
      { label: "Blogs", href: "/blog", active: true },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "People", href: "/people" },
      { label: "Alumni", href: "/alumni" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Instagram", href: "#" },
      { label: "LinkedIn", href: "#" },
    ],
  },
];

/* Placeholder logo. Swap for <Image src="/logo.png" .../> once you have the file in /public */
function Logo() {
  return (
    <a href="/" className={styles.logo} aria-label="UI Visuals home">
      <span className={styles.logoMark}>UI</span>
      <span className={styles.logoText}>VISUALS</span>
    </a>
  );
}

export default function BlogPage() {
  const [active, setActive] = useState("All posts");

  const visible =
    active === "All posts" ? POSTS : POSTS.filter((p) => p.category === active);

  return (
    <div
      className={`${styles.page} ${fraunces.variable} ${montserrat.variable} ${instrumentSerif.variable}`}
    >
      {/* Navbar */}
      <header className={styles.navbar}>
        <div className={styles.navSpacer} />
        <Logo />
        <nav className={styles.navLinks}>
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={l.active ? styles.navActive : ""}
            >
              {l.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <div>
            <p className={styles.breadcrumb}>
              <a href="/">Home</a> / <span>Blog</span>
            </p>
            <h1 className={styles.heading}>
              Stories, written
              <em>as we build them.</em>
            </h1>
          </div>
          <p className={styles.heroText}>
            Initiatives, events, projects and everything in between the honest,
            unpolished record of what UI Visuals has been up to. New posts
            roughly every two weeks.
          </p>
        </section>

        {/* Filters */}
        <div className={styles.filterBar}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`${styles.pill} ${active === cat ? styles.pillActive : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <section className={styles.grid}>
          {visible.map((post) => (
            <article key={post.id} className={styles.card}>
              <div className={styles.thumb}>
                <span className={styles.tag}>{post.category}</span>
              </div>
              <time className={styles.date}>{post.date}</time>
              <h2 className={styles.title}>{post.title}</h2>
              <p className={styles.excerpt}>{post.excerpt}</p>
              <div className={styles.cardFooter}>
                <a href={post.href} className={styles.readMore}>
                  Read more →
                </a>
              </div>
            </article>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <p className={styles.bigWords}>Leading Through Visuals.</p>

        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <Logo />
            <p>
              A creative community at Herald College Kathmandu, under Herald
              Devcorps where design-minded students come together to learn, and
              build through the power of visuals.
            </p>
          </div>

          <div className={styles.footerCols}>
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title} className={styles.footerCol}>
                <h4>{col.title}</h4>
                {col.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    className={l.active ? styles.footerActive : ""}
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.footerBottom}>
          <span>© 2025 UI Visuals. All rights reserved.</span>
          <span>
            Built by Students of Herald College Kathmandu, Members of UI
            Visuals.
          </span>
        </div>
      </footer>
    </div>
  );
}