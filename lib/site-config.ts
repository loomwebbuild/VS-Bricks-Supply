// Site Configuration & Constants for Karimnagar Red Bricks / VS Bricks Supply

export const COMPANY = {
  name: "Karimnagar Red Bricks",
  brandName: "VS Bricks Supply",
  fullName: "VS Bricks Supply (Karimnagar Red Bricks)",
  established: "Est. 2023",
  certified: "Certified Construction Materials",
  tagline: "Strong Red Bricks. Zero Breakage. Delivered on Time.",
  subTagline: "Supply all over Telangana. Premium quality PVC, RBS, and VBS red clay bricks starting at ₹9/brick. Stronger walls, brighter futures.",
  location: "Karimnagar, Telangana, India",
  phoneDisplay: "+91 96069 48371",
  phoneRaw: "+919606948371",
  whatsappNumber: "919606948371",
  basePricePerBrick: 9,
  priceNote: "Starting at ₹9 per brick. Note: Final delivered price depends on order quantity and delivery location in Telangana.",
  
  slogans: {
    primary: "Stronger Walls | Brighter Futures",
    secondary: "Build Today | Last for Tomorrow",
    territory: "Supply in all over Telangana",
    certified: "Certified Construction Materials",
  },

  claims: [
    "No breakage",
    "No compromise in quality and quantity",
    "First Quality Bricks",
    "Strong & Durable for Construction",
    "Best Price in the Market"
  ],

  placeholders: {
    yearsInBusiness: "Established 2023",
    serviceAreas: "Karimnagar, Warangal, Hyderabad, Nizamabad, Jagtial, Peddapalli, Siricilla, Siddipet, Ramagundam, Mancherial & all Telangana",
    brickSize: "9\" x 4.25\" x 2.75\" (Standard Modular / Traditional)",
    brickGrade: "First Class Heavy-Duty Clay Brick",
    compressiveStrength: "Class 7.5 - 10 N/mm²",
    address: "Stockyard Depot, Karimnagar, Telangana 505001",
    email: "enquiry@karimnagarredbricks.com",
    gstNumber: "[GST_NUMBER]",
    businessHours: "Mon – Sat: 6:30 AM – 7:30 PM (Sunday Dispatch on Request)",
    minimumOrderQuantity: "1,500 Bricks (Tractor Load)",
    deliveryVehicleCapacity: "3,000 (Tractor) / 6,000+ (Truck Load)",
  },

  images: {
    logo: "/images/logo.png",
    hero: "/images/hero_red_bricks_1791214720109.jpg",
    delivery: "/images/bricks_delivery_truck_1791214733392.jpg",
    masonry: "/images/masonry_wall_construction_1791214747626.jpg",
    texture: "/images/brick_quality_texture_1791214759878.jpg",
    pvcBrick: "/images/pvc_red_brick_product_1791215727810.jpg",
    rbsBrick: "/images/rbs_red_brick_product_1791215741642.jpg",
    vbsBrick: "/images/vbs_red_brick_product_1791215753777.jpg",
  },

  products: [
    {
      id: "pvc",
      stampName: "PVC BRICK",
      badge: "Premium Quality Flagship",
      title: "PVC Red Bricks",
      tagline: "Strong · Durable · Cost Effective",
      price: "Starting at ₹9/Brick",
      image: "/images/pvc_red_brick_product_1791215727810.jpg",
      description: "Our flagship first-quality kiln-fired red brick stamped with the PVC hallmark. Uniform deep red body, sharp edges, and high density for load-bearing structures and villas.",
      specs: {
        stamp: "PVC",
        firing: "Uniform High-Temperature Kiln Fired",
        density: "High Compressive Load Resistance",
        idealFor: "Load-bearing exterior walls, multi-storey residential frames, villas",
      }
    },
    {
      id: "rbs",
      stampName: "RBS BRICK",
      badge: "First Quality Heavy Duty",
      title: "RBS Red Bricks",
      tagline: "Heavy Load Endurance · High Bond Strength",
      price: "Starting at ₹9/Brick",
      image: "/images/rbs_red_brick_product_1791215741642.jpg",
      description: "Heavy-duty structural red brick stamped with the RBS frog mark. Excellent bonding with cement mortar and resistance to moisture dampness.",
      specs: {
        stamp: "RBS",
        firing: "Even Thermal Kiln Fired",
        density: "Maximum Mortar Adhesion Surface",
        idealFor: "Structural 9\" walls, commercial complexes, boundary compound walls",
      }
    },
    {
      id: "vbs",
      stampName: "VBS BRICK",
      badge: "High Density Interlocking",
      title: "VBS Red Bricks",
      tagline: "Precision Edges · Zero Plaster Wastage",
      price: "Starting at ₹9/Brick",
      image: "/images/vbs_red_brick_product_1791215753777.jpg",
      description: "Precision-moulded red clay brick with the signature VBS stamp. True rectangular edges ensure straight, plumb masonry lines and reduce plaster mortar consumption.",
      specs: {
        stamp: "VBS",
        firing: "Controlled Density Kiln Fired",
        density: "Low Porosity, High Strength",
        idealFor: "Interior partition walls (4.5\"), compound walls, foundations",
      }
    }
  ]
} as const;

export function buildWhatsAppLink(customMessage?: string): string {
  const defaultText = `Hello VS Bricks Supply (Karimnagar Red Bricks), I would like to get a price quote for red bricks (PVC / RBS / VBS) starting at ₹9/brick in Telangana.`;
  const text = encodeURIComponent(customMessage || defaultText);
  return `https://wa.me/${COMPANY.whatsappNumber}?text=${text}`;
}

export const CALCULATOR_CONSTANTS = {
  BRICKS_PER_SQFT_HALF_BRICK_WALL_4_5_INCH: 4.6,
  BRICKS_PER_SQFT_FULL_BRICK_WALL_9_INCH: 9.2,
  SQMETERS_TO_SQFEET: 10.7639,
  DEFAULT_WASTAGE_PERCENT: 5,
  BASE_RATE_PER_BRICK: 9,
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home", labelTe: "హోమ్" },
  { href: "/products", label: "Products", labelTe: "ఉత్పత్తులు" },
  { href: "/calculator", label: "Brick Calculator", labelTe: "కాలిక్యులేటర్" },
  { href: "/why-choose-us", label: "Why Choose Us", labelTe: "ప్రత్యేకతలు" },
  { href: "/gallery", label: "Gallery", labelTe: "గ్యాలరీ" },
  { href: "/contact", label: "Contact", labelTe: "సంప్రదించండి" },
] as const;

export const FOOTER_LINKS = [
  { href: "/", label: "Home" },
  { href: "/products", label: "PVC & RBS Products" },
  { href: "/calculator", label: "Wall Brick Estimator" },
  { href: "/why-choose-us", label: "Zero Breakage Guarantee" },
  { href: "/gallery", label: "Stockyard Gallery" },
  { href: "/about", label: "Company Profile" },
  { href: "/faq", label: "Frequently Asked Questions" },
  { href: "/contact", label: "Contact & Site Dispatch" },
] as const;
