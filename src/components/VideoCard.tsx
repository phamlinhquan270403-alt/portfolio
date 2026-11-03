"use client";

import { useEffect, useRef, useState } from "react";
import type { PortfolioLabels, Video } from "@/content";

const SOUND_EVENT = "portfolio:sound";

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds)) return "0:00";
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${minutes}:${remainingSeconds}`;
}

// Hover plays the clip muted; a click turns the sound on (and mutes any other clip).
export function VideoCard({
  video,
  index,
  labels,
}: {
  video: Video;
  index: number;
  labels: Pick<PortfolioLabels, "clickForSound" | "play" | "seek" | "soundOff" | "soundOn" | "stop">;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [state, setState] = useState<"idle" | "muted" | "sound">("idle");
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const horizontal = video.orientation === "horizontal";
  const progress = duration ? (currentTime / duration) * 100 : 0;

  useEffect(() => {
    const onOtherSound = (event: Event) => {
      if ((event as CustomEvent<string>).detail === video.slug) return;
      const element = ref.current;
      if (!element || element.paused) return;
      element.pause();
      element.muted = true;
      setState("idle");
    };
    window.addEventListener(SOUND_EVENT, onOtherSound);
    return () => window.removeEventListener(SOUND_EVENT, onOtherSound);
  }, [video.slug]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const loadMetadata = () => {
      element.preload = "metadata";
      element.load();
    };

    if (!("IntersectionObserver" in window)) {
      loadMetadata();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        loadMetadata();
        observer.disconnect();
      },
      { rootMargin: "200px 0px" },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const playMuted = () => {
    const element = ref.current;
    if (!element || state === "sound") return;
    element.muted = true;
    element.play().catch(() => {});
    setState("muted");
  };

  const stop = () => {
    const element = ref.current;
    if (!element || state === "sound") return;
    element.pause();
    setState("idle");
  };

  const toggleSound = () => {
    const element = ref.current;
    if (!element) return;
    if (state === "sound") {
      element.muted = true;
      setState("muted");
      return;
    }
    window.dispatchEvent(new CustomEvent(SOUND_EVENT, { detail: video.slug }));
    element.muted = false;
    element.play().catch(() => {});
    setState("sound");
  };

  const seek = (time: number) => {
    const element = ref.current;
    if (!element) return;
    element.currentTime = time;
    setCurrentTime(time);
  };

  const label = state === "sound" ? `🔊 ${labels.soundOff}` : state === "muted" ? labels.clickForSound : `▶ ${labels.play}`;

  return (
    <figure className={horizontal ? "col-span-2" : ""}>
      <div
        onPointerEnter={(event) => event.pointerType === "mouse" && playMuted()}
        onPointerLeave={(event) => event.pointerType === "mouse" && stop()}
        className={`group relative w-full overflow-hidden border border-ink bg-ink ${horizontal ? "aspect-video" : "aspect-[9/16]"}`}
      >
        <button
          type="button"
          onClick={toggleSound}
          aria-label={`${state === "sound" ? labels.soundOff : labels.soundOn}: ${video.title}`}
          className="block h-full w-full"
        >
          <video
            ref={ref}
            src={`/work/${video.slug}.mp4`}
            poster={`/work/${video.slug}.jpg`}
            preload="metadata"
            muted={state !== "sound"}
            loop
            playsInline
            onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
            onDurationChange={(event) => setDuration(event.currentTarget.duration)}
            onCanPlay={(event) => setDuration(event.currentTarget.duration)}
            onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        </button>
        <span className={`absolute bottom-7 left-0 px-2 py-1 font-mono text-[11px] uppercase tracking-wide ${state === "sound" ? "bg-accent text-paper" : "bg-paper text-ink"}`}>{label}</span>
        <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 bg-ink/70 px-2 py-1.5 text-paper">
          <button
            type="button"
            onClick={toggleSound}
            aria-label={`${state === "sound" ? labels.soundOff : labels.soundOn}: ${video.title}`}
            className="shrink-0 border border-paper px-1.5 py-0.5 font-mono text-[10px] uppercase hover:bg-paper hover:text-ink"
          >
            {state === "sound" ? "🔊" : "🔇"}
          </button>
          <input
            type="range"
            min="0"
            max={duration || 0}
            step="0.01"
            value={Math.min(currentTime, duration || 0)}
            disabled={!duration}
            onChange={(event) => seek(Number(event.target.value))}
            aria-label={`${labels.seek}: ${video.title}`}
            style={{ background: `linear-gradient(to right, #ff2a00 ${progress}%, #ffffff ${progress}%)` }}
            className="h-1 min-w-0 flex-1 cursor-pointer appearance-none rounded-full disabled:cursor-not-allowed disabled:opacity-50"
          />
          <output className="w-20 text-right font-mono text-[10px] tabular-nums">{formatTime(currentTime)} / {formatTime(duration)}</output>
        </div>
      </div>
      <figcaption className="mt-2 flex items-baseline justify-between gap-2 font-mono text-xs uppercase"><span>{String(index + 1).padStart(2, "0")}. {video.title}</span><span className="text-muted">{video.tag}</span></figcaption>
    </figure>
  );
}
