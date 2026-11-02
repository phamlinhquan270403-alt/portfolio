"use client";

import { useEffect, useRef, useState } from "react";
import type { Video } from "@/content";

const SOUND_EVENT = "portfolio:sound";

// Hover plays the clip muted; a click turns the sound on (and mutes any other clip).
export function VideoCard({ video, index }: { video: Video; index: number }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [state, setState] = useState<"idle" | "muted" | "sound">("idle");
  const horizontal = video.orientation === "horizontal";

  useEffect(() => {
    const onOtherSound = (e: Event) => {
      if ((e as CustomEvent<string>).detail === video.slug) return;
      const el = ref.current;
      if (!el || el.paused) return;
      el.pause();
      el.muted = true;
      setState("idle");
    };
    window.addEventListener(SOUND_EVENT, onOtherSound);
    return () => window.removeEventListener(SOUND_EVENT, onOtherSound);
  }, [video.slug]);

  const playMuted = () => {
    const el = ref.current;
    if (!el || state === "sound") return;
    el.muted = true;
    el.play().catch(() => {});
    setState("muted");
  };

  const stop = () => {
    const el = ref.current;
    if (!el || state === "sound") return;
    el.pause();
    setState("idle");
  };

  const toggleSound = () => {
    const el = ref.current;
    if (!el) return;
    if (state === "sound") {
      el.pause();
      el.muted = true;
      setState("idle");
      return;
    }
    window.dispatchEvent(new CustomEvent(SOUND_EVENT, { detail: video.slug }));
    el.muted = false;
    el.play().catch(() => {});
    setState("sound");
  };

  const label = state === "sound" ? "■ Stop" : state === "muted" ? "Click for sound" : "▶ Play";

  return (
    <figure className={horizontal ? "col-span-2" : ""}>
      <button
        type="button"
        onPointerEnter={(e) => e.pointerType === "mouse" && playMuted()}
        onPointerLeave={(e) => e.pointerType === "mouse" && stop()}
        onClick={toggleSound}
        aria-label={`${state === "sound" ? "Stop" : "Play"} ${video.title}`}
        className={`group relative block w-full overflow-hidden border border-ink bg-ink ${
          horizontal ? "aspect-video" : "aspect-[9/16]"
        }`}
      >
        <video
          ref={ref}
          src={`/work/${video.slug}.mp4`}
          poster={`/work/${video.slug}.jpg`}
          preload="none"
          muted
          loop
          playsInline
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
        <span
          className={`absolute bottom-0 left-0 px-2 py-1 font-mono text-[11px] uppercase tracking-wide ${
            state === "sound" ? "bg-accent text-paper" : "bg-paper text-ink"
          }`}
        >
          {label}
        </span>
      </button>
      <figcaption className="mt-2 flex items-baseline justify-between gap-2 font-mono text-xs uppercase">
        <span>
          {String(index + 1).padStart(2, "0")}. {video.title}
        </span>
        <span className="text-muted">{video.tag}</span>
      </figcaption>
    </figure>
  );
}
