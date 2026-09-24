export const brand = {
  name: 'Green Nest Farm',
  short: 'Honest food, family raised',
  tagline: 'Family owned since 2001',
};

export const contact = {
  instagram: { handle: '@greennestfarm', url: 'https://www.instagram.com/greennestfarm.pk/' },
  email: 'greennestfarm.pk@gmail.com',
  phoneLabel: '+923211016001',
  phoneHref: 'tel:+923211016001',
  whatsappLabel: 'Chat on WhatsApp',
  whatsappHref: 'https://wa.me/923211016001',
  address: 'Near Sundar Police Station, New Lahore City, Punjab, Pakistan',
  addressUrl: 'https://maps.app.goo.gl/qB1b73wMYeA5ATLt6',
};

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/products', label: 'Products' },
  { to: '/sacrifice', label: 'Arrange an Eid Sacrifice', cta: true },

];

export const stats = [
  { n: 25, suffix: '+', label: 'Years on this land' },
  { n: 400, suffix: '+', label: 'Desi hens, free-range' },
  { n: 1200, suffix: '+', label: 'Egg deliveries' },
  { n: 300, suffix: '+', label: 'Qurbani bookings arranged' },
];

export const homeRows = [
  {
    n: '01',
    title: 'Desi Eggs',
    text: 'From free-roaming desi hens fed on grain and greens, the deep-yellow yolk you remember from a grandmother\'s kitchen, nothing else.',
    to: '/products',
    cta: 'Explore',
  },
  {
    n: '02',
    title: 'Baby Chicks & Goats',
    text: 'Healthy, hand-raised chicks and goat kids, sold only when they are strong enough to thrive in your care.',
    to: '/products',
    cta: 'Explore',
  },
  {
    n: '03',
    title: 'Eid Sacrifice, Arranged',
    text: 'Choose your animal before Eid, we raise it, sacrifice it on your behalf on the day, and share the meat or distribute it, your choice.',
    to: '/sacrifice',
    cta: 'Book now',
  },
];

export const products = [
  {
    id: 'desi-eggs',
    eyebrow: '01 · Desi Eggs',
    title: 'Desi Eggs',
    body:
      'Our desi hens roam free on open ground and eat grain, greens and whatever they scratch up themselves. The result is an egg with a deep golden yolk, a firm white and a taste that supermarket eggs simply don\'t have. Collected every morning and delivered within a day. Never stored cold for weeks.',
    meta: 'Dozen · Tray of 30 · Monthly subscription',
    alt: 'Desi eggs photo placeholder',
    image: '/eggs.jpeg',
  },
  {
    id: 'baby-chicks',
    eyebrow: '02 · Baby Chicks',
    title: 'Baby Chicks',
    body:
      'We hatch and raise desi chicks by hand. Kept warm, fed on starter grain, and sold only from three weeks of age, once they are strong enough to thrive with you. Whether you want layers for your own backyard or a small flock for the kids, we\'ll tell you honestly which birds will suit you.',
    meta: 'From 3 weeks old · Minimum order of 5 · Care guide included',
    alt: 'Baby chicks photo placeholder',
    image: '/baby-chicks.jpeg',
  },
  {
    id: 'baby-goats',
    eyebrow: '03 · Baby Goats',
    title: 'Baby Goats',
    body:
      'Our goats graze on natural fodder. No injections, no force-feeding. So the kids grow at their own healthy pace. We sell gentle, well-fed kids suitable for milk lines, breeding or raising for Eid. Come meet them before you choose; we\'d rather you take the right animal than any animal.',
    meta: 'Weaned kids · Vet-checked · Visit before buying welcome',
    alt: 'Baby goats photo placeholder',
    image: '/baby-goats.png',
  },
];

export const qurbaniSteps = [
  { n: '01', title: 'Choose your animal', text: 'Goat, ram or share of a cow. Visit the farm to pick yours, or let us select the healthiest available and send you photos.' },
  { n: '02', title: 'We raise it until Eid', text: 'Your animal grazes on natural fodder and is health-checked weekly. You receive updates and photos the whole way.' },
  { n: '03', title: 'Sacrificed on the day, with dignity', text: 'On Eid day the sacrifice is carried out with proper Islamic care. You get photo and video proof of your animal only.' },
  { n: '04', title: 'Meat delivered or distributed', text: 'Take the full meat, or let us distribute a third (or all of it) to poor families in nearby villages. Your choice, done in your name.' },
];

export const qurbaniAnimalOptions = [
  'Goat (full)',
  'Ram / Bakra (full)',
  'Cow share (1/7)',
  'Cow (full)',
  'Not sure yet? Ask for advice.',
];

export const qurbaniPromises = [
  'Photo & video proof of your own animal only',
  'Health-checked and weighed before Eid',
  'Meat delivery in clean, chilled packing',
  'Charity distribution available in your name',
  'Bookings close 10 days before Eid ul-Adha',
];

export const principles = [
  { n: '01', title: 'Free-range, always', text: 'Our hens scratch on open ground and our goats graze on natural fodder. No cages, no growth injections, no force-feeding.' },
  { n: '02', title: 'Family hands only', text: 'Every egg is collected, cleaned and packed by the family. Nothing on this farm is outsourced or middle-manned.' },
  { n: '03', title: 'Honest weight, honest price', text: 'You pay for what the animal or the dozen actually weighs. We show you before you pay. No surprises, ever.' },
];
