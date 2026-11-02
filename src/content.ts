// All copy and data for the site lives here, so a translation later only touches this file.

export const profile = {
  name: "Pham Linh Quan",
  role: "Video Editor & Motion Designer",
  location: "Da Nang, Vietnam",
  workMode: "Remote only",
  intro:
    "I built a YouTube channel from zero to 29.2M views, doing everything myself: idea, script, edit, voiceover, sound and captions. I also edit Reels for US creator brands.",
  email: "phamlinhquan270403@gmail.com",
  phone: "+84 333 512 771",
  phoneHref: "tel:+84333512771",
};

export const stats = [
  { value: "29.2M", label: "total views on BeatFrame" },
  { value: "26K", label: "subscribers, from zero" },
  { value: "9.9M", label: "views on the top video" },
  { value: "181", label: "videos, made solo" },
];

export const ticker = [
  "29.2M views",
  "26K subscribers",
  "Top video 9.9M",
  "181 videos",
  "10+ videos / week",
  "US creator brands",
  "Premiere Pro",
  "After Effects",
];

export type Video = {
  slug: string;
  title: string;
  tag: string;
  orientation?: "vertical" | "horizontal";
};

export type WorkGroup = {
  id: string;
  title: string;
  meta: string;
  description: string;
  link?: { label: string; href: string };
  videos: Video[];
};

export const work: WorkGroup[] = [
  {
    id: "beatframe",
    title: "BeatFrame",
    meta: "YouTube · own channel · 2025 → now",
    description:
      "English-language rap and music entertainment channel. Built from zero, fully solo: ideas, script, editing, voiceover, SFX, captions.",
    link: { label: "youtube.com/@Beatframe999", href: "https://www.youtube.com/@Beatframe999" },
    videos: [
      { slug: "beatframe-eminem", title: "Eminem diss", tag: "Short" },
      { slug: "beatframe-kanye", title: "Kanye", tag: "Short" },
      { slug: "beatframe-travis", title: "Travis Scott moment", tag: "Short" },
    ],
  },
  {
    id: "creators",
    title: "US creator Reels",
    meta: "Instagram · via a creative agency · 2024 → 2025",
    description:
      "Short-form Reels for creator and coach brands, including Bashiri Smith (207K Instagram followers) and Justin Phan.",
    videos: [
      { slug: "bashi-152", title: "Bashiri Smith", tag: "Reel" },
      { slug: "bashi-156", title: "Bashiri Smith", tag: "Reel" },
      {
        slug: "justin-biggest-month",
        title: "Justin Phan",
        tag: "Video",
        orientation: "horizontal",
      },
    ],
  },
  {
    id: "ads",
    title: "Ads & product shorts",
    meta: "Client work · short-form",
    description: "Direct-response ads, product shorts and creator reels.",
    videos: [
      { slug: "archie-proof-ad", title: "Proof ad", tag: "Ad" },
      { slug: "archie-lead-form-ad", title: "Lead form ad", tag: "Ad" },
      { slug: "nikhil-1", title: "Creator reel", tag: "Reel" },
      { slug: "ryse-gadget", title: "Coolest gadget ever", tag: "Product" },
      { slug: "ryse-8k", title: "Someone quote me 8K", tag: "Product" },
      { slug: "ryse-wait", title: "Wait, don't", tag: "Product" },
      { slug: "ryse-cost", title: "Why it costs so much", tag: "Product" },
    ],
  },
];

export const experience = [
  {
    years: "2025 → now",
    role: "Founder & Video Editor",
    place: "BeatFrame, YouTube",
    note: "26K subscribers, 29.2M views. Fully solo.",
  },
  {
    years: "2024 → 2025",
    role: "Freelance Video Editor",
    place: "Creative agency, US clients",
    note: "Reels for creator and coach brands.",
  },
  {
    years: "2023 → 2024",
    role: "Video Editor",
    place: "Story-content studio, Vietnam",
    note: "Narrated story videos for Miss Review (225K subscribers). 10+ videos per week.",
    link: { label: "Miss Review", href: "https://www.youtube.com/@Missreview102" },
  },
  {
    years: "2021 → 2023",
    role: "College diploma, Graphic Design",
    place: "FPT Polytechnic",
    note: "",
  },
];

export const skills = [
  "Long-form YouTube",
  "Reels / TikTok / Shorts",
  "Storytelling & pacing for retention",
  "Motion graphics & VFX",
  "Voiceover & sound design",
  "Captions",
];

export const tools = [
  "Premiere Pro",
  "After Effects",
  "CapCut",
  "Photoshop",
  "Illustrator",
  "AI voice tools",
];

export const socials = [
  { label: "YouTube / BeatFrame", href: "https://www.youtube.com/@Beatframe999" },
  { label: "YouTube / Miss Review", href: "https://www.youtube.com/@Missreview102" },
  { label: "Instagram / @27_aprjl", href: "https://www.instagram.com/27_aprjl/" },
  { label: "Threads / @27_aprjl", href: "https://www.threads.com/@27_aprjl" },
  { label: "Bashiri Smith on IG", href: "https://www.instagram.com/bashi_fuirkashi/reels/" },
  { label: "Justin Phan on IG", href: "https://www.instagram.com/justinphans/" },
];
