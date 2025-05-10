import clsx from "clsx";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { IPricing } from "@/types";
import React from "react";
import Link from "next/link";

interface Props {
    tier: IPricing;
    highlight?: boolean;
}

const PricingColumn: React.FC<Props> = ({ tier, highlight }: Props) => {
    const { name, price, features } = tier;

    return (
        <div className={clsx(
            "w-full max-w-sm mx-auto rounded-xl border",
            highlight ? "bg-yellow-100 border-yellow-400 shadow-lg" : "bg-white border-gray-200"
        )}>
            <div className={clsx("p-6 border-b rounded-t-xl", highlight ? "border-yellow-400 bg-yellow-50" : "border-gray-200")}>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{name}</h3>
                <p className="text-4xl font-extrabold mb-6 text-gray-900">
                    <span className={highlight ? "text-yellow-700" : "text-gray-800"}>
                        {typeof price === 'number' ? `$${price}` : price}
                    </span>
                    {typeof price === 'number' && <span className="text-lg font-normal text-gray-500"> /weekly</span>}
                </p>
                <button className={clsx(
                    "w-full py-3 px-4 rounded-full text-white font-semibold transition-colors",
                    highlight
                        ? "bg-yellow-600 hover:bg-yellow-700"
                        : "bg-blue-900 hover:bg-blue-800"
                )}>
                    <Link href={tier.link} target="blank" className="flex items-center justify-center">
                        Register Now
                    </Link>
                </button>
                
                


            </div>
            <div className="p-6 mt-1">
                <p className="font-bold mb-0 text-gray-700">FEATURES</p>
                <p className="text-sm text-gray-500 mb-5">What’s included:</p>
                <ul className="space-y-4">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                            <BsFillCheckCircleFill className="h-5 w-5 text-yellow-600 mr-2" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PricingColumn;
