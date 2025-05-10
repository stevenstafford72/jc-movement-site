import { FiBarChart2, FiBriefcase, FiDollarSign, FiLock, FiPieChart, FiShield, FiTarget, FiTrendingUp, FiUser } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "Overview",
        description: "Empowering lives through Christ—meeting people where they are, guiding them to purpose, growth, and a higher way of living through faith, love, and education.",
        bullets: [
            {
                title: "Mission",
                description: "Coming together as one as the body of Christ to push His (Jesus Christ) mission of going to teach, help, save, and spread his love. We will achieve this mission by reaching individuals exactly where they are at in their journey of life.  ",
                icon: <FiBarChart2 size={26} />
            },
            {
                title: "Vision",
                description: "The Vision is that every person uses their gift and talents in a positive way to spread and help the world by uplifting other individual’s spirits through inspiration/motivation, education, films, music, art which are gifts and talents that are discovered and can be used.  Jesus Christ is the driving force behind the mission and brand.",
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
        title: "Letter from Our CEO and Founder",
        description: "Start building wealth today, no financial degree required. Finwise makes investing accessible and straightforward.",
        bullets: [
            {
                title: "Micro-Investing",
                description: "Begin with as little as $1 and watch your money grow.",
                icon: <FiDollarSign size={26} />
            },
            {
                title: "Expert Portfolios",
                description: "Choose from investment strategies tailored to your risk tolerance.",
                icon: <FiBriefcase size={26} />
            },
            {
                title: "Real-Time Performance",
                description: "Track your investments with easy-to-understand metrics and visuals.",
                icon: <FiPieChart size={26} />
            }
        ],
        imageSrc: "/images/mockup-2.webp"
    },
    {
        title: "Bank-Grade Security",
        description: "Your financial data deserves the best protection. Rest easy knowing Finwise employs cutting-edge security measures.",
        bullets: [
            {
                title: "Military-Grade Encryption",
                description: "Your information is safeguarded with the highest level of encryption.",
                icon: <FiLock size={26} />
            },
            {
                title: "Biometric Authentication",
                description: "Access your account securely with fingerprint or facial recognition.",
                icon: <FiUser size={26} />
            },
            {
                title: "Real-Time Fraud Detection",
                description: "Our system constantly monitors for suspicious activity to keep your money safe.",
                icon: <FiShield size={26} />
            }
        ],
        imageSrc: "/images/JC_Movement_Ad.webp"
    },
]