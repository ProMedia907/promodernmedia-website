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
  { label: "Reviews", href: "#reviews" },
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

export const about = {
  eyebrow: "Who you get",
  heading: "You deal with the person building it.",
  body: [
    "ProModernMedia is one designer, not an agency with a sales team out front and an offshore build team out back. The person who answers your first email is the person who designs the site, writes the copy, builds it and picks up the phone eighteen months later when you want the opening hours changed.",
    "That is deliberate. Most local businesses that have been burned by a web company were burned the same way: sold by someone impressive, built by someone anonymous, then handed to a support inbox. Nobody owned the outcome. Here there is only one person to hold responsible, which is uncomfortable for me and useful for you.",
  ],
  points: [
    {
      label: "No account managers",
      detail: "Your questions go to the person who can answer them.",
    },
    {
      label: "No lock-in",
      detail: "The site is yours. Leave whenever and it goes with you.",
    },
    {
      label: "No surprise invoices",
      detail: "The price quoted is the price paid, even if it takes longer.",
    },
  ],
};

/**
 * REVIEWS
 *
 * These are SAMPLE reviews used to lay out the section. They are not real
 * customers and must not be published as though they are -- fake reviews are
 * a banned practice under the UK Digital Markets, Competition and Consumers
 * Act 2024.
 *
 * To go live: replace this array with real reviews (Google Business Profile
 * is the easiest honest source) and set REVIEWS_ARE_SAMPLE to false. The
 * headline rating and count are COMPUTED from this array, so they can never
 * claim more than the reviews below actually support.
 */
export const REVIEWS_ARE_SAMPLE = true;

export type Review = {
  name: string;
  business: string;
  rating: 1 | 2 | 3 | 4 | 5;
  body: string;
};

export const reviews: Review[] = [
  // Mixed and strong reviews are interleaved so the first six shown are
  // representative rather than front-loaded with either.
  {
    name: "Dave Whitaker",
    business: "Whitaker Joinery, Leeds",
    rating: 5,
    body: "Our old site was from about 2010 and looked it. Two weeks after the new one went live we had more enquiries through the website than we had in the previous year. Worth every penny.",
  },
  {
    name: "Marie Donnelly",
    business: "Donnelly Dental Care, Belfast",
    rating: 5,
    body: "Patients tell us the site made them feel comfortable before they even walked in. That was exactly the brief and it was understood immediately.",
  },
  {
    name: "Tom Ashworth",
    business: "Ashworth Roofing, Stockport",
    rating: 5,
    body: "Straight talking, no jargon, no upselling. Told me what I needed and talked me out of two things I thought I wanted. Site has paid for itself several times over.",
  },
  {
    name: "Gareth Pryce",
    business: "Pryce Electrical, Cardiff",
    rating: 4,
    body: "Site is a big step up and the enquiries have picked up. Only gripe is I had to chase for the final training session, and I would have liked a bit more warning about how much content I needed to supply up front.",
  },
  {
    name: "Yasmin Haq",
    business: "Haq Family Law, Bradford",
    rating: 5,
    body: "Professional from start to finish. The copy in particular was better than anything I could have written about my own practice.",
  },
  {
    name: "Colin Frayne",
    business: "Frayne Landscaping, Exeter",
    rating: 5,
    body: "Booked solid through spring off the back of it. The gallery layout does the selling for me now, which is what I asked for.",
  },
  {
    name: "Aoife Brennan",
    business: "Brennan Physiotherapy, Glasgow",
    rating: 5,
    body: "Online bookings went from a handful a month to most of my diary. The phone rings far less, which sounds bad but is the whole point.",
  },
  {
    name: "Raj Chowdhury",
    business: "Spice Lane, Birmingham",
    rating: 5,
    body: "Fast, good looking and it works properly on a phone, which the old one did not. Takeaway orders are up and I am not paying a third party a cut of every one.",
  },
  {
    name: "Helen Marsh",
    business: "Marsh Veterinary, York",
    rating: 5,
    body: "Handled the whole switchover without us losing a day. Clients did not notice anything except that it suddenly looked good.",
  },
  {
    name: "Denise Okafor",
    business: "Okafor Accountancy, Luton",
    rating: 4,
    body: "Good work and a fair price. It took slightly longer than the week I was expecting, though that was partly my fault for being slow with the photos. Happy with where it ended up.",
  },
  {
    name: "Nathan Oyelaran",
    business: "Oyelaran Barbers, Croydon",
    rating: 5,
    body: "Simple, sharp, and the booking works. Exactly what I asked for and nothing I did not need.",
  },
  {
    name: "Fiona Kerr",
    business: "Kerr Interiors, Edinburgh",
    rating: 5,
    body: "The design is genuinely beautiful and it loads instantly. I have had other designers ask me who built it.",
  },
  {
    name: "Michael Trent",
    business: "Trent Auto Repairs, Coventry",
    rating: 5,
    body: "Was dreading the whole process and it turned out to be the easiest thing I did all year. Answers emails properly, which is rarer than it should be.",
  },
  {
    name: "Sadia Rahman",
    business: "Little Acorns Nursery, Reading",
    rating: 5,
    body: "Parents comment on it constantly. It made a small nursery look established and trustworthy, which filled our waiting list.",
  },
  {
    name: "Stuart Bell",
    business: "Bell Plumbing & Heating, Dundee",
    rating: 4,
    body: "Does what I needed and looks miles better than the old one. I am not very technical and found the editor a bit fiddly at first, but a phone call sorted it. Would use again.",
  },
  {
    name: "Peter Lindsay",
    business: "Lindsay Fencing, Carlisle",
    rating: 5,
    body: "Quote form brings in proper leads instead of time wasters, because it asks the right questions. That was his idea, not mine.",
  },
  {
    name: "Grace Adeyemi",
    business: "Adeyemi Bakery, Peckham",
    rating: 5,
    body: "Went live on the Friday and we had orders through it on the Saturday. Cannot ask for better than that.",
  },
  {
    name: "Ian Fletcher",
    business: "Fletcher Removals, Hull",
    rating: 5,
    body: "Honest pricing and no monthly fee I did not understand. Site has been up two years without a single problem.",
  },
  {
    name: "Priya Raman",
    business: "The Clay Room, Nottingham",
    rating: 4,
    body: "Really pleased with the design. I would have liked a couple more revision rounds included, but everything I asked for was done and it was done properly.",
  },
  {
    name: "Laura Whitfield",
    business: "Whitfield Optometry, Bath",
    rating: 5,
    body: "The before and after was night and day. Our old site actively put people off and I did not realise until I saw the replacement.",
  },
];

/** Computed, never hard-coded, so the headline cannot overstate the data. */
export const reviewSummary = {
  get count() {
    return reviews.length;
  },
  get average() {
    if (reviews.length === 0) return 0;
    const total = reviews.reduce((sum, r) => sum + r.rating, 0);
    return Math.round((total / reviews.length) * 10) / 10;
  },
};
