export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: "cricket" | "football" | "basketball" | "badminton" | "volleyball" | "fitness" | "athletics";
  categoryDisplayName: string;
  badge: "Flagship" | "Tournament Grade" | "Bulk Best-Seller" | "Institutional Standard" | "Pro Match";
  shortDescription: string;
  fullDescription: string;
  specs: ProductSpec[];
  variants?: string[];
  suggestedBulkTier: string;
  image: string;
  gallery: string[];
  targetBuyer: string;
  featured: boolean;
}

export interface CategoryInfo {
  id: "cricket" | "football" | "basketball" | "badminton" | "volleyball" | "fitness" | "athletics";
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
  iconName: string;
  productCount: number;
}

export const CATEGORIES: CategoryInfo[] = [
  {
    id: "cricket",
    name: "Cricket",
    tagline: "Precision Crafted for Match Winning Performance",
    description: "Pro-grade English & Kashmir willow bats, hand-stitched leather balls, and protective gear engineered for clubs, academies, and tournaments.",
    heroImage: "https://images.unsplash.com/photo-1531415074868-036b107e775a?auto=format&fit=crop&w=1200&q=80",
    iconName: "Flame",
    productCount: 4,
  },
  {
    id: "football",
    name: "Football",
    tagline: "Engineered Aerodynamics & Institutional Durability",
    description: "FIFA-standard match footballs, high-impact training markers, and tournament goals built for schools, leagues, and professional clubs.",
    heroImage: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1200&q=80",
    iconName: "Shield",
    productCount: 3,
  },
  {
    id: "basketball",
    name: "Basketball",
    tagline: "Microfiber Composite Grip for Court Mastery",
    description: "Tournament composite leather basketballs, heavy-duty breakaway flex rims, and court accessories for educational institutions and sports complexes.",
    heroImage: "https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=1200&q=80",
    iconName: "Trophy",
    productCount: 3,
  },
  {
    id: "badminton",
    name: "Badminton",
    tagline: "Tournament Precision Shuttlecocks & High-Modulus Rackets",
    description: "Grade-A goose feather shuttles, high-tension isometric graphite rackets, and tournament posts for academies and coaching centres.",
    heroImage: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=1200&q=80",
    iconName: "Zap",
    productCount: 3,
  },
  {
    id: "volleyball",
    name: "Volleyball",
    tagline: "Microfiber Cushion Touch & True Flight Stability",
    description: "Laminated soft-touch match volleyballs, weather-resistant competition nets, and institutional court gear for universities and clubs.",
    heroImage: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=1200&q=80",
    iconName: "Activity",
    productCount: 2,
  },
  {
    id: "fitness",
    name: "Fitness & Strength",
    tagline: "Heavy-Duty Commercial Conditioning Equipment",
    description: "Solid urethane hex dumbbells, olympic bumper plates, and commercial-grade agility systems for institutional athletic training rooms.",
    heroImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    iconName: "Dumbbell",
    productCount: 3,
  },
  {
    id: "athletics",
    name: "Athletics & Training",
    tagline: "Precision Timing, Starting Blocks & Track Equipment",
    description: "World Athletics compliant starting blocks, anodized relay batons, agility hurdles, and field measurement gear for institutional sports meets.",
    heroImage: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80",
    iconName: "Timer",
    productCount: 2,
  },
];

