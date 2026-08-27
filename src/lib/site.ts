export const site = {
  name: "ProModernMedia",
  tagline: "Websites that turn local searches into paying customers.",
  email: "ProMedia04@outlook.com",
  phone: "+44 7500 437490",
  /** Same number, formatted for tel: links. */
  phoneHref: "+447500437490",
  location: "United Kingdom",
};

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Process", href: "#process" },
];

/**
 * Every figure here is attributable. If you change one, change its source
 * with it -- unsourced statistics on a commercial site are a liability.
 */
export const stats = [
  {
    figure: "75%",
    label: "judge your credibility on design alone",
    note: "Three in four people admit they decide whether a business is trustworthy from the look of its website.",
    source: "Stanford Web Credibility Project",
    href: "https://credibility.stanford.edu/",
  },
  {
    figure: "53%",
    label: "leave if a page takes over 3 seconds",
    note: "Over half of mobile visits are abandoned before the page has finished loading. They never see your phone number.",
    source: "Google, The need for mobile speed",
    href: "https://blog.google/products/admanager/the-need-for-mobile-speed/",
  },
  {
    figure: "76%",
    label: "of nearby searches end in a visit that day",
    note: "People searching for a business near them act fast. The only question is whose door they walk through.",
    source: "Think with Google",
    href: "https://www.thinkwithgoogle.com/intl/en-emea/marketing-strategies/app-and-mobile/mobile-world/",
  },
  {
    figure: "50ms",
    label: "to form an opinion of your design",
    note: "Visual judgement is made in a twentieth of a second, and it colours everything read afterwards.",
    source: "Lindgaard et al., 2006",
    href: "https://www.tandfonline.com/doi/abs/10.1080/01449290500330448",
  },
];

export const services = [
  {
    title: "Website design & build",
    body: "A site built around one job: turning the people who find you into people who contact you. Designed, written and built from scratch, not dragged out of a template.",
    points: ["Bespoke design", "Copy that sells", "Built to load fast"],
  },
  {
    title: "Redesigns & rescues",
    body: "You already have a site. It is costing you work. I rebuild it without losing the search rankings and reputation you have spent years earning.",
    points: ["Keeps your rankings", "Zero downtime switch", "Migration handled"],
  },
  {
    title: "Local SEO foundations",
    body: "Being findable is half the job. Clean structure, proper metadata, real page speed and a Google Business Profile that actually points somewhere worth landing.",
    points: ["Technical SEO", "Google Business setup", "Speed tuned"],
  },
  {
    title: "Care & hosting",
    body: "Hosting, backups, updates, security and a real person to call. Your site stays fast and online while you get on with running the business.",
    points: ["Managed hosting", "Content edits", "Same-day support"],
  },
];

export type WorkKind =
  | "trades"
  | "hospitality"
  | "clinic"
  | "professional"
  | "fitness";

/**
 * Demonstration builds, not client projects. `focus` describes what each
 * design is built to do -- deliberately NOT a performance claim, since
 * inventing client results would be false advertising. Replace these with
 * real case studies (and real numbers) as work lands.
 */
export const work: {
  name: string;
  sector: string;
  focus: string;
  accent: string;
  kind: WorkKind;
}[] = [
  {
    name: "Northgate Joinery",
    sector: "Carpentry / Leeds",
    focus: "Finished work up top, quote form never more than one tap away",
    accent: "#FF4D1C",
    kind: "trades",
  },
  {
    name: "The Alder Room",
    sector: "Restaurant / Manchester",
    focus: "Menu and booking above the fold, no PDF downloads anywhere",
    accent: "#C9F24D",
    kind: "hospitality",
  },
  {
    name: "Vale Dental",
    sector: "Dental practice / Bristol",
    focus: "Treatment prices stated plainly, nervous-patient copy up front",
    accent: "#4DA6FF",
    kind: "clinic",
  },
  {
    name: "Harper & Vine",
    sector: "Law firm / Birmingham",
    focus: "Built for credibility: clear fees, real people, no stock photos",
    accent: "#B77DFF",
    kind: "professional",
  },
  {
    name: "Cobalt Fitness",
    sector: "Gym / Sheffield",
    focus: "Timetable and join flow that survives being used on a phone",
    accent: "#FFC53D",
    kind: "fitness",
  },
  {
    name: "Meadow Veterinary",
    sector: "Veterinary / York",
    focus: "Emergency number pinned, routine bookings handled without a call",
    accent: "#3DE0C0",
    kind: "clinic",
  },
];

