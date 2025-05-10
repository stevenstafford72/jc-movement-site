import {
    FiBarChart2,
    FiLock,
    FiShield,
    FiTarget,
    FiTrendingUp,
    FiUser,
    FiUsers,
    FiGift,
} from "react-icons/fi";
import { FaHandsHelping } from "react-icons/fa";

import { IBenefit } from "@/types";

export const benefits: IBenefit[] = [
    {
        title: "Overview",
        description: "Empowering lives through Christ—meeting people where they are, guiding them to purpose, growth, and a higher way of living through faith, love, and education.",
        bullets: [
            {
                title: "Mission",
                description: "Coming together as one as the body of Christ to push His (Jesus Christ) mission of going to teach, help, save, and spread his love. We will achieve this mission by reaching individuals exactly where they are at in their journey of life.",
                icon: <FiBarChart2 size={26} />
            },
            {
                title: "Vision",
                description: "The Vision is that every person uses their gift and talents in a positive way to spread and help the world by uplifting other individual’s spirits through inspiration/motivation, education, films, music, art which are gifts and talents that are discovered and can be used. Jesus Christ is the driving force behind the mission and brand.",
                icon: <FiTarget size={26} />
            },
            {
                title: "Who We Are",
                description: "J.C. Movement, Inc. is a 501c3 Non-Profit organized for religious, charitable, educational & scientific purposes. We offer a variety of youth programs which are defined as movements to help meet our mission & vision of going beyond the walls to pour into people and relate to them in a real way while pushing them into purpose as we move through inspiration, education, films, music, and art.",
                icon: <FiTrendingUp size={26} />
            }
        ],
        imageSrc: "/images/jc-movemock.webp"
    },
    {
        title: "It's Bigger Than Us",
        description: "At JC Movement, we believe in showing love through action. From mentoring students to supporting families during the holidays, our mission is rooted in service, faith, and community. Every child matters. Every act of kindness counts.",
        bullets: [
            {
                title: "Youth Empowerment",
                description: "Supporting 90+ students through after-school programs at KIPP Kirkpatrick and Liberty Collegiate Academy.",
                icon: <FiUsers size={26} />
            },
            {
                title: "Holiday Giving",
                description: "Providing gifts and gift cards to families in need to spread joy and hope during the Christmas season.",
                icon: <FiGift size={26} />
            },
            {
                title: "Partner With Purpose",
                description: "Help us make a difference. Donate online, sponsor a child, or deliver holiday items to our organization directly.",
                icon: <FaHandsHelping size={26} />
            }
        ], 
        imageSrc: "/images/jc-mock2.webp"
    },
    {
        title: "Summer Camp 2025",
        description: "Join J.C. Movement, Inc. this summer at KIPP Kirkpatrick in Nashville for a fun, affordable, and enriching camp experience your child will never forget!",
        bullets: [
            {
                title: "What to Expect",
                description: "Fun daily activities, academic enrichment (especially reading), arts & crafts, outdoor play, themed events, and a nurturing environment.",
                icon: <FiLock size={26} />
            },
            {
                title: "Camp Details",
                description: "June 2 – June 30, Monday–Friday, 6:30 AM – 5:45 PM at KIPP Kirkpatrick, 1000 Sevier Street, Nashville, TN.",
                icon: <FiUser size={26} />
            },
            {
                title: "Affordable Tuition",
                description: "$100/week with meals included (breakfast, snack, lunch). One-time registration fee: $50. Visit jcmovement.org to register—spots are limited!",
                icon: <FiShield size={26} />
            }
        ],
        imageSrc: "/images/jc-camp.webp"
    },
];