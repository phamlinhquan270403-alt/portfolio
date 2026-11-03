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

export type Locale = "en" | "vi";

export type PortfolioLabels = {
  language: string;
  vietnamese: string;
  english: string;
  work: string;
  about: string;
  contact: string;
  available: string;
  selectedWork: string;
  hoverHint: string;
  experience: string;
  whatIDo: string;
  tools: string;
  madeIn: string;
  play: string;
  stop: string;
  clickForSound: string;
  seek: string;
};

export type PortfolioContent = {
  profile: typeof profile;
  stats: typeof stats;
  ticker: typeof ticker;
  work: typeof work;
  experience: typeof experience;
  skills: typeof skills;
  tools: typeof tools;
  socials: typeof socials;
  labels: PortfolioLabels;
};

const enLabels: PortfolioLabels = {
  language: "Language",
  vietnamese: "Tiếng Việt",
  english: "English",
  work: "Work",
  about: "About",
  contact: "Contact",
  available: "Available for remote work",
  selectedWork: "Selected work",
  hoverHint: "Hover to preview. Click for sound.",
  experience: "Experience",
  whatIDo: "What I do",
  tools: "Tools",
  madeIn: "Made in Da Nang",
  play: "Play",
  stop: "Stop",
  clickForSound: "Click for sound",
  seek: "Seek video",
};

export const localizedContent: Record<Locale, PortfolioContent> = {
  en: { profile, stats, ticker, work, experience, skills, tools, socials, labels: enLabels },
  vi: {
    profile: {
      ...profile,
      location: "Đà Nẵng, Việt Nam",
      workMode: "Làm việc từ xa",
      intro:
        "Tôi xây dựng kênh YouTube từ 0 đến 29,2 triệu lượt xem và tự đảm nhiệm toàn bộ quy trình: ý tưởng, kịch bản, dựng, voice-over, âm thanh và phụ đề. Tôi cũng dựng Reels cho các thương hiệu creator tại Mỹ.",
    },
    stats: [
      { value: "29.2M", label: "lượt xem trên BeatFrame" },
      { value: "26K", label: "người đăng ký từ con số 0" },
      { value: "9.9M", label: "lượt xem video cao nhất" },
      { value: "181", label: "video tự sản xuất" },
    ],
    ticker: ["29.2M lượt xem", "26K người đăng ký", "Video top 9.9M", "181 video", "10+ video / tuần", "Creator tại Mỹ", "Premiere Pro", "After Effects"],
    work: [
      {
        id: "beatframe",
        title: "BeatFrame",
        meta: "YouTube · kênh cá nhân · 2025 → nay",
        description: "Kênh giải trí rap và âm nhạc bằng tiếng Anh. Xây dựng từ số 0, tự thực hiện toàn bộ: ý tưởng, kịch bản, dựng, voice-over, SFX và phụ đề.",
        link: { label: "youtube.com/@Beatframe999", href: "https://www.youtube.com/@Beatframe999" },
        videos: [
          { slug: "beatframe-eminem", title: "Eminem diss", tag: "Short" },
          { slug: "beatframe-kanye", title: "Kanye", tag: "Short" },
          { slug: "beatframe-travis", title: "Khoảnh khắc Travis Scott", tag: "Short" },
        ],
      },
      {
        id: "creators",
        title: "Reels cho creator Mỹ",
        meta: "Instagram · qua agency sáng tạo · 2024 → 2025",
        description: "Reels ngắn cho các thương hiệu creator và coach, gồm Bashiri Smith (207K followers Instagram) và Justin Phan.",
        videos: [
          { slug: "bashi-152", title: "Bashiri Smith", tag: "Reel" },
          { slug: "bashi-156", title: "Bashiri Smith", tag: "Reel" },
          { slug: "justin-biggest-month", title: "Justin Phan", tag: "Video", orientation: "horizontal" },
        ],
      },
      {
        id: "ads",
        title: "Quảng cáo & video sản phẩm",
        meta: "Dự án khách hàng · video ngắn",
        description: "Quảng cáo chuyển đổi trực tiếp, video sản phẩm và reels cho creator.",
        videos: [
          { slug: "archie-proof-ad", title: "Quảng cáo proof", tag: "Ad" },
          { slug: "archie-lead-form-ad", title: "Quảng cáo lead form", tag: "Ad" },
          { slug: "nikhil-1", title: "Creator reel", tag: "Reel" },
          { slug: "ryse-gadget", title: "Món gadget thú vị nhất", tag: "Sản phẩm" },
          { slug: "ryse-8k", title: "Báo giá tôi 8K", tag: "Sản phẩm" },
          { slug: "ryse-wait", title: "Khoan đã", tag: "Sản phẩm" },
          { slug: "ryse-cost", title: "Vì sao giá cao", tag: "Sản phẩm" },
        ],
      },
    ],
    experience: [
      { years: "2025 → nay", role: "Founder & Video Editor", place: "BeatFrame, YouTube", note: "26K người đăng ký, 29,2M lượt xem. Tự thực hiện toàn bộ." },
      { years: "2024 → 2025", role: "Freelance Video Editor", place: "Creative agency, khách hàng Mỹ", note: "Reels cho các thương hiệu creator và coach." },
      { years: "2023 → 2024", role: "Video Editor", place: "Studio nội dung kể chuyện, Việt Nam", note: "Video kể chuyện có voice-over cho Miss Review (225K người đăng ký). 10+ video mỗi tuần.", link: { label: "Miss Review", href: "https://www.youtube.com/@Missreview102" } },
      { years: "2021 → 2023", role: "Cao đẳng Thiết kế đồ họa", place: "FPT Polytechnic", note: "" },
    ],
    skills: ["YouTube long-form", "Reels / TikTok / Shorts", "Kể chuyện & nhịp dựng giữ chân người xem", "Motion graphics & VFX", "Voice-over & thiết kế âm thanh", "Phụ đề"],
    tools: ["Premiere Pro", "After Effects", "CapCut", "Photoshop", "Illustrator", "Công cụ AI voice"],
    socials,
    labels: {
      language: "Ngôn ngữ",
      vietnamese: "Tiếng Việt",
      english: "English",
      work: "Dự án",
      about: "Giới thiệu",
      contact: "Liên hệ",
      available: "Sẵn sàng làm việc từ xa",
      selectedWork: "Dự án tiêu biểu",
      hoverHint: "Di chuột để xem trước. Nhấn để bật tiếng.",
      experience: "Kinh nghiệm",
      whatIDo: "Tôi làm gì",
      tools: "Công cụ",
      madeIn: "Thực hiện tại Đà Nẵng",
      play: "Phát",
      stop: "Dừng",
      clickForSound: "Nhấn để bật tiếng",
      seek: "Tua video",
    },
  },
};