export type Tier = {
  id: string;
  name: string;
  price: string;
  cadence: string;
  /** Second price component, for plans with an upfront fee and a monthly. */
  then?: { price: string; cadence: string };
  summary: string;
  features: string[];
  cta: string;
  featured?: boolean;
  footnote?: string;
};

export const tiers: Tier[] = [
  {
    id: "build-care",
    name: "Build + Care Plan",
    price: "£750",
    cadence: "one-off build",
    then: { price: "£249", cadence: "per month, rolling" },
    summary:
      "Your site designed, built and launched, then hosted and looked after every month. One package, so it never falls into disrepair the week after it goes live.",
    features: [
      "Up to 5 bespoke pages",
      "Written copy included",
      "Google Business Profile setup",
      "Managed hosting and domain",
      "Unlimited content edits",
      "Daily backups and security",
      "Monthly performance report",
      "Same-day support",
    ],
    cta: "Start a build",
    featured: true,
    footnote:
      "Rolling monthly. Cancel with a month of notice and the site comes with you.",
  },
  {
    id: "outright",
    name: "Own It Outright",
    price: "£5,000",
    cadence: "one-time, paid in full",
    summary:
      "The full custom build with everything included, paid once, with no monthly line on your books ever.",
    features: [
      "Unlimited pages, fully bespoke",
      "Advanced build: booking, e-commerce, portals",
      "Full local SEO programme",
      "12 months hosting and support included",
      "Priority turnaround",
      "No recurring cost after year one",
    ],
    cta: "Own it outright",
    footnote: "Works out cheaper than Build + Care Plan from month 18 onward.",
  },
];

export const breakEven = {
  setup: 750,
  monthly: 249,
  outright: 5000,
  headline: "So which one is actually cheaper?",
  body:
    "Build + Care Plan runs to £750 up front and £249 a month. Own It Outright is £5,000, once. The two lines cross just past month seventeen, so if you expect to still be trading in two years, outright is the cheaper decision. Drag the slider to see it.",
};

export const process = [
  {
    step: "01",
    title: "A proper conversation",
    body: "Thirty minutes on what your business actually needs, who you are trying to reach, and what your current site is failing to do. No pitch deck.",
  },
  {
    step: "02",
    title: "Design you sign off",
    body: "You see the real design before a line of code is written. We adjust it until you would happily hand the address to your best customer.",
  },
  {
    step: "03",
    title: "Built and tested",
    body: "Built properly, checked on real phones, tuned for speed and accessibility. Nothing goes live half finished.",
  },
  {
    step: "04",
    title: "Live, and looked after",
    body: "Live, transferred, and the training to run it yourself. Or leave it on the Care Plan and never think about it again.",
  },
];

export const faqs = [
  {
    q: "How long does a website take?",
    a: "Most builds are live inside a week from the day the design is signed off. Bigger outright builds with booking systems or an online shop take longer, and I will tell you exactly how long before you commit. The main variable is how quickly you get me your content and feedback.",
  },
  {
    q: "Will I lose my Google rankings?",
    a: "No. Redirects, structure and metadata are migrated deliberately as part of the build. Rankings usually improve, because the new site is faster and better organised than the one it replaced.",
  },
  {
    q: "Do I actually own the website?",
    a: "Yes, on both options. On Build + Care Plan the site is hosted and maintained by me, but it is still yours and it goes with you if you ever leave. Own It Outright hands over the files and accounts at launch.",
  },
  {
    q: "Can I edit it myself?",
    a: "Yes. Every build comes with a simple editor for text and images, and a walkthrough. On the Care Plan you can also just email the change over and it is done the same day.",
  },
  {
    q: "What if I already have a website?",
    a: "That is most of the work I do. Your existing site stays live and untouched until the new one is ready, then it switches over in a few minutes with no downtime.",
  },
  {
    q: "Is there a contract on the monthly plan?",
    a: "No. The Care Plan runs rolling month to month. Give a month of notice whenever you like and the site is transferred to you.",
  },
];
