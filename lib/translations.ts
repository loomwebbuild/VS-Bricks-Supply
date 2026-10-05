// Bilingual Translations (English and Telugu) for Karimnagar Red Bricks

export type Language = "en" | "te";

export interface TranslationSchema {
  langName: string;
  tagline: string;
  subTagline: string;
  getQuoteWA: string;
  callNow: string;
  startingAt: string;
  perBrick: string;
  priceDisclaimer: string;
  quickOrderText: string;
  benefits: {
    title: string;
    subtitle: string;
    noBreakage: string;
    noBreakageDesc: string;
    exactQuantity: string;
    exactQuantityDesc: string;
    consistentQuality: string;
    consistentQualityDesc: string;
    fairPricing: string;
    fairPricingDesc: string;
    reliableDelivery: string;
    reliableDeliveryDesc: string;
    bulkOrders: string;
    bulkOrdersDesc: string;
  };
  howItWorks: {
    title: string;
    subtitle: string;
    step1: string;
    step1Desc: string;
    step2: string;
    step2Desc: string;
    step3: string;
    step3Desc: string;
  };
  trust: {
    rate: string;
    zeroBreakage: string;
    exactCount: string;
    directSupply: string;
  };
  cta: {
    bannerTitle: string;
    bannerSubtitle: string;
    requestQuote: string;
    sendOnWhatsApp: string;
    callDirect: string;
    instantAssistance: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationSchema> = {
  en: {
    langName: "English",
    tagline: "Strong Red Bricks. Zero Breakage. Delivered on Time.",
    subTagline: "No compromise in quality and quantity. Kiln-fired red clay bricks supplied directly to construction sites in Karimnagar.",
    getQuoteWA: "Get a Quote on WhatsApp",
    callNow: "Call Now",
    startingAt: "Starting at",
    perBrick: "per brick",
    priceDisclaimer: "Final price depends on order quantity and delivery location.",
    quickOrderText: "Direct Delivery across Karimnagar & Surrounding Areas",
    
    // Core Benefits
    benefits: {
      title: "Why Builders & Engineers Trust Us",
      subtitle: "Engineered for structural stability, zero transit loss, and exact count verification.",
      noBreakage: "No Breakage Guarantee",
      noBreakageDesc: "Loaded, stacked, and transported with care to ensure intact delivery at your site with zero transit breakage loss.",
      exactQuantity: "Exact Quantity Guaranteed",
      exactQuantityDesc: "Strict tally counting before dispatch. You receive 100% of the bricks you pay for — zero shortage.",
      consistentQuality: "Consistent Quality & Strength",
      consistentQualityDesc: "Evenly kiln-fired red clay bricks offering uniform density, sharp edges, and high compressive strength.",
      fairPricing: "Transparent ₹9/Brick Pricing",
      fairPricingDesc: "Direct supplier pricing starting at ₹9/brick with no middlemen markups. Clear quotation based on location.",
      reliableDelivery: "Reliable Site Delivery",
      reliableDeliveryDesc: "Prompt tractor and truck dispatch scheduled to match your masonry timeline without stalling construction work.",
      bulkOrders: "Equipped for Bulk Supply",
      bulkOrdersDesc: "Capacity to fulfill large scale residential complexes, commercial builders, and individual home builds.",
    },

    // How it works
    howItWorks: {
      title: "How Ordering Works",
      subtitle: "Simple 3-step procurement from inquiry to site unloading.",
      step1: "1. Send Enquiry",
      step1Desc: "Share your required quantity, wall type, and delivery location via WhatsApp or phone call.",
      step2: "2. Confirm Quantity & Price",
      step2Desc: "Receive transparent pricing starting at ₹9/brick including freight details and dispatch schedule.",
      step3: "3. On-Time Delivery",
      step3Desc: "Bricks are carefully loaded and delivered to your site with zero breakage and exact tally verification.",
    },

    // Trust Strip
    trust: {
      rate: "Starting ₹9/Brick",
      zeroBreakage: "Zero Breakage Guarantee",
      exactCount: "Exact Quantity Verified",
      directSupply: "Direct Karimnagar Supply",
    },

    // Common CTAs
    cta: {
      bannerTitle: "Ready to Build with Stronger Red Bricks?",
      bannerSubtitle: "Get instant pricing for your construction site in Karimnagar. Call or WhatsApp our dispatch desk today.",
      requestQuote: "Request a Fast Quote",
      sendOnWhatsApp: "Send Estimate on WhatsApp",
      callDirect: "Call +91 96069 48371",
      instantAssistance: "Fast response on WhatsApp & Direct Call",
    }
  },
  te: {
    langName: "తెలుగు",
    tagline: "నాణ్యమైన ఎర్ర ఇటుకలు. పగుళ్లు లేని డెలివరీ. సరైన సమయంలో రవాణా.",
    subTagline: "నాణ్యత మరియు పరిమాణంలో రాజీ పడేది లేదు. కరీంనగర్ నిర్మాణ స్థలాలకు నేరుగా సరఫరా చేయబడే ఎర్ర ఇటుకలు.",
    getQuoteWA: "వాట్సాప్‌లో కొటేషన్ పొందండి",
    callNow: "ఇప్పుడే కాల్ చేయండి",
    startingAt: "ప్రారంభ ధర కేవలం",
    perBrick: "ఒక్కో ఇటుకకు",
    priceDisclaimer: "తుది ధర ఆర్డర్ పరిమాణం మరియు డెలివరీ స్థలాన్ని బట్టి మారుతుంది.",
    quickOrderText: "కరీంనగర్ మరియు పరిసర ప్రాంతాలలో నేరుగా డెలివరీ",
    
    // Core Benefits
    benefits: {
      title: "బిల్డర్లు మరియు ఇంజనీర్లు మమ్మల్ని ఎందుకు ఎంచుకుంటారు?",
      subtitle: "నిర్మాణ స్థిరత్వం, శూన్య పగుళ్లు మరియు ఖచ్చితమైన పరిమాణ హామీతో కూడిన ఇటుకలు.",
      noBreakage: "పగుళ్లు రాని హామీ (No Breakage)",
      noBreakageDesc: "రవాణాలో ఒక్క ఇటుక కూడా పాడవకుండా సురక్షితమైన ప్యాకింగ్ మరియు లోడింగ్.",
      exactQuantity: "ఖచ్చితమైన సంఖ్య హామీ (Exact Quantity)",
      exactQuantityDesc: "మీరు ఆర్డర్ చేసిన మొత్తం ఇటుకలు ఖచ్చితంగా లెక్కించి అందించబడతాయి. ఎలాంటి కొరత ఉండదు.",
      consistentQuality: "స్థిరమైన నాణ్యత మరియు బలం",
      consistentQualityDesc: "బాగా కాలిన ఎర్ర బంకమట్టి ఇటుకలు, సమానమైన ఆకృతి మరియు దృఢత్వం.",
      fairPricing: "పారదర్శకమైన ₹9 ధర",
      fairPricingDesc: "మధ్యవర్తులు లేకుండా ప్రారంభ ధర ₹9 నుండి నేరుగా ఇటుక బట్టీ ధరకే లభ్యం.",
      reliableDelivery: "సమయానికి సైట్ డెలివరీ",
      reliableDeliveryDesc: "మీ నిర్మాణ పనులు ఆగకుండా ట్రాక్టర్ మరియు లారీ ద్వారా త్వరితగతిన డెలివరీ.",
      bulkOrders: "భారీ ఆర్డర్ల సరఫరా సామర్థ్యం",
      bulkOrdersDesc: "ఇళ్ల నిర్మాణాలు, కాంపౌండ్ గోడలు మరియు భారీ కమర్షియల్ ప్రాజెక్ట్‌లకు తగిన సరఫరా.",
    },

    // How it works
    howItWorks: {
      title: "ఆర్డర్ ప్రక్రియ ఎలా ఉంటుంది?",
      subtitle: "విచారణ నుండి మీ సైట్‌కు డెలివరీ వరకు 3 సులభమైన దశలు.",
      step1: "1. విచారణ పంపండి",
      step1Desc: "మీకు అవసరమైన ఇటుకల సంఖ్య మరియు సైట్ లొకేషన్‌ను వాట్సాప్ లేదా కాల్ ద్వారా తెలియజేయండి.",
      step2: "2. పరిమాణం మరియు ధర నిర్ధారణ",
      step2Desc: "రవాణా ఖర్చులతో కలిపి పారదర్శకమైన కోట్ పొందండి.",
      step3: "3. సరైన సమయంలో డెలివరీ",
      step3Desc: "మీ సైట్ వద్ద సురక్షితంగా ఇటుకలను అన్‌లోడ్ చేసి లెక్క నిర్ధారించుకోండి.",
    },

    // Trust Strip
    trust: {
      rate: "ప్రారంభ ధర ₹9/ఇటుక",
      zeroBreakage: "పగుళ్లు లేని డెలివరీ",
      exactCount: "ఖచ్చితమైన పరిమాణం",
      directSupply: "కరీంనగర్ లోకల్ సరఫరా",
    },

    // Common CTAs
    cta: {
      bannerTitle: "దృఢమైన ఎర్ర ఇటుకలతో మీ ఇంటిని నిర్మించుకోండి",
      bannerSubtitle: "కరీంనగర్‌లో మీ నిర్మాణ సైట్ కోసం తక్షణ ధర మరియు డెలివరీ వివరాలను వాట్సాప్ ద్వారా తెలుసుకోండి.",
      requestQuote: "కోట్ అడగండి",
      sendOnWhatsApp: "వాట్సాప్‌లో వివరాలు పంపండి",
      callDirect: "కాల్ చేయండి: +91 96069 48371",
      instantAssistance: "వాట్సాప్ & కాల్‌లో తక్షణ సమాధానం",
    }
  }
};