export const PRODUCTS: Product[] = [
  // CRICKET
  {
    id: "pb-crk-01",
    slug: "probird-imperial-grade-1-english-willow-bat",
    name: "ProBird Imperial Grade 1+ English Willow Cricket Bat",
    category: "cricket",
    categoryDisplayName: "Cricket",
    badge: "Flagship",
    shortDescription: "Hand-selected pro-spec Grade 1+ English Willow with an exaggerated mid-to-low swell and feather-light balanced pick-up.",
    fullDescription: "Constructed from top 1% hand-selected English Willow clefts, the ProBird Imperial is engineered for power hitters and stroke-makers alike. Featuring massive 38-40mm edges, 60mm spine height, and natural grain straightness (8-12 uniform grains), it provides exceptional rebound velocity and institutional longevity.",
    specs: [
      { label: "Willow Grade", value: "Grade 1+ Hand-Selected English Willow" },
      { label: "Edge Thickness", value: "38mm - 40mm contoured edges" },
      { label: "Handle Type", value: "12-Piece Multi-Spring Sarawak Cane Handle" },
      { label: "Toe Protection", value: "Factory fitted rubberized toe guard" },
      { label: "Weight Range", value: "Short Handle (2lb 7oz to 2lb 10oz)" },
      { label: "Finish", value: "Natural pre-knocked with fiber face scuff sheet" }
    ],
    variants: ["2lb 7oz (Light)", "2lb 8oz (Medium)", "2lb 9oz (Standard)", "2lb 10oz (Heavy)"],
    suggestedBulkTier: "Minimum wholesale order: 5 units / 1 team pack",
    image: "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1531415074868-036b107e775a?auto=format&fit=crop&w=1000&q=80"
    ],
    targetBuyer: "Clubs, Academies & University Cricket Teams",
    featured: true,
  },
  {
    id: "pb-crk-02",
    slug: "probird-four-piece-club-match-leather-balls",
    name: "ProBird Four-Piece Alum-Tanned Club Match Leather Balls",
    category: "cricket",
    categoryDisplayName: "Cricket",
    badge: "Bulk Best-Seller",
    shortDescription: "Box of 12 hand-stitched four-piece alum-tanned leather balls with cork/rubber wound center, built for 50-over match durability.",
    fullDescription: "The ProBird Club Match Ball is engineered using premium alum-tanned steer hide, treated with water-resistant wax for consistent seam prominence and shape retention across 50 overs. Hand-stitched with 75-80 stitches per seam for true swing and predictable bounce on turf and matting pitches.",
    specs: [
      { label: "Construction", value: "4-Piece Hand-Stitched Leather" },
      { label: "Leather Type", value: "Top-Grain Alum-Tanned Cowhide" },
      { label: "Core", value: "Compressed 5-layer cork and pure wool center" },
      { label: "Weight", value: "Standard Senior 5.5 oz (156g)" },
      { label: "Packaging", value: "Institutional wholesale master box of 12 balls" }
    ],
    variants: ["Traditional Crimson Red", "Day-Night Pure White", "Tournament High-Vis Pink"],
    suggestedBulkTier: "Master boxes of 12 balls (Minimum order 5 boxes / 60 balls)",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1531415074868-036b107e775a?auto=format&fit=crop&w=1000&q=80"
    ],
    targetBuyer: "Leagues, Tournament Organizers & Cricket Academies",
    featured: true,
  },
  {
    id: "pb-crk-03",
    slug: "probird-pro-guard-batting-pads-gloves-kit",
    name: "ProBird Pro-Guard HD Batting Legguards & Gloves Kit",
    category: "cricket",
    categoryDisplayName: "Cricket",
    badge: "Tournament Grade",
    shortDescription: "High-density molded plastazote foam pads with traditional cane rods paired with multi-flex pittard leather palms.",
    fullDescription: "Designed for elite protection against bowling speeds up to 145 km/h. Legguards feature ultra-lightweight composite cane ribs combined with dual-density foam shin bolsters and ergonomic gel knee cups. Accompanying gloves use genuine Pittard sheep leather palms with three-piece articulated split fingers for supreme tactile bat control.",
    specs: [
      { label: "Pad Impact Shield", value: "High-Density Foam + 7-Cane Construction" },
      { label: "Knee Bolster", value: "Ergonomic 3-piece contoured gel-lined socket" },
      { label: "Glove Palm", value: "Premium Pittards World-Class Leather" },
      { label: "Thumb Protection", value: "2-piece angled fiber-shield reinforcement" },
      { label: "Sizing Available", value: "Mens Senior, Youth, Boys" }
    ],
    variants: ["Right Hand (Senior)", "Left Hand (Senior)", "Youth Academy Size"],
    suggestedBulkTier: "Wholesale kits: 10 sets (Academy Bundle)",
    image: "https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?auto=format&fit=crop&w=1000&q=80"
    ],
    targetBuyer: "Sports Academies, School Teams & Institutional Buyers",
    featured: false,
  },

  // FOOTBALL
  {
    id: "pb-ftb-01",
    slug: "probird-aerostrike-pro-match-football",
    name: "ProBird AeroStrike Pro Match Football (Size 5)",
    category: "football",
    categoryDisplayName: "Football",
    badge: "Flagship",
    shortDescription: "FIFA Quality Pro standard thermally bonded 14-panel seamless PU match ball with micro-textured aerodynamic outer casing.",
    fullDescription: "Engineered for elite competition, the ProBird AeroStrike eliminates water absorption with its precision thermally fused panel joints. The high-performance polyurethane outer shell features microscopic surface dimpling to optimize laminar boundary layer airflow, delivering dead-straight ball flight and consistent trajectory off the boot.",
    specs: [
      { label: "Standard", value: "FIFA Quality Pro Equivalent Standards" },
      { label: "Panel Architecture", value: "14-Panel Thermally Bonded Seamless" },
      { label: "Outer Material", value: "Micro-Textured High-Abrasion 1.2mm PU" },
      { label: "Bladder", value: "Balanced Zero-Wing Natural Butyl Chamber" },
      { label: "Size & Weight", value: "Official Size 5 (420g - 445g)" },
      { label: "Pressure Retention", value: "Under 10% pressure loss over 72 hours" }
    ],
    variants: ["Size 5 (Senior Match)", "Size 4 (Junior Academy)", "Size 3 (Youth Grassroots)"],
    suggestedBulkTier: "Minimum order: 20 balls (Club Training Pack)",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=1000&q=80"
    ],
    targetBuyer: "Colleges, Football Clubs & Tournament Leagues",
    featured: true,
  },
  {
    id: "pb-ftb-02",
    slug: "probird-institutional-agility-training-grid-pack",
    name: "ProBird Institutional Agility Grid & Marker Cone System",
    category: "football",
    categoryDisplayName: "Football",
    badge: "Institutional Standard",
    shortDescription: "Master training bundle: 50 shatter-proof flexible saucer cones, 6-meter quick-unroll speed ladder, and 6 agility training hurdles.",
    fullDescription: "Built specifically to withstand heavy daily team drills in all weather conditions. The saucer cones are manufactured from virgin high-density polyethylene that bounces back immediately when stepped on. The 6-meter adjustable nylon rung ladder and powder-coated lightweight hurdles pack into an all-weather carry duffel.",
    specs: [
      { label: "Cone Quantity", value: "50 Cones (5 High-Visibility Colors x 10)" },
      { label: "Speed Ladder", value: "6 Meters (12 Heavy-Duty Adjustable Flat Rungs)" },
      { label: "Agility Hurdles", value: "6 Spring-Flex Step Hurdles (9\" and 12\" options)" },
      { label: "Material", value: "UV-Stabilized Anti-Crack Polymer" },
      { label: "Included", value: "Heavy-duty 600D ballistic nylon carry bag" }
    ],
    variants: ["Standard Coaching Bundle", "Heavy-Duty Academy Double Pack"],
    suggestedBulkTier: "Wholesale bundles for schools & athletic departments (5+ sets)",
    image: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=1000&q=80"
    ],
    targetBuyer: "Physical Education Departments & Multi-Sport Academies",
    featured: false,
  },

  // BASKETBALL
  {
    id: "pb-bsk-01",
    slug: "probird-vanguard-composite-match-basketball",
    name: "ProBird Vanguard Microfiber Composite Match Basketball (Size 7)",
    category: "basketball",
    categoryDisplayName: "Basketball",
    badge: "Flagship",
    shortDescription: "FIBA-standard indoor/outdoor composite leather basketball featuring deep pebbled channels and moisture-wicking surface grip.",
    fullDescription: "Engineered for pinpoint perimeter shooting and tactile handling, the ProBird Vanguard combines premium Japanese microfiber composite leather with a dual-cushion foam core. The recessed channel design provides superior finger placement, while the non-slip coating absorbs court sweat for confident grip in competitive match situations.",
    specs: [
      { label: "Classification", value: "FIBA Tournament Specifications Approved" },
      { label: "Cover Material", value: "Advanced Microfiber Composite Leather" },
      { label: "Cushioning", value: "Cushion-Core Sponge Rubber Enclosure" },
      { label: "Channel Width", value: "Deep Pebble Channel System (Black Inset)" },
      { label: "Playing Surface", value: "Indoor Hardwood & Outdoor Polyurethane Courts" },
      { label: "Size", value: "Official Men's Size 7 (29.5 inch circumference)" }
    ],
    variants: ["Size 7 (Men's Senior)", "Size 6 (Women's / Intermediate)", "Size 5 (Junior Development)"],
    suggestedBulkTier: "Wholesale Team Sets of 12 or 24 balls with ball cart options",
    image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=1000&q=80"
    ],
    targetBuyer: "Universities, High Schools & Basketball Training Centers",
    featured: true,
  },
  {
    id: "pb-bsk-02",
    slug: "probird-commercial-flex-breakaway-basketball-rim",
    name: "ProBird Commercial Spring-Loaded Flex Breakaway Rim & Net",
    category: "basketball",
    categoryDisplayName: "Basketball",
    badge: "Tournament Grade",
    shortDescription: "Heavy-gauge solid steel breakaway goal with internal spring-return shock mechanism and zinc-plated anti-whip chain net.",
    fullDescription: "Constructed to absorb high-impact slam dunks and aggressive institutional gameplay without transferring stress into glass backboards. Features an enclosed dual-spring return calibrated to withstand 180 lbs of downward force before smooth release. Powder-coated in tournament blaze orange with universal 5x5\" and 5x4\" mounting hole configurations.",
    specs: [
      { label: "Ring Diameter", value: "Official 18\" (45.7 cm) Solid Steel Rim" },
      { label: "Steel Gauge", value: "5/8\" (16mm) Solid Cold-Rolled Carbon Steel" },
      { label: "Breakaway Force", value: "Factory calibrated at 180 lbs deflection" },
      { label: "Finish", value: "Electrostatic UV-resistant powder coat" },
      { label: "Net Included", value: "12-loop braided weather-resistant nylon net" }
    ],
    variants: ["Institutional Dual-Spring (Standard)", "Heavy-Duty Court Upgrade (Chain Net)"],
    suggestedBulkTier: "Gymnasium replacements: 2-8 units per order",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1000&q=80"
    ],
    targetBuyer: "Campus Facilities, Sports Complexes & Parks Departments",
    featured: false,
  },

  // BADMINTON
  {
    id: "pb-bad-01",
    slug: "probird-aerospeed-100-goose-feather-shuttlecocks",
    name: "ProBird AeroSpeed 100 Tournament Goose Feather Shuttlecocks",
    category: "badminton",
    categoryDisplayName: "Badminton",
    badge: "Flagship",
    shortDescription: "Tube of 12 BWF-standard Grade A goose feather shuttles with solid Portuguese sandwich natural cork base for pinpoint trajectory.",
    fullDescription: "Selected by competitive coaches and tournament directors for supreme flight stability and durability across long, high-speed smashes. Every feather is tested for uniform curvature, stem thickness, and weight balance, yielding unmatched speed accuracy and resistance to feather feathering during intense match play.",
    specs: [
      { label: "Feather Grade", value: "100% Grade A Selected White Goose Feathers" },
      { label: "Cork Base", value: "Natural Solid Portuguese 3-Layer Composite Cork" },
      { label: "Speed Rating", value: "Speed 77 (22°C - 28°C ambient tournament play)" },
      { label: "Flight Stability", value: "A+ Trajectory Precision under high smash load" },
      { label: "Packaging", value: "Durable moisture-lock foil tube of 12 shuttles" }
    ],
    variants: ["Speed 77 (Warm / Standard)", "Speed 76 (Hot / High Altitude)", "Speed 78 (Cool Indoor)"],
    suggestedBulkTier: "Master cartons of 50 tubes (600 shuttles)",
    image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=1000&q=80"
    ],
    targetBuyer: "Badminton Coaching Centers, Clubs & State Tournaments",
    featured: true,
  },
  {
    id: "pb-bad-02",
    slug: "probird-carbonpro-88-tournament-badminton-rackets",
    name: "ProBird CarbonPro 88 High-Modulus Graphite Racket (Pack of 4)",
    category: "badminton",
    categoryDisplayName: "Badminton",
    badge: "Tournament Grade",
    shortDescription: "4U G5 high-modulus Toray carbon fiber frame with isometric head and reinforced T-joint, pre-strung at 28 lbs tension.",
    fullDescription: "Designed for academy training squads and competitive collegiate athletes. The isometric head expands the effective sweet spot by 32%, ensuring forgiving placement even on off-center defensive returns. Features an ultra-slim 6.8mm aerodynamic shaft that accelerates swing speed through the air.",
    specs: [
      { label: "Frame Material", value: "40T High-Modulus Japanese Toray Carbon Fiber" },
      { label: "Weight / Grip", value: "4U (82g ± 2g) / G5 Slim Ergonomic Grip" },
      { label: "Balance Point", value: "295mm (Head-Heavy Attack Profile)" },
      { label: "Shaft Flexibility", value: "Medium-Stiff with Nanomesh Resin" },
      { label: "String Tension", value: "Pre-strung at 28 lbs (Supports up to 32 lbs)" }
    ],
    variants: ["Matte Stealth Black & Red", "Tournament White & Crimson"],
    suggestedBulkTier: "Institutional packs of 8, 16, or 24 rackets",
    image: "https://images.unsplash.com/photo-1613918431703-aa863c3d5e23?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1613918431703-aa863c3d5e23?auto=format&fit=crop&w=1000&q=80"
    ],
    targetBuyer: "School Physical Ed, Coaching Academies & Sports Retailers",
    featured: false,
  },

  // VOLLEYBALL
  {
    id: "pb-vol-01",
    slug: "probird-vortex-touch-laminated-match-volleyball",
    name: "ProBird Vortex Touch Laminated Match Volleyball",
    category: "volleyball",
    categoryDisplayName: "Volleyball",
    badge: "Tournament Grade",
    shortDescription: "FIVB-spec 18-panel dimpled microfiber composite cover with soft-touch cushioning and aerodynamic spin stabilization.",
    fullDescription: "Constructed with an advanced dimpled micro-cell composite surface that increases aerodynamic air resistance, stabilizing flight turbulence during high-velocity serves. The soft sponge-foam backing shields players' forearms during digs and blocks while maintaining a crisp, responsive feel off setter hands.",
    specs: [
      { label: "Specification", value: "FIVB Competition Standard Compliant" },
      { label: "Cover Architecture", value: "18-Panel Precision Laminated Microfiber" },
      { label: "Surface Texture", value: "Dimpled Aerodynamic Anti-Slip Finish" },
      { label: "Bladder", value: "Enclosed Wound Butyl Bladder" },
      { label: "Weight & Size", value: "Official Size 5 (260g - 280g)" }
    ],
    variants: ["Official Tri-Color (Red/White/Blue)", "High-Vis Crimson & White"],
    suggestedBulkTier: "Wholesale sets: 10 or 20 balls with heavy-duty mesh carry bag",
    image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=1000&q=80"
    ],
    targetBuyer: "Collegiate Athletic Programs, Volleyball Clubs & Arenas",
    featured: true,
  },

  // FITNESS & GYM
  {
    id: "pb-fit-01",
    slug: "probird-commercial-urethane-hex-dumbbell-set",
    name: "ProBird Commercial Heavy-Duty Urethane Hex Dumbbell Rack Set",
    category: "fitness",
    categoryDisplayName: "Fitness & Strength",
    badge: "Bulk Best-Seller",
    shortDescription: "Cast-iron core dumbbells with shock-absorbent non-marking urethane coating and hard-chrome knurled anti-slip handles.",
    fullDescription: "Manufactured for heavy institutional gym usage, eliminating odor, cracking, and surface scratching typical of cheap rubber. The anti-roll hex geometry keeps dumbbells secure on racks and floors, while the precision press-fit and welded steel handles guarantee heads will never detach under repeat impact drops.",
    specs: [
      { label: "Weight Range", value: "Pairs from 5kg to 30kg (2.5kg increments)" },
      { label: "Core Metal", value: "Single-Piece Solid Cast Iron" },
      { label: "Coating", value: "Commercial High-Density Polyurethane (Odorless)" },
      { label: "Handle Finish", value: "Hard Chrome with Ergonomic Diamond Knurling" },
      { label: "Rack Included", value: "Heavy-gauge 3-tier commercial powder-coated saddle rack" }
    ],
    variants: ["Complete 5kg - 30kg Set + Rack", "Custom Weight Selection (Pairs)"],
    suggestedBulkTier: "Complete gym outfit packages or club sets",
    image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80"
    ],
    targetBuyer: "Institutional Gyms, Academy Conditioning Centers & Corporates",
    featured: true,
  },
  {
    id: "pb-fit-02",
    slug: "probird-olympic-dead-bounce-bumper-plates",
    name: "ProBird IWF-Standard Dead-Bounce Olympic Bumper Plates",
    category: "fitness",
    categoryDisplayName: "Fitness & Strength",
    badge: "Tournament Grade",
    shortDescription: "100% virgin rubber Olympic 450mm diameter plates with precision stainless steel center inserts and minimal bounce recoil.",
    fullDescription: "Engineered to withstand thousands of drops from overhead barbell locks. Each plate maintains exact IWF uniform 450mm outer diameter with calibrated weight tolerance within ±0.5%. The stainless steel collar insert is molded directly into the virgin rubber core for zero plate wobble.",
    specs: [
      { label: "Standard", value: "IWF Standard 450mm Outer Diameter" },
      { label: "Collar Opening", value: "50.4mm Precision Steel Ring" },
      { label: "Rubber Composition", value: "100% High-Density Virgin Rubber (Shore Durometer 88)" },
      { label: "Bounce Character", value: "Sub-2 inch low-dead bounce on gym platforms" },
      { label: "Weights", value: "5kg, 10kg, 15kg, 20kg, 25kg color-coded markings" }
    ],
    variants: ["150kg Full Competition Set", "Individual Pairs by Weight"],
    suggestedBulkTier: "Wholesale facility weight suites (300kg - 1000kg)",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80"
    ],
    targetBuyer: "Strength & Conditioning Facilities & Cross-Training Boxes",
    featured: false,
  },

  // ATHLETICS
  {
    id: "pb-ath-01",
    slug: "probird-competition-starting-blocks-aluminum",
    name: "ProBird Precision World-Standard Aluminum Starting Blocks",
    category: "athletics",
    categoryDisplayName: "Athletics",
    badge: "Tournament Grade",
    shortDescription: "Heavy-duty extruded aluminum rail with 5-angle adjustable rubberized foot pedals for synthetic track sprint competitions.",
    fullDescription: "Trusted for state athletics championships and collegiate track meets. Features a thick, rigid one-piece cast center spine with integrated metric millimeter positioning scale. The high-traction textured rubber footplates lock firmly into 5 distinct forward launch angles (45° to 75°) to suit every sprinter's explosive launch stride.",
    specs: [
      { label: "Rail Material", value: "Heavy-Gauge Ribbed Extruded Aluminum Alloy" },
      { label: "Pedal Adjustments", value: "5 Distinct Angles (45°, 55°, 65°, 70°, 75°)" },
      { label: "Spike Anchor", value: "Included 12 steel track ground anchor spikes" },
      { label: "Track Compatibility", value: "Tartan, Polyurethane, and Cinder Tracks" },
      { label: "Compliance", value: "World Athletics Technical Rule Standards" }
    ],
    variants: ["Track & Field Standard (Senior)", "Training Multi-Surface Pedal Set"],
    suggestedBulkTier: "Institutional sets of 6 or 8 lanes for running tracks",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1000&q=80"
    ],
    targetBuyer: "Stadium Authorities, University Athletics & Schools",
    featured: false,
  },
  {
    id: "pb-ath-02",
    slug: "probird-anodized-aluminum-relay-batons-pack",
    name: "ProBird World Athletics Anodized Aluminum Relay Batons (Set of 8)",
    category: "athletics",
    categoryDisplayName: "Athletics",
    badge: "Institutional Standard",
    shortDescription: "Set of 8 championship anodized aluminum sprint batons with rolled safety edges and non-slip sandblasted surface.",
    fullDescription: "Precision manufactured to World Athletics official specifications: 38mm outer diameter, 298mm length, and uniform 50g mass. The edges are rolled inward to prevent finger cuts and hand abrasions during high-speed blind handovers in 4x100m and 4x400m relays. Electrolytically anodized for vivid scratch-proof visibility.",
    specs: [
      { label: "Quantity", value: "Set of 8 Distinct Vivid Colors (Red, Gold, Blue, Green, etc.)" },
      { label: "Dimensions", value: "Length: 298mm | Diameter: 38mm" },
      { label: "Weight", value: "Official 50g ± 1g uniform mass" },
      { label: "Safety", value: "Inner-rolled non-burr safety hems on both ends" },
      { label: "Certification", value: "World Athletics Junior & Senior Competition Compliant" }
    ],
    variants: ["Official 8-Color Championship Pack", "Junior 28mm Diameter Pack"],
    suggestedBulkTier: "Master boxes of 5 sets (40 batons for athletic meets)",
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1000&q=80"
    ],
    targetBuyer: "Track & Field Meets, School Sports Councils & Training Academies",
    featured: false,
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return PRODUCTS;
  return PRODUCTS.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter((p) => p.featured);
}
