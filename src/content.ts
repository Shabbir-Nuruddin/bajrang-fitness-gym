import "@fontsource/rozha-one/400.css";
import type { Site } from "./lib";

const SPLIT: [number, number][] = [[5, 11], [16, 22]];

export const SITE: Site = {
  name: "Bajrang Fitness Gym",
  sub: { en: "4,000 sq ft gym · Ghanta Ghar Chowk, IMT Manesar", hi: "4,000 स्क्वेयर फ़ीट जिम · घंटा घर चौक, IMT मानेसर" },
  banner: { en: "Morning and evening batches, Monday to Saturday: WhatsApp to plan your first visit", hi: "सोमवार से शनिवार सुबह और शाम के बैच: पहली विज़िट के लिए व्हाट्सऐप करें" },
  phone: "918700078900",
  phoneDisplay: "+91 87000 78900",
  lat: 28.3574562,
  lon: 76.9238883,
  hours: [[], SPLIT, SPLIT, SPLIT, SPLIT, SPLIT, SPLIT],
  theme: {
    dark: true,
    bg: "#120a05",
    bg2: "#1a0f08",
    panel: "#22140a",
    ink: "#fbf0e4",
    ink2: "#d6c0a8",
    ink3: "#987e66",
    line: "#33200f",
    accent: "#ff8a00",
    onAccent: "#2b1400",
    display: "Rozha One",
    weight: 400,
    upper: false,
  },
  scene: "gada",
  align: "right",
  hero: {
    title: [
      { en: "Strength of Bajrang.", hi: "बजरंग की ताक़त।" },
      { en: "4,000 sq ft to earn it.", hi: "4,000 स्क्वेयर फ़ीट में।" },
    ],
    proof: {
      en: "4.8 on Google from 86 reviews. Certified trainers, top-quality machines and a clean 4,000 sq ft floor in IMT Manesar.",
      hi: "गूगल पर 86 रिव्यू से 4.8। सर्टिफ़ाइड ट्रेनर, टॉप-क्वालिटी मशीनें और IMT मानेसर में साफ़ 4,000 स्क्वेयर फ़ीट की जगह।",
    },
    fallback: "/img/p1.jpg",
  },
  marquee: ["Strength", "Machines", "Cardio", "Certified trainers", "4,000 sq ft", "Never overcrowded", "IMT Manesar"],
  dishes: {
    title: { en: "What members come for", hi: "मेंबर किसलिए आते हैं" },
    body: { en: "Every line is quoted from a Google review.", hi: "हर लाइन गूगल रिव्यू से ली गई है।" },
    layout: "cards",
    items: [
      { name: { en: "The floor", hi: "जगह" }, quote: "certified trainers, top-quality machines, and a clean 4000 sq.ft. workout space", img: "/img/p4.jpg" },
      { name: { en: "No crowding", hi: "भीड़ नहीं" }, quote: "Clean spacious and never overcrowded. The trainers actually pay attention to you.", img: "/img/p1.jpg" },
      { name: { en: "Vibe", hi: "माहौल" }, quote: "Good ambience full space classyy vibes", img: "/img/p11.jpg" },
      { name: { en: "Budget", hi: "बजट" }, quote: "A well spaced gym in imt manesar with a friendly budget fees" },
      { name: { en: "Machines", hi: "मशीनें" }, quote: "Safe and prosperous environment with all aminites and awsome machines" },
      { name: { en: "Trainer", hi: "ट्रेनर" }, quote: "Best environments, friendly atmosphere with Rahul yadav." },
    ],
  },
  gallery: {
    title: { en: "Inside Bajrang Fitness", hi: "बजरंग फ़िटनेस के अंदर" },
    layout: "mosaic",
    photos: [
      { src: "/img/p4.jpg", alt: "Wide view of the 4,000 sq ft floor", wide: true },
      { src: "/img/p12.jpg", alt: "Hanuman poster on the gym wall" },
      { src: "/img/p11.jpg", alt: "Motivational word wall" },
      { src: "/img/p1.jpg", alt: "Machines on the main floor", wide: true },
      { src: "/img/p7.jpg", alt: "Strength area" },
      { src: "/img/p6.jpg", alt: "Bajrang Fitness Gym storefront" },
    ],
  },
  feature: {
    kind: "hosts",
    title: { en: "The owner is the draw", hi: "मालिक ही पहचान हैं" },
    body: { en: "Members mention the people before the machines.", hi: "मेंबर्स मशीनों से पहले लोगों की बात करते हैं।" },
    img: "/img/p12.jpg",
    hosts: [
      { name: "THE OWNER", quote: "The best part is the owner. He is a genuinely good and humble person, very friendly and supportive towards the members." },
      { name: "TRAINER & OWNER", quote: "This is a very good gym, it's the topper gym in this area. The trainer and owner here also support a lot, they are good." },
      { name: "RAHUL YADAV", quote: "Best environments, friendly atmosphere with Rahul yadav." },
    ],
  },
  reviews: {
    title: { en: "Manesar's pick, say members", hi: "मेंबर्स कहते हैं, मानेसर का बेस्ट" },
    rating: 4.8,
    dist: [80, 2, 1, 0, 3],
    quotes: [
      { quote: "If you are looking to join a gym, there is simply no better one than this. It is the best gym out there. ❤️🥰", stars: 5 },
      { quote: "Clean spacious and never overcrowded. The trainers actually pay attention to you. Highly recommend best gym in Manesar area.", stars: 5 },
      { quote: "All facilities available in zym Overall best experience. Good staff & trainer", stars: 5 },
      { quote: "Best gym in kho- kasan village.", stars: 5 },
    ],
  },
  visit: {
    title: { en: "Ghanta Ghar Chowk, Khoh", hi: "घंटा घर चौक, खोह" },
    img: "/img/p14.jpg",
    alt: "Outside Bajrang Fitness Gym",
    address: { en: "Ghanta Ghar Chowk, Khoh, IMT Manesar, Haryana", hi: "घंटा घर चौक, खोह, IMT मानेसर, हरियाणा" },
    note: { en: "Monday to Saturday, 5 to 11 am and 4 to 10 pm. Closed Sunday.", hi: "सोमवार से शनिवार, सुबह 5 से 11 और शाम 4 से 10। रविवार बंद।" },
  },
  story: [
    { kicker: { en: "Space", hi: "जगह" }, title: { en: "4,000 square feet.", hi: "4,000 स्क्वेयर फ़ीट।" }, quote: "certified trainers, top-quality machines, and a clean 4000 sq.ft. workout space" },
    { kicker: { en: "Attention", hi: "ध्यान" }, title: { en: "Trainers who pay attention.", hi: "ट्रेनर जो ध्यान देते हैं।" }, quote: "The trainers actually pay attention to you." },
    { kicker: { en: "People", hi: "लोग" }, title: { en: "A humble owner on the floor.", hi: "सरल स्वभाव वाले मालिक।" }, quote: "The best part is the owner. He is a genuinely good and humble person" },
  ],
  build: {
    title: { en: "Plan your first visit", hi: "अपनी पहली विज़िट प्लान करें" },
    body: { en: "Pick a goal and a time. It goes to WhatsApp exactly as you see it.", hi: "लक्ष्य और समय चुनें। मैसेज व्हाट्सऐप पर ठीक ऐसे ही जाएगा।" },
    pick: { label: { en: "Goal", hi: "लक्ष्य" }, options: [
      { name: { en: "Strength & muscle", hi: "ताक़त और मसल" } },
      { name: { en: "Weight loss", hi: "वज़न कम करना" } },
      { name: { en: "General fitness", hi: "जनरल फ़िटनेस" } },
      { name: { en: "Just starting out", hi: "अभी शुरुआत" } },
    ] },
    when: true,
    hello: { en: "Hi Bajrang Fitness Gym, I'd like to visit:", hi: "नमस्ते बजरंग फ़िटनेस जिम, मुझे विज़िट करनी है:" },
  },
  waHello: {
    en: "Hi Bajrang Fitness Gym, I'd like to know about joining. Goal: , batch (morning/evening): ",
    hi: "नमस्ते बजरंग फ़िटनेस जिम, मुझे जॉइन करने के बारे में जानना है। लक्ष्य: , बैच (सुबह/शाम): ",
  },
  order: ["dishes", "feature", "build", "reviews", "gallery", "visit"],
};
