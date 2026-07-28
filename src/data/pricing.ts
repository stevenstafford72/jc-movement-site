import { IPricing } from "@/types";

export const tiers: IPricing[] = [
  {
    name: "KIPP Kirkpatrick Elem / KAN Middle Sign Ups and Registration.",
    price: "$50 Registration $25 Weekly",
    features: [
      "2026-2027 Enrollment Policies & Registration",
      "$50 Registration",
      "Enrollment & Registration Forms",
      "1000 Sevier Street, Nashville, TN.",
      "Before: 6:30 AM – 8:00 AM",
      "After: 3:30 PM – 5:45 PM",
    ],
    link: "https://forms.gle/zSHUy2T4twj4nRuP9",
    target: "_blank",
  },
  {
    name: "J.C. Movement Summer Camp 2026",
    price: "$50 Registration • $100 Weekly",
    features: [
      "Hosted at KIPP Kirkpatrick Elementary",
      "Registration Open: Now through Mid-June 2026",
      "Families must complete the Enrollment & Registration Forms using the program link provided.",
      "Space is limited and enrollment is accepted on a first-come, first-served basis.",
    ],
    ctaLabel: "Registration Open",
    location: {
      label: "1000 Sevier Street, Nashville, TN 37206",
      href: "https://www.google.com/maps/search/?api=1&query=1000+Sevier+Street+Nashville+TN+37206",
    },
    sections: [
      {
        title: "Camp Hours",
        items: [
          "Summer Camp Program: 8:30 AM – 4:00 PM",
          "Before Care: 6:30 AM – 8:30 AM",
          "After Care: 4:00 PM – 6:00 PM",
        ],
      },
      {
        title: "Program Cost",
        items: [
          "Registration Fee: $50 (one-time fee)",
          "Weekly Camp Tuition: $100 per student",
        ],
      },
      {
        title: "Optional Extended Care",
        items: ["Before Care / After Care: $25 per week"],
      },
      {
        title: "What Students Will Experience",
        items: [
          "Students will participate in a fun, safe, and engaging summer experience including:",
          "Academic Enrichment (Reading & Math)",
          "Sports & Recreation",
          "Creative Arts & Music",
          "Outdoor Activities",
          "Team Building & Leadership Development",
          "Weekly Themes & Special Activities",
        ],
      },
    ],
    link: "https://docs.google.com/forms/d/e/1FAIpQLSf0VRaNMPIWhpXV1gC0RYT5qeeyXBCsjxSvN4m-mouyi-skdg/viewform",
    target: "_blank",
  },
  {
    name: "Liberty Sign Up & Registration",
    price: "Free",
    features: [
      "2026-2027 Enrollment Policies & Registration",
      "Enrollment & Registration Forms",
      "3515 Gallatin Pike, Nashville, TN 37216",
      "Before: 6:30 AM – 8:00 AM",
      "After: 3:30 PM – 6:00 PM",
    ],
    link: "https://forms.gle/te81KWGhWaf2khwZ7",
    target: "_blank",
  },
];