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

const PricingColumn: React.FC<Props> = ({ tier, highlight }) => {
    const { name, price, features, location, sections, ctaLabel } = tier;

    const isClosed = name.toLowerCase().includes("summer");

    return (
        <div
            className={clsx(
                // Fixed height keeps all pricing cards the same size
                "relative w-full max-w-sm h-[660px] mx-auto rounded-2xl border overflow-hidden transition-all duration-300",
                isClosed
                    ? "bg-gray-100 border-gray-300"
                    : highlight
                      ? "bg-white border-blue-300 shadow-xl"
                      : "bg-white border-gray-200 shadow-sm"
            )}
        >
            {/* Summer Camp Closed overlay */}
            {isClosed && (
                <div className="absolute inset-0 z-20 overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]" />

                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-10deg]">
                        <div className="whitespace-nowrap rounded-full bg-red-500 px-7 py-3 text-lg font-bold text-white shadow-xl">
                            SUMMER CAMP CLOSED
                        </div>
                    </div>
                </div>
            )}

            {/* Card header */}
            <div
                className={clsx(
                    "p-6 border-b",
                    isClosed
                        ? "bg-gray-100 border-gray-300"
                        : highlight
                          ? "bg-blue-50 border-blue-200"
                          : "bg-gray-50 border-gray-200"
                )}
            >
                <h3 className="text-2xl font-bold text-gray-900 leading-tight mb-4">
                    {name}
                </h3>

                <p className="text-3xl font-extrabold mb-6 text-gray-900">
                    <span>
                        {typeof price === "number" ? `$${price}` : price}
                    </span>

                    {typeof price === "number" && (
                        <span className="text-base font-medium text-gray-500">
                            {" "}
                            /weekly
                        </span>
                    )}
                </p>

                {isClosed ? (
                    <button
                        type="button"
                        disabled
                        className="w-full flex items-center justify-center py-3 px-4 rounded-full bg-gray-400 text-white font-semibold text-base cursor-not-allowed"
                    >
                        Registration Closed
                    </button>
                ) : (
                    <Link
                        href={tier.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center py-3 px-4 rounded-full bg-blue-900 hover:bg-blue-800 text-white font-semibold text-base transition-colors"
                    >
                        {ctaLabel || "Register Now"}
                    </Link>
                )}
            </div>

            {/* Card content */}
            <div className="p-6 space-y-6">
                {features && features.length > 0 && (
                    <div>
                        <p className="font-bold text-sm tracking-wide text-gray-800 uppercase mb-1">
                            Features
                        </p>

                        <p className="text-sm text-gray-500 mb-4">
                            What&apos;s included:
                        </p>

                        <ul className="space-y-3">
                            {features.map((feature, index) => (
                                <li
                                    key={index}
                                    className="flex items-start text-gray-800"
                                >
                                    <BsFillCheckCircleFill className="h-5 w-5 text-yellow-600 mr-3 mt-0.5 shrink-0" />

                                    <span className="text-[15px] leading-7">
                                        {feature}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {location && (
                    <div
                        className={clsx(
                            "rounded-xl border p-4",
                            isClosed
                                ? "border-gray-300 bg-gray-100"
                                : "border-blue-100 bg-blue-50"
                        )}
                    >
                        <p className="font-bold text-gray-900 mb-3 text-base">
                            Camp Location
                        </p>

                        <Link
                            href={location.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={clsx(
                                "flex items-start gap-2 underline underline-offset-2",
                                isClosed
                                    ? "text-gray-600 pointer-events-none"
                                    : "text-blue-700 hover:text-blue-800"
                            )}
                        >
                            <HiOutlineMapPin className="h-5 w-5 mt-0.5 shrink-0" />

                            <span className="text-[15px] leading-6">
                                {location.label}
                            </span>
                        </Link>
                    </div>
                )}

                {sections && sections.length > 0 && (
                    <div className="space-y-3">
                        {sections.map((section, index) => (
                            <details
                                key={index}
                                className={clsx(
                                    "rounded-xl border group",
                                    isClosed
                                        ? "border-gray-300 bg-gray-100"
                                        : "border-gray-200 bg-gray-50"
                                )}
                                open={!isClosed && index === 0}
                            >
                                <summary
                                    className={clsx(
                                        "list-none flex items-center justify-between p-4",
                                        isClosed
                                            ? "cursor-default"
                                            : "cursor-pointer"
                                    )}
                                >
                                    <h4 className="font-bold text-gray-900 text-lg">
                                        {section.title}
                                    </h4>

                                    <FiChevronDown className="h-5 w-5 text-gray-500 transition-transform duration-200 group-open:rotate-180" />
                                </summary>

                                <div className="px-4 pb-4">
                                    <ul className="space-y-2">
                                        {section.items.map((item, index) => (
                                            <li
                                                key={index}
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