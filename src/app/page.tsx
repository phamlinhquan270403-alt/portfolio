import { Reveal } from "@/components/Reveal";
import { VideoCard } from "@/components/VideoCard";
import { experience, profile, skills, socials, stats, ticker, tools, work } from "@/content";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4 pb-16 sm:px-8">
      {/* Top bar */}
      <header className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b border-ink py-3 font-mono text-xs uppercase">
        <span>
          {profile.name} — {profile.location}
        </span>
        <nav className="flex gap-4">
          <a href="#work" className="raw-link">Work</a>
          <a href="#about" className="raw-link">About</a>
          <a href="#contact" className="raw-link">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="pt-12 pb-10 sm:pt-20">
        <Reveal>
          <p className="mb-4 font-mono text-xs uppercase">
            <span className="blink mr-2 inline-block h-2 w-2 rounded-full bg-accent align-middle" />
            Available for remote work
          </p>
          <h1 className="font-display text-[17vw] leading-[0.85] font-semibold tracking-[-0.07em] sm:text-[10rem]">
            Pham Linh
            <br />
            Quan
          </h1>
        </Reveal>
        <Reveal delay={150}>
          <p className="mt-6 text-3xl tracking-[-0.04em] sm:text-5xl">{profile.role}.</p>
          <p className="mt-4 max-w-2xl text-lg leading-snug sm:text-xl">{profile.intro}</p>
          <p className="mt-4 font-mono text-xs uppercase text-muted">
            {profile.location} / {profile.workMode}
          </p>
        </Reveal>
      </section>

      {/* Ticker */}
      <div className="overflow-hidden border-x border-t border-ink bg-ink py-2 text-paper">
        <div className="marquee flex w-max font-mono text-sm uppercase">
          {[0, 1].map((copy) => (
            <span key={copy} aria-hidden={copy === 1} className="flex">
              {ticker.map((item) => (
                <span key={item} className="px-6">
                  {item} <span className="pl-6 text-accent">✦</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* Stats */}
      <section className="grid grid-cols-2 border-b border-l border-ink lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 80} className="border-r border-t border-ink p-4 sm:p-6">
            <p className="font-display text-5xl font-semibold tracking-[-0.06em] sm:text-7xl">{s.value}</p>
            <p className="mt-2 font-mono text-xs uppercase">{s.label}</p>
          </Reveal>
        ))}
      </section>

      {/* Work */}
      <section id="work" className="scroll-mt-4 pt-16">
        <h2 className="border-b border-ink pb-2 font-mono text-xs uppercase">Selected work</h2>
        {work.map((group, gi) => (
          <div key={group.id} className="border-b border-ink py-10">
            <Reveal className="mb-6 grid gap-2 sm:grid-cols-[1fr_2fr]">
              <div>
                <h3 className="font-display text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
                  <span className="mr-2 font-mono text-sm font-normal align-top">
                    {String(gi + 1).padStart(2, "0")}
                  </span>
                  {group.title}
                </h3>
                <p className="mt-1 font-mono text-xs uppercase text-muted">{group.meta}</p>
              </div>
              <div className="text-lg leading-snug">
                <p>{group.description}</p>
                {group.link && (
                  <a href={group.link.href} target="_blank" rel="noreferrer" className="raw-link mt-1 inline-block">
                    {group.link.label} ↗
                  </a>
                )}
              </div>
            </Reveal>
            <div className="grid grid-cols-2 items-start gap-4 md:grid-cols-4">
              {group.videos.map((video, vi) => (
                <VideoCard key={video.slug} video={video} index={vi} />
              ))}
            </div>
          </div>
        ))}
        <p className="pt-3 font-mono text-xs uppercase text-muted">
          Hover to preview. Click for sound.
        </p>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-4 pt-16">
        <h2 className="border-b border-ink pb-2 font-mono text-xs uppercase">Experience</h2>
        <ul>
          {experience.map((job) => (
            <li key={job.years} className="border-b border-ink">
              <Reveal className="grid gap-1 py-4 sm:grid-cols-[10rem_1fr_1.3fr] sm:gap-6">
                <span className="font-mono text-xs uppercase sm:pt-1.5">{job.years}</span>
                <span>
                  <span className="text-xl font-bold">{job.role}</span>
                  <br />
                  <span className="italic">{job.place}</span>
                </span>
                <span className="leading-snug">
                  {job.note}{" "}
                  {job.link && (
                    <a href={job.link.href} target="_blank" rel="noreferrer" className="raw-link">
                      {job.link.label} ↗
                    </a>
                  )}
                </span>
              </Reveal>
            </li>
          ))}
        </ul>

        <div className="grid gap-10 pt-12 sm:grid-cols-2">
          <Reveal>
            <h2 className="border-b border-ink pb-2 font-mono text-xs uppercase">What I do</h2>
            <ul className="mt-3 space-y-1 text-xl">
              {skills.map((s) => (
                <li key={s}>— {s}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="border-b border-ink pb-2 font-mono text-xs uppercase">Tools</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {tools.map((t) => (
                <li
                  key={t}
                  className="border border-ink px-3 py-1 font-mono text-sm uppercase transition-colors hover:bg-ink hover:text-paper"
                >
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-4 pt-20">
        <h2 className="border-b border-ink pb-2 font-mono text-xs uppercase">Contact</h2>
        <Reveal>
          <a
            href={`mailto:${profile.email}`}
            className="font-display mt-6 block text-[8vw] leading-none font-medium tracking-[-0.05em] transition-colors hover:text-accent sm:text-7xl"
          >
            {profile.email.split("@")[0]}@<wbr />
            {profile.email.split("@")[1]}
          </a>
          <a href={profile.phoneHref} className="mt-4 block font-mono text-lg hover:text-accent">
            {profile.phone}
          </a>
        </Reveal>
        <ul className="mt-10 grid gap-x-6 gap-y-2 sm:grid-cols-2">
          {socials.map((s) => (
            <li key={s.href}>
              <a href={s.href} target="_blank" rel="noreferrer" className="raw-link">
                {s.label} ↗
              </a>
            </li>
          ))}
        </ul>
      </section>

      <footer className="mt-20 flex flex-wrap justify-between gap-2 border-t border-ink pt-3 font-mono text-xs uppercase text-muted">
        <span>© 2026 {profile.name}</span>
        <span>Made in Da Nang</span>
      </footer>
    </main>
  );
}
