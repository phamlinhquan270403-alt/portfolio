"use client";

import { useEffect, useSyncExternalStore } from "react";
import { localizedContent, type Locale } from "@/content";
import { Reveal } from "@/components/Reveal";
import { VideoCard } from "@/components/VideoCard";

const LOCALE_STORAGE_KEY = "portfolio-locale";
const LOCALE_EVENT = "portfolio-locale-change";

function getPreferredLocale(): Locale {
  const saved = window.localStorage.getItem(LOCALE_STORAGE_KEY);
  if (saved === "en" || saved === "vi") return saved;
  return navigator.language.toLowerCase().startsWith("vi") ? "vi" : "en";
}

function subscribeToLocale(callback: () => void) {
  window.addEventListener(LOCALE_EVENT, callback);
  return () => window.removeEventListener(LOCALE_EVENT, callback);
}

function getServerLocale(): Locale {
  return "en";
}

export function Portfolio() {
  const locale = useSyncExternalStore(subscribeToLocale, getPreferredLocale, getServerLocale);
  useEffect(() => { document.documentElement.lang = locale; }, [locale]);

  const setLanguage = (nextLocale: Locale) => {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, nextLocale);
    window.dispatchEvent(new Event(LOCALE_EVENT));
  };

  const { experience, labels, profile, skills, socials, stats, ticker, tools, work } = localizedContent[locale];

  return (
    <main className="mx-auto max-w-6xl px-4 pb-16 sm:px-8">
      <header className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b border-ink py-3 font-mono text-xs uppercase">
        <span>{profile.name} — {profile.location}</span>
        <div className="flex items-center gap-4">
          <nav className="flex gap-4" aria-label="Primary navigation">
            <a href="#work" className="raw-link">{labels.work}</a><a href="#about" className="raw-link">{labels.about}</a><a href="#contact" className="raw-link">{labels.contact}</a>
          </nav>
          <div className="flex items-center gap-1 border-l border-ink pl-4" aria-label={labels.language}>
            <button type="button" onClick={() => setLanguage("vi")} aria-pressed={locale === "vi"} className={`px-1 hover:text-accent ${locale === "vi" ? "text-accent underline" : ""}`}>VN</button><span aria-hidden="true">/</span><button type="button" onClick={() => setLanguage("en")} aria-pressed={locale === "en"} className={`px-1 hover:text-accent ${locale === "en" ? "text-accent underline" : ""}`}>EN</button>
          </div>
        </div>
      </header>
      <section className="pt-12 pb-10 sm:pt-20"><Reveal><p className="mb-4 font-mono text-xs uppercase"><span className="blink mr-2 inline-block h-2 w-2 rounded-full bg-accent align-middle" />{labels.available}</p><h1 className="font-display text-[17vw] leading-[0.85] font-semibold tracking-[-0.07em] sm:text-[10rem]">Pham Linh<br />Quan</h1></Reveal><Reveal delay={150}><p className="mt-6 text-3xl tracking-[-0.04em] sm:text-5xl">{profile.role}.</p><p className="mt-4 max-w-2xl text-lg leading-snug sm:text-xl">{profile.intro}</p><p className="mt-4 font-mono text-xs uppercase text-muted">{profile.location} / {profile.workMode}</p></Reveal></section>
      <div className="overflow-hidden border-x border-t border-ink bg-ink py-2 text-paper"><div className="marquee flex w-max font-mono text-sm uppercase">{[0, 1].map((copy) => <span key={copy} aria-hidden={copy === 1} className="flex">{ticker.map((item) => <span key={item} className="px-6">{item} <span className="pl-6 text-accent">✦</span></span>)}</span>)}</div></div>
      <section className="grid grid-cols-2 border-b border-l border-ink lg:grid-cols-4">{stats.map((stat, index) => <Reveal key={stat.label} delay={index * 80} className="border-r border-t border-ink p-4 sm:p-6"><p className="font-display text-5xl font-semibold tracking-[-0.06em] sm:text-7xl">{stat.value}</p><p className="mt-2 font-mono text-xs uppercase">{stat.label}</p></Reveal>)}</section>
      <section id="work" className="scroll-mt-4 pt-16"><h2 className="border-b border-ink pb-2 font-mono text-xs uppercase">{labels.selectedWork}</h2>{work.map((group, groupIndex) => <div key={group.id} className="border-b border-ink py-10"><Reveal className="mb-6 grid gap-2 sm:grid-cols-[1fr_2fr]"><div><h3 className="font-display text-4xl font-semibold tracking-[-0.05em] sm:text-5xl"><span className="mr-2 font-mono text-sm font-normal align-top">{String(groupIndex + 1).padStart(2, "0")}</span>{group.title}</h3><p className="mt-1 font-mono text-xs uppercase text-muted">{group.meta}</p></div><div className="text-lg leading-snug"><p>{group.description}</p>{group.link && <a href={group.link.href} target="_blank" rel="noreferrer" className="raw-link mt-1 inline-block">{group.link.label} →</a>}</div></Reveal><div className="grid grid-cols-2 items-start gap-4 md:grid-cols-4">{group.videos.map((video, videoIndex) => <VideoCard key={video.slug} video={video} index={videoIndex} labels={labels} />)}</div></div>)}<p className="pt-3 font-mono text-xs uppercase text-muted">{labels.hoverHint}</p></section>
      <section id="about" className="scroll-mt-4 pt-16"><h2 className="border-b border-ink pb-2 font-mono text-xs uppercase">{labels.experience}</h2><ul>{experience.map((job) => <li key={job.years} className="border-b border-ink"><Reveal className="grid gap-1 py-4 sm:grid-cols-[10rem_1fr_1.3fr] sm:gap-6"><span className="font-mono text-xs uppercase sm:pt-1.5">{job.years}</span><span><span className="text-xl font-bold">{job.role}</span><br /><span className="italic">{job.place}</span></span><span className="leading-snug">{job.note} {job.link && <a href={job.link.href} target="_blank" rel="noreferrer" className="raw-link">{job.link.label} →</a>}</span></Reveal></li>)}</ul><div className="grid gap-10 pt-12 sm:grid-cols-2"><Reveal><h2 className="border-b border-ink pb-2 font-mono text-xs uppercase">{labels.whatIDo}</h2><ul className="mt-3 space-y-1 text-xl">{skills.map((skill) => <li key={skill}>— {skill}</li>)}</ul></Reveal><Reveal delay={100}><h2 className="border-b border-ink pb-2 font-mono text-xs uppercase">{labels.tools}</h2><ul className="mt-3 flex flex-wrap gap-2">{tools.map((tool) => <li key={tool} className="border border-ink px-3 py-1 font-mono text-sm uppercase transition-colors hover:bg-ink hover:text-paper">{tool}</li>)}</ul></Reveal></div></section>
      <section id="contact" className="scroll-mt-4 pt-20"><h2 className="border-b border-ink pb-2 font-mono text-xs uppercase">{labels.contact}</h2><Reveal><a href={`mailto:${profile.email}`} className="font-display mt-6 block text-[8vw] leading-none font-medium tracking-[-0.05em] transition-colors hover:text-accent sm:text-7xl">{profile.email.split("@")[0]}@<wbr />{profile.email.split("@")[1]}</a><a href={profile.phoneHref} className="mt-4 block font-mono text-lg hover:text-accent">{profile.phone}</a></Reveal><ul className="mt-10 grid gap-x-6 gap-y-2 sm:grid-cols-2">{socials.map((social) => <li key={social.href}><a href={social.href} target="_blank" rel="noreferrer" className="raw-link">{social.label} →</a></li>)}</ul></section>
      <footer className="mt-20 flex flex-wrap justify-between gap-2 border-t border-ink pt-3 font-mono text-xs uppercase text-muted"><span>© 2026 {profile.name}</span><span>{labels.madeIn}</span></footer>
    </main>
  );
}
