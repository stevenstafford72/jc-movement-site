import clsx from "clsx";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { HiOutlineMapPin } from "react-icons/hi2";
import { FiChevronDown } from "react-icons/fi";
import { IPricing } from "@/types";
import React from "react";
import Link from "next/link";

interface Props {
    tier: IPricing;
    highlight?: boolean;
}

const PricingColumn: React.FC<Props> = ({ tier, highlight }: Props) => {
    const { name, price, features, location, sections, ctaLabel } = tier;

    return (
        <div
            className={clsx(
                "w-full max-w-sm mx-auto rounded-2xl border overflow-hidden",
                highlight
                    ? "bg-white border-blue-300 shadow-xl"
                    : "bg-white border-gray-200 shadow-sm"
            )}
        >
            <div
                className={clsx(
                    "p-6 border-b",
                    highlight ? "bg-blue-50 border-blue-200" : "bg-gray-50 border-gray-200"
                )}
            >
                <h3 className="text-2xl font-bold text-gray-900 leading-tight mb-4">
                    {name}
                </h3>

                <p className="text-3xl font-extrabold mb-6 text-gray-900">
                    <span>{typeof price === "number" ? `$${price}` : price}</span>
                    {typeof price === "number" && (
                        <span className="text-base font-medium text-gray-500"> /weekly</span>
                    )}
                </p>

                <Link
                    href={tier.link}
                    target="_blank"
                    className={clsx(
                        "w-full flex items-center justify-center py-3 px-4 rounded-full text-white font-semibold text-base transition-colors",
                        highlight
                            ? "bg-blue-900 hover:bg-blue-800"
                            : "bg-blue-900 hover:bg-blue-800"
                    )}
                >
                    {ctaLabel || "Register Now"}
                </Link>
            </div>

            <div className="p-6 space-y-6">
                {features?.length > 0 && (
                    <div>
                        <p className="font-bold text-sm tracking-wide text-gray-800 uppercase mb-1">
                            Features
                        </p>
                        <p className="text-sm text-gray-500 mb-4">What’s included:</p>

                        <ul className="space-y-3">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-start text-gray-800">
                                    <BsFillCheckCircleFill className="h-5 w-5 text-yellow-600 mr-3 mt-0.5 shrink-0" />
                                    <span className="text-[15px] leading-7">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {location && (
                    <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
                        <p className="font-bold text-gray-900 mb-3 text-base">Camp Location</p>

                        <Link
                            href={location.href}
                            target="_blank"
                            className="flex items-start gap-2 text-blue-700 hover:text-blue-800 underline underline-offset-2"
                        >
                            <HiOutlineMapPin className="h-5 w-5 mt-0.5 shrink-0" />
                            <span className="text-[15px] leading-6">{location.label}</span>
                        </Link>
                    </div>
                )}

                {sections && (
                    <div className="space-y-3">
                        {sections.map((section, index) => (
                            <details
                                key={index}
                                className="rounded-xl border border-gray-200 bg-gray-50 group"
                                open={index === 0}
                            >
                                <summary className="list-none cursor-pointer flex items-center justify-between p-4">
                                    <h4 className="font-bold text-gray-900 text-lg">
                                        {section.title}
                                    </h4>

                                    <FiChevronDown className="h-5 w-5 text-gray-500 transition-transform duration-200 group-open:rotate-180" />
                                </summary>

                                <div className="px-4 pb-4">
                                    <ul className="space-y-2">
                                        {section.items.map((item, i) => (
                                            <li
                                                key={i}
                                                className="text-gray-800 text-[15px] leading-7 flex items-start"
                                            >
                                                <span className="mr-2 mt-0.5 text-blue-600 font-bold">
                                                    •
                                                </span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </details>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default PricingColumn;